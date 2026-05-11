import styles from './Contact.module.css';

const INFO_ITEMS = [
  { icon: '📧', label: 'E-mail',         content: <a href="mailto:rsenawork@gmail.com">rsenawork@gmail.com</a> },
  { icon: '📍', label: 'Localização',    content: <span>Portugal — Atendimento remoto e presencial</span> },
  { icon: '⏰', label: 'Disponibilidade', content: <span>Seg–Sex, 09h–18h (UTC-3)</span> },
];

const SOCIALS = [
  { icon: '📧', href: 'mailto:rsenawork@gmail.com', title: 'Email' },
  { icon: '💼', href: '#', title: 'LinkedIn' },
  { icon: '💻', href: '#', title: 'GitHub' },
  { icon: '💬', href: '#', title: 'WhatsApp' },
];

export default function ContactInfo() {
  return (
    <div className={styles.info}>
      <div className="section-label">Contato</div>
      <h2>Vamos trabalhar<br />juntos</h2>
      <p className={styles.infoDesc}>
        Tem um projeto em mente ou precisa de suporte técnico?
        Entre em contato — respondo em até 24h.
      </p>

      <div className={styles.items}>
        {INFO_ITEMS.map(({ icon, label, content }) => (
          <div key={label} className={styles.item}>
            <div className={styles.itemIcon}>{icon}</div>
            <div className={styles.itemDetail}>
              <strong>{label}</strong>
              {content}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.socials}>
        {SOCIALS.map(({ icon, href, title }) => (
          <a key={title} href={href} className={styles.socialBtn} title={title}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
