import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "../../components/Contact/Contact.module.css";

const Contact = ({
  contact: {
    id,
    info: { name, number },
  },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.container}>
      <div>
        <h3>
          <FaUser />
          {name}
        </h3>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
