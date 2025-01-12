import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
export default function Contact({ name, number }) {
  return (
    <div className={css.contactContainer}>
      <div>
        <h3 className={css.contactTitle}>
          <span className={css.contactIcon}>
            <FaUser />
          </span>
          {name}
        </h3>
        <p className={css.contactText}>
          <span className={css.contactIcon}>
            <FaPhone />
          </span>
          {number}
        </p>
      </div>
      <button className={css.deleteBtn}>Delete</button>
    </div>
  );
}
