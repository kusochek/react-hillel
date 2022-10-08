import React from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";
import List from '@mui/material/List';

function ContactsList({ contacts, onSelect, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <List>
            <ContactsListItem
              key={contact.id}
              contact={contact}
              onSelect={onSelect}
              onDelete={onDelete}
            />
        </List>
      ))}
    </ul>
  );
}

export default ContactsList;
