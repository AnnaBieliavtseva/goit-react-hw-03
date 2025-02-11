import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
