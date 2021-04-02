// import React, { useState } from 'react';

const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactItem;
