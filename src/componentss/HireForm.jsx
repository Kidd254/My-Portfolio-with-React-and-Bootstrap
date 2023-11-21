// HireForm.js
import React, { useState } from 'react';
import styles from '../styles/HireForm.module.css';

const HireForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={`text-white ${styles.label}`}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default HireForm;
