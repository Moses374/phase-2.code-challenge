import React from 'react'

const TransactionTable = ({transactions}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction, index)=>(
            <tr key={index}>
                <td>{transaction.date}</td>
                <th>{transaction.description}</th>
                <th>{transaction.amount}</th>
                <th>{transaction.category}</th>
            </tr>
            ))};
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable
