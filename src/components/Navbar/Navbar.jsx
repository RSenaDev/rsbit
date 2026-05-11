import { useScrolled } from '../../hooks/useScrolled';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';

const SECTIONS = ['hero', 'services', 'portfolio', 'about', 'contact'];

const NAV_LINKS = [
  { href: '#services', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#about', label: 'Sobre' },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(SECTIONS);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        RS<span className={styles.logoAccent}>bit</span>
      </a>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${activeId === href.slice(1) ? styles.active : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px' }}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
