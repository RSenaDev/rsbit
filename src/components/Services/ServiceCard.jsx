import styles from './Services.module.css';

export default function ServiceCard({ icon, iconClass, title, description, tags }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.icon} ${styles[iconClass]}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
