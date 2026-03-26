import React from 'react';
import { useFinance } from '../../hooks/useFinance';
import { formatCurrency } from '../../utils/currencyFormatter';

const CloseIcon = ({ size = 24, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon-delete"
    onClick={onClick}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

const TransactionNode = ({ id, label, value }) => {
  const { dispatchAction } = useFinance();

  const handleRemoval = () => {
    dispatchAction({
      type: 'REMOVE_RECORD',
      payload: id,
    });
  };

  return (
    <li className="node-item">
      <span className="node-label">{label}</span>
      <div className="node-actions">
        <span className="node-amount">{formatCurrency(value)}</span>
        <button
          onClick={handleRemoval}
          className="btn-delete"
          aria-label={`Remove ${label}`}
        >
          <CloseIcon size={22} />
        </button>
      </div>
    </li>
  );
};

export default TransactionNode;
