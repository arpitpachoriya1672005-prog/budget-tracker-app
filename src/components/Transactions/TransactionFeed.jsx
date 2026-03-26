import React from 'react';
import { useFinance } from '../../hooks/useFinance';
import TransactionNode from './TransactionNode';

const TransactionFeed = () => {
  const { records } = useFinance();

  if (records.length === 0) {
    return (
      <div className="empty-state">
        <p>No transaction history found. Let's start tracking!</p>
      </div>
    );
  }

  return (
    <div className="feed-wrapper">
      <ul className="feed-list">
        {records.map((entry) => (
          <TransactionNode
            key={entry.identifier}
            id={entry.identifier}
            label={entry.description}
            value={entry.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionFeed;
