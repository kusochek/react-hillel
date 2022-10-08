import api from "../api/api";
import { CONTACTS_URI } from "../constants";

export function getContactsList() {
  return api.get(CONTACTS_URI).then((resp) => resp.data);
}

export function getContact(id) {
  return api.get(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}

export function createContact(contact) {
  return api.post(CONTACTS_URI, contact).then((resp) => resp.data);
}

export function updateContact(contact) {
  return api.put(CONTACTS_URI + "/" + contact.id).then((resp) => resp.data);
}

export function deleteContact(id) {
  return api.delete(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}
