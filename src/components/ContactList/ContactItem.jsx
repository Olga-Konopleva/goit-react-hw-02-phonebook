import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid red;
  color: red;
  width: 80px;
  margin-left: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: LemonChiffon;
  }
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Li>
      {name}: {number}
      <Button onClick={onDelete}>Delete</Button>
    </Li>
  );
};

export default ContactItem;
