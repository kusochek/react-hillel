import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getContact } from "./services/contactsService";
import ContactsListItem from "./components/contactsListItem/ContactsListItem";

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getContact(id).then((data) => setContact(data));
  }, [id]);

  return !contact ? <div>Loading</div> : <ContactsListItem contact={contact} />;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Link to={"/contacts"}>Contacts</Link> |{" "}
          <Link to={"/users"}>Users</Link> | <Link to={"/posts"}>Posts</Link> |{" "}
        </div>
        <Routes>
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/:id" element={<EditContact />} />
          <Route path="users" element={<div>Users</div>} />
          <Route path="posts" element={<div>Posts</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
