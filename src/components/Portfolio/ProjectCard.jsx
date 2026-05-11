import ProjectCanvas from './ProjectCanvas';
import styles from './Portfolio.module.css';

const STATUS_STYLES = {
  active: styles.statusActive,
  soon:   styles.statusSoon,
  plan:   styles.statusPlan,
};

export default function ProjectCard({ title, description, status, statusLabel, stack, comingSoon, palette, bgGradient }) {
  return (
    <div className={`${styles.card} ${comingSoon ? styles.comingSoon : ''}`}>
      <div className={styles.thumb} style={{ background: bgGradient }}>
        <ProjectCanvas palette={palette} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.footer}>
          <span className={`${styles.status} ${STATUS_STYLES[status]}`}>
            <span className={styles.statusDot} />
            {statusLabel}
          </span>
          <a href="#contact" className={styles.link}>
            {comingSoon ? 'Interesse? →' : 'Saiba mais →'}
          </a>
        </div>
        <div className={styles.tags}>
          {stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
