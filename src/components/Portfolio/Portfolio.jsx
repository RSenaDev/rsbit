import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className={styles.intro}>
          <div className="section-label">Portfólio</div>
          <h2>Projetos</h2>
          <p>Uma seleção de trabalhos — novos projetos em desenvolvimento.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
