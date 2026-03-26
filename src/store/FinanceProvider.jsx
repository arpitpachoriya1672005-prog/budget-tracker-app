import React, { createContext, useReducer } from 'react';

const financeReducer = (state, action) => {
  switch (action.type) {
    case 'INSERT_RECORD':
      return {
        ...state,
        records: [...state.records, action.payload],
      };
    case 'REMOVE_RECORD':
      return {
        ...state,
        records: state.records.filter(
          (record) => record.identifier !== action.payload
        ),
      };
    default:
      return state;
  }
};

const defaultDataStore = {
  balanceLimit: 2000,
  records: [
    { identifier: '12', description: 'shopping', amount: 40 },
    { identifier: '13', description: 'holiday', amount: 400 },
    { identifier: '14', description: 'car service', amount: 50 },
  ],
};

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [dataStore, dispatchAction] = useReducer(financeReducer, defaultDataStore);

  return (
    <FinanceContext.Provider
      value={{
        balanceLimit: dataStore.balanceLimit,
        records: dataStore.records,
        dispatchAction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
