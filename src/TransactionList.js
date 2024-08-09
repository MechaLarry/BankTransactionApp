import React from 'react';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.description} - {transaction.category} - ${transaction.amount}
          <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

//pass delete function
function TransactionList({ transactions, onDeleteTransaction }) {
    return (
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount}
            <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
export default TransactionList;
