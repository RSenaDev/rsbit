import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const SERVICE_OPTIONS = [
  'Suporte & Helpdesk',
  'Desenvolvimento Web',
  'Automação & Scripts',
  'Infraestrutura & Cloud',
  'Outro',
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xpqbboae');

  if (state.succeeded) {
    return (
      <div className={styles.form}>
        <h3>Enviar mensagem</h3>
        <div className={styles.success}>
          ✅ Mensagem enviada! Responderei em breve.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <h3>Enviar mensagem</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nome</label>
          <input name="nome" type="text" placeholder="Seu nome completo" required disabled={state.submitting} />
          <ValidationError field="nome" errors={state.errors} className={styles.fieldError} />
        </div>
        <div className={styles.formGroup}>
          <label>E-mail</label>
          <input name="email" type="email" placeholder="seu@email.com" required disabled={state.submitting} />
          <ValidationError field="email" errors={state.errors} className={styles.fieldError} />
        </div>
        <div className={styles.formGroup}>
          <label>Serviço de interesse</label>
          <select name="servico" disabled={state.submitting}>
            <option value="">Selecione um serviço</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Mensagem</label>
          <textarea name="mensagem" placeholder="Descreva seu projeto ou problema..." disabled={state.submitting} />
          <ValidationError field="mensagem" errors={state.errors} className={styles.fieldError} />
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.submitBtn}`}
          disabled={state.submitting}
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensagem ✈'}
        </button>

        <ValidationError errors={state.errors} className={styles.error} />
      </form>
    </div>
  );
}
