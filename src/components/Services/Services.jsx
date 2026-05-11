import { services } from '../../data/services';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="section-label">Serviços</div>
          <h2>O que posso fazer<br />por você</h2>
          <p>Atendimento ágil e desenvolvimento focado em resultado — do ticket ao deploy.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
