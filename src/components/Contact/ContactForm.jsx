import { useState } from 'react';
import styles from './Contact.module.css';

const FORMSPREE_ID = 'YOUR_FORM_ID'; // substitua pelo seu ID do Formspree

const SERVICE_OPTIONS = [
  'Suporte & Helpdesk',
  'Desenvolvimento Web',
  'Automação & Scripts',
  'Infraestrutura & Cloud',
  'Outro',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const sent = status === 'sent';

  return (
    <div className={styles.form}>
      <h3>Enviar mensagem</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nome</label>
          <input name="nome" type="text" placeholder="Seu nome completo" required disabled={sent} />
        </div>
        <div className={styles.formGroup}>
          <label>E-mail</label>
          <input name="email" type="email" placeholder="seu@email.com" required disabled={sent} />
        </div>
        <div className={styles.formGroup}>
          <label>Serviço de interesse</label>
          <select name="servico" disabled={sent}>
            <option value="">Selecione um serviço</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Mensagem</label>
          <textarea name="mensagem" placeholder="Descreva seu projeto ou problema..." disabled={sent} />
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.submitBtn}`}
          disabled={status !== 'idle'}
          style={sent ? { background: 'var(--teal)' } : {}}
        >
          {status === 'idle'    && 'Enviar mensagem ✈'}
          {status === 'sending' && 'Enviando...'}
          {status === 'sent'    && 'Enviado ✓'}
          {status === 'error'   && 'Tentar novamente'}
        </button>

        {sent && (
          <div className={styles.success}>
            ✅ Mensagem enviada! Responderei em breve.
          </div>
        )}
        {status === 'error' && (
          <div className={styles.error}>
            ❌ Erro ao enviar. Tente novamente ou entre em contato diretamente.
          </div>
        )}
      </form>
    </div>
  );
}
