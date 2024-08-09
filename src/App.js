import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

//Css
import './App.css';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleDeleteTransaction(id) {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== id)
    );
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>FlatironBank</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default App;
