import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/contact/contactsSelector';
// import { deleteContactAction } from 'redux/contact/contact-slice';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/filter/filterSelector';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const removeContact = (id) => dispatch(deleteContact(id));
  const filterContact = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {filterContact.length > 0 && !error ? (
        <div>
         {filterContact.map((contact) => {
           return (
             <li key={contact.id} className={css.participantsEntry}>
               <p>{contact.name}: <span>{contact.number}</span></p>
               <button type="button" className={css.participantsBtn} onClick={() => removeContact(contact.id)}>delete</button>
             </li>
           );
          })}
        </div>
      ) : (
        !isLoading && <p>Your Phonebook is empty!</p>
      )}
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