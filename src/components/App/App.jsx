import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "../../components/App/App.module.css";
import { useEffect } from "react";
import { fetchAllContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {isError && <p>Error</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <b>Loading...</b>}
    </div>
  );
};

export default App;
