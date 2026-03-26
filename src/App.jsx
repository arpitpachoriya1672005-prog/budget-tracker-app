import React from 'react';
import { FinanceProvider } from './store/FinanceProvider';
import OverviewCards from './components/Dashboard/OverviewCards';
import TransactionFeed from './components/Transactions/TransactionFeed';
import NewTransactionEntry from './components/Transactions/NewTransactionEntry';
import './styles/theme.css';

const App = () => {
  return (
    <FinanceProvider>
      <main className="app-container">
        <header className="brand-header">
          <h1 className="brand-title">Lumina Tracker</h1>
        </header>

        <section>
          <OverviewCards />
        </section>

        <section>
          <h2 className="section-title">Recent Activity</h2>
          <TransactionFeed />
        </section>

        <section>
          <h2 className="section-title">Add Transaction</h2>
          <NewTransactionEntry />
        </section>
      </main>
    </FinanceProvider>
  );
};

export default App;
