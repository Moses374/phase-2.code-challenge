import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

const TransactionForm = ({ onsubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit({ description, amount, date, category });
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Choose Category</option>
          <option value='Shopping'>Shopping</option>
          <option value='Food'>Food</option>
          <option value='Travel'>Travel</option>
        </select>

        <Button type='submit' className='"btn btn-primary"'>Add Transaction</Button>
      </form>
    </div>
  );
};

export default TransactionForm;
