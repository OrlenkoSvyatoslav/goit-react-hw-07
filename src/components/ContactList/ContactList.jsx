import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const contactName = useSelector((state) => state.filter.name);

  const filterContacts = contacts.filter((contact) =>
    contact.info.name.toLowerCase().includes(contactName.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
