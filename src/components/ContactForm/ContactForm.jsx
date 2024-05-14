import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.container}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
