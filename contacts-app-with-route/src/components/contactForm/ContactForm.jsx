import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm(props) {
  const [contact, setContact] = useState({ ...props.contact });

  const onContactFormSubmit = (e) => {
    e.preventDefault();
    props.onSave(contact);
  };

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="" className="contact-form" onSubmit={onContactFormSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        type="text"
        name="name"
        id="nameInput"
        value={contact.name}
        onChange={onChange}
      />
      <label htmlFor="surnameInput">Surname</label>
      <input
        type="text"
        name="surname"
        id="surnameInput"
        value={contact.surname}
        onChange={onChange}
      />
      <label htmlFor="phoneInput">Phone</label>
      <input
        type="text"
        name="phone"
        id="phoneInput"
        value={contact.phone}
        onChange={onChange}
      />
      <div className="buttons">
        <button type="submit" className="pull-right">
          Save
        </button>
        <button type="button" className="pull-left" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
