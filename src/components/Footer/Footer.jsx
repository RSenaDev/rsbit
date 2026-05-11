import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { href: '#services',  label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#contact',   label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            RS<span className={styles.logoAccent}>bit</span>
          </a>
          <p className={styles.copy}>© 2024 RSbit. Todos os direitos reservados.</p>
          <ul className={styles.links}>
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
