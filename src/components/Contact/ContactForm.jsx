import { useState } from 'react';
import styles from './Contact.module.css';

const SERVICE_OPTIONS = [
  'Suporte & Helpdesk',
  'Desenvolvimento Web',
  'Automação & Scripts',
  'Infraestrutura & Cloud',
  'Outro',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1200);
  }

  return (
    <div className={styles.form}>
      <h3>Enviar mensagem</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nome</label>
          <input type="text" placeholder="Seu nome completo" required disabled={status === 'sent'} />
        </div>
        <div className={styles.formGroup}>
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" required disabled={status === 'sent'} />
        </div>
        <div className={styles.formGroup}>
          <label>Serviço de interesse</label>
          <select disabled={status === 'sent'}>
            <option value="">Selecione um serviço</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Mensagem</label>
          <textarea placeholder="Descreva seu projeto ou problema..." disabled={status === 'sent'} />
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${styles.submitBtn}`}
          disabled={status !== 'idle'}
          style={status === 'sent' ? { background: 'var(--teal)' } : {}}
        >
          {status === 'idle'    && 'Enviar mensagem ✈'}
          {status === 'sending' && 'Enviando...'}
          {status === 'sent'    && 'Enviado ✓'}
        </button>

        {status === 'sent' && (
          <div className={styles.success}>
            ✅ Mensagem enviada! Responderei em breve.
          </div>
        )}
      </form>
    </div>
  );
}
