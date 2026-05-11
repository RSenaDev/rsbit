import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className={styles.wrap}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
