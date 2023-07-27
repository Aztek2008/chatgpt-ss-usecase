import React, { useState } from 'react';

import { TextInput } from './TextInput';

import './App.css';
import { testIsValidPassword } from './utils';

export const App = () => {
  const [maxLength, setMaxLength] = useState(12);
  const [minLength, setMinLength] = useState(1);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');

  const passwordValidators = [
    {
      regex: new RegExp(`.{${minLength},${maxLength}}`),
      message: `Length must be ${minLength}-${maxLength} characters.`,
    },
    { regex: /[A-Z]/, message: 'Must contain at least one uppercase letter.' },
    { regex: /[a-z]/, message: 'Must contain at least one lowercase letter.' },
    { regex: /\d/, message: 'Must contain at least one digit.' },
    {
      regex: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/,
      message: 'Must contain at least one special character.',
    },
    { regex: /^\S*$/, message: 'Must not contain any whitespace characters.' },
  ];

  const validatePassword = (password: string) => {
    for (const validator of passwordValidators) {
      if (!validator.regex.test(password)) {
        return validator.message;
      }
    }

    return 'The string is valid.';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value.substring(0, maxLength);

    setText(inputText);
    setMessage(validatePassword(inputText));
  };

  const isValid = message === 'The string is valid.';

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

  testIsValidPassword(validatePassword);

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
              className='App-params-input'
              onChange={handleMinLengthChange}
            />
          </div>

          <div>
            <label htmlFor='max'>Text max length</label>
            <input
              id='max'
              type='number'
              value={maxLength}
              className='App-params-input'
              onChange={handleMaxLengthChange}
            />
          </div>
        </div>

        <TextInput
          handleChange={handleChange}
          message={message}
          isValid={isValid}
          text={text}
        />
      </section>
    </div>
  );
};
