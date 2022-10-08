import { useCallback, useEffect, useState } from "react";
import {
  createContact,
  deleteContact,
  getContactsList,
  updateContact,
} from "../services/contactsService";
import { useBooleanFlag } from "./common";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  const [isLoading, toggleIsLoading] = useBooleanFlag(false);

  const refresh = useCallback(() => {
    toggleIsLoading(true);
    getContactsList().then((data) => {
      setContacts(data);
      toggleIsLoading(false);
    });
  }, [toggleIsLoading]);

  const save = useCallback(
    (data) => {
      toggleIsLoading(true);
      if (data.id) {
        updateContact(data).then((data) => {
          setContacts((contacts) =>
            contacts.map((el) => (el.id === data.id ? data : el))
          );
          toggleIsLoading(false);
        });
      } else {
        createContact(data).then((data) => {
          setContacts((contacts) => [...contacts, data]);
          toggleIsLoading(false);
        });
      }
    },
    [toggleIsLoading]
  );

  const remove = useCallback(
    (id) => {
      toggleIsLoading(true);
      deleteContact(id).then(() => {
        setContacts((contacts) => contacts.filter((el) => el.id !== id));
        toggleIsLoading(false);
      });
    },
    [toggleIsLoading]
  );

  useEffect(refresh, [refresh]);

  return {
    contacts,
    isLoading,
    refresh,
    save,
    remove,
  };
}
