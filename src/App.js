import React, { useState } from 'react';
import TransactionTable from './Components/TransactionTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionForm from './Components/TransactionForm';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>The Bank of Flatiron</h1>
      <div className='transaction-form'>
        <TransactionForm onsubmit={handleAddTransaction} />
      </div>
      <div className='transaction-table'>
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
