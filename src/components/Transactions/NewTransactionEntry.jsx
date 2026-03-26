import React, { useState } from 'react';
import { useFinance } from '../../hooks/useFinance';
import { createUniqueId } from '../../utils/idGenerator';

const initialFormState = {
  entryTitle: '',
  entryValue: '',
};

const NewTransactionEntry = () => {
  const [formData, setFormData] = useState(initialFormState);
  const { dispatchAction } = useFinance();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.entryTitle || !formData.entryValue) return;

    const newRecord = {
      identifier: createUniqueId(),
      description: formData.entryTitle,
      amount: parseFloat(formData.entryValue),
    };

    dispatchAction({
      type: 'INSERT_RECORD',
      payload: newRecord,
    });

    // Reset Form
    setFormData(initialFormState);
  };

  return (
    <div className="entry-form-container">
      <form onSubmit={handleFormSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="entryTitle">Memo / Title</label>
          <input
            id="entryTitle"
            name="entryTitle"
            type="text"
            required
            className="input-field"
            placeholder="e.g. Groceries"
            value={formData.entryTitle}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="entryValue">Amount</label>
          <input
            id="entryValue"
            name="entryValue"
            type="number"
            required
            min="0"
            step="0.01"
            className="input-field"
            placeholder="e.g. 50.00"
            value={formData.entryValue}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" className="btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default NewTransactionEntry;
