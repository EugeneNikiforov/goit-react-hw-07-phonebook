import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/contact/contactsSelector';
import { deleteContactAction } from 'redux/contact/contact-slice';
import { selectFilteredContacts } from 'redux/filter/filterSelector';
import css from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(deleteContactAction(id));
  const filterContact = useSelector(selectFilteredContacts);

  return (
    <>
      {filterContact.map((contact) => {
        return (
          <li key={contact.id} className={css.participantsEntry}>
            <p>{contact.name}: <span>{contact.number}</span></p>
            <button type="button" className={css.participantsBtn} onClick={() => deleteContact(contact.id)}>delete</button>
          </li>
        );
      })}
    </>
  );
}


// const ContactList = ({ contacts }) => {
  
//   const contactListEl = contacts.map(contact => (
//     <li key={contact.id} className={css.participantsEntry}>{contact.name}: {contact.number}</li>
//   ))
//   return (
//     <div>
//       <ul className={css.participants}>
//         {contactListEl}
//       </ul>
//     </div>
//   )
// };
// ContactList.defaultProps = { contacts: [] };
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired
//     }))
// };