import { useRef, useEffect } from 'react';

function drawTech(canvas, palette) {
  const ctx = canvas.getContext('2d');
  const W = (canvas.width  = canvas.offsetWidth);
  const H = (canvas.height = canvas.offsetHeight);

  ctx.clearRect(0, 0, W, H);

  const gap = 28;
  ctx.fillStyle = palette.dot;
  for (let x = gap; x < W; x += gap) {
    for (let y = gap; y < H; y += gap) {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.strokeStyle = palette.line;
  ctx.lineWidth = 1;
  for (let i = 0; i < 6; i++) {
    const x1 = Math.random() * W, y1 = Math.random() * H;
    const x2 = x1 + (Math.random() - 0.5) * 160;
    const y2 = y1 + (Math.random() - 0.5) * 80;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  for (let i = 0; i < 3; i++) {
    const x = Math.random() * W, y = Math.random() * H;
    const r = 30 + Math.random() * 60;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, palette.glow);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = palette.node;
  ctx.strokeStyle = palette.node;
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * W, y = Math.random() * H;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
    if (i > 0) {
      const px = Math.random() * W, py = Math.random() * H;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(px, y);
      ctx.lineTo(px, py);
      ctx.stroke();
    }
  }
}

export default function ProjectCanvas({ palette, bgGradient }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    drawTech(canvas, palette);

    const handler = () => drawTech(canvas, palette);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [palette]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
