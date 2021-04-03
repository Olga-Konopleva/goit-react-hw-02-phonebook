import styled from 'styled-components';
import ContactItem from './ContactItem';

const Ul = styled.ul`
  list-style: none;
  padding-left: 5px;
`;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </Ul>
  );
};

export default ContactList;
