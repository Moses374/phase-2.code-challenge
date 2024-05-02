import React, { useState } from 'react';
import FilterTransaction from './Components/SearchBar';
import TransactionForm from './Components/TransactionForm';
import TransactionTable from './Components/TransactionTable';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <div className='App-header'>
      <h1>The Bank of Flatiron</h1>
      </div>
      <div class="filter-transaction">
            <FilterTransaction/>
            </div>
      <div className='transaction-form'>
        <TransactionForm onsubmit={handleAddTransaction} />
      </div>
      <div className='table'>
        <TransactionTable Transactions={transactions} />
      </div>
    </div>
    
  );
};

export default App;
