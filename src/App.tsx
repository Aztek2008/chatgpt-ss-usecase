import React, { useState } from 'react';
import './App.css';
import { TextInput } from './TextInput';

export const App = () => {
  const [maxLength, setMaxLength] = useState(12);
  const [minLength, setMinLength] = useState(1);

  const handleMaxLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newMaxLength = parseInt(event.target.value, 10);
    if (newMaxLength >= minLength) {
      setMaxLength(newMaxLength);
    } else {
      alert('Max length must be greater than or equal to min length');
    }
  };

  const handleMinLengthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newMinLength = parseInt(event.target.value, 10);
    if (newMinLength <= maxLength) {
      setMinLength(newMinLength);
    } else {
      alert('Min length must be less than or equal to max length');
    }
  };

  return (
    <div className='App'>
      <section className='App-header'>
        <div className='App-params-inputs'>
          <div>
            <label htmlFor='min'>Text min length</label>
            <input
              id='min'
              type='number'
              value={minLength}
              onChange={handleMinLengthChange}
              className='App-params-input'
            />
          </div>

          <div>
            <label htmlFor='max'>Text max length</label>
            <input
              id='max'
              type='number'
              value={maxLength}
              onChange={handleMaxLengthChange}
              className='App-params-input'
            />
          </div>
        </div>

        <TextInput maxLength={maxLength} minLength={minLength} />
      </section>
    </div>
  );
};
