import { Link } from "react-router-dom";
import "./styles.css";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactsListItem({ contact, onDelete, onSelect }) {
  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(contact);
  };
  return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={onDeleteClick} />
          </IconButton>
        }
      >
        <Link className="flex" to={`/contacts/${contact.id}`}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${contact.name} ${contact.surname} - ${contact.phone}`}
            />
          </Link>
      </ListItem>
  );
}

export default ContactsListItem;
