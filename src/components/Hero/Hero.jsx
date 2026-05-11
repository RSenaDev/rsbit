import styles from './Hero.module.css';

const CODE_LINES = [
  { ln: 1, content: <><span className={styles.kw}>class</span> <span className={styles.fn}>RSbit</span>:</> },
  { ln: 2, content: <span className={styles.cm}>    # Suporte técnico + desenvolvimento</span> },
  { ln: 3, content: <>    services = [<span className={styles.str}>"helpdesk"</span>, <span className={styles.str}>"dev"</span>, <span className={styles.str}>"infra"</span>]</> },
  { ln: 4, content: '' },
  { ln: 5, content: <>    <span className={styles.kw}>def</span> <span className={styles.fn}>solve</span>(self, problem):</> },
  { ln: 6, content: <>        solution = self.<span className={styles.fn}>analyze</span>(problem)</> },
  { ln: 7, content: <>        <span className={styles.kw}>return</span> solution.<span className={styles.fn}>deploy</span>(fast=<span className={styles.num}>True</span>)</> },
  { ln: 8, content: '' },
  { ln: 9, content: <>rsbit = <span className={styles.fn}>RSbit</span>(); rsbit.<span className={styles.fn}>solve</span>(<span className={styles.str}>"seu projeto"</span>)</> },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />

      <div className="container">
        <div className={styles.badge}>
          <span className={styles.dot} />
          Disponível para novos projetos
        </div>

        <h1 className={styles.headline}>
          Soluções digitais<br />
          <span className="gradient-text">inteligentes e precisas</span>
        </h1>

        <p className={styles.desc}>
          Suporte técnico especializado e desenvolvimento de software sob medida.
          Da infraestrutura ao código — transformamos problemas em soluções.
        </p>

        <div className={styles.cta}>
          <a href="#contact" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Falar comigo
          </a>
          <a href="#portfolio" className="btn btn-ghost">Ver portfólio →</a>
        </div>

        <div className={styles.codePreview}>
          <div className={styles.codeBar}>
            <span className={`${styles.winDot} ${styles.red}`} />
            <span className={`${styles.winDot} ${styles.yellow}`} />
            <span className={`${styles.winDot} ${styles.green}`} />
            <span className={styles.winTitle}>rsbit — helpdesk.py</span>
          </div>
          <div className={styles.codeBody}>
            {CODE_LINES.map(({ ln, content }) => (
              <div key={ln} className={styles.codeLine}>
                <span className={styles.ln}>{ln}</span>
                <span>{content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
