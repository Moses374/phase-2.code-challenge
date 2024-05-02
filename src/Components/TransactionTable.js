import React from 'react'
import Table from'react-bootstrap/Table';
const TransactionTable = ({Transactions}) => {
  return (
    <Table striped>
              <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {Transactions.map((transaction)=>(
            <tr key={transaction.id}>
                <td className='center'>{transaction.date}</td>
                <td className='center'>{transaction.description}</td>
                <td className='center'>{transaction.amount}</td>
                <td className='center'>{transaction.category}</td>
            </tr>
            ))};
        </tbody>
      </Table>
    
  );
};

export default TransactionTable
