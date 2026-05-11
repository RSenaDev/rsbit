import { skills } from '../../data/skills';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className="section-label">Sobre</div>
            <h2>Olá, sou <span className="gradient-text">Ryan</span></h2>
            <p style={{ marginTop: '16px', fontSize: '1.05rem' }}>
              Técnico de TI e desenvolvedor com foco em soluções práticas.
              Combino suporte técnico especializado com habilidades de programação
              para entregar resultados rápidos e duradouros.
            </p>
            <p style={{ marginTop: '12px' }}>
              Atuo com helpdesk, automação, desenvolvimento web e infraestrutura —
              sempre priorizando clareza, eficiência e comunicação direta com o cliente.
            </p>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <span key={skill} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.rings}>
              <div className={`${styles.ring} ${styles.ring1}`}>
                <div className={styles.ringDot} />
              </div>
              <div className={`${styles.ring} ${styles.ring2}`} />
              <div className={`${styles.ring} ${styles.ring3}`} />
              <div className={styles.ringCenter}>💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
