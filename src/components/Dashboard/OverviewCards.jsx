import React, { useMemo } from 'react';
import { useFinance } from '../../hooks/useFinance';
import { formatCurrency } from '../../utils/currencyFormatter';

const OverviewCards = () => {
  const { records, balanceLimit } = useFinance();

  const totalOutgoings = useMemo(() => {
    return records.reduce((accumulated, currentRecord) => {
      return accumulated + currentRecord.amount;
    }, 0);
  }, [records]);

  const availableFunds = balanceLimit - totalOutgoings;
  
  const isOverBudget = availableFunds < 0;

  return (
    <div className="overview-container">
      <div className="card card-limit">
        <h4 className="card-title">Initial Limit</h4>
        <p className="card-value">{formatCurrency(balanceLimit)}</p>
      </div>
      
      <div className={`card card-available ${isOverBudget ? 'card-warning' : 'card-safe'}`}>
        <h4 className="card-title">Funds Available</h4>
        <p className="card-value">{formatCurrency(availableFunds)}</p>
      </div>

      <div className="card card-spent">
        <h4 className="card-title">Amount Spent</h4>
        <p className="card-value">{formatCurrency(totalOutgoings)}</p>
      </div>
    </div>
  );
};

export default OverviewCards;
