import React, { useState, FC } from 'react';

import './App.css';

interface TextInputProps {
  maxLength: number;
  minLength: number;
}

export const TextInput: FC<TextInputProps> = ({ maxLength, minLength }) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

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

  function validatePassword(password: string) {
    for (const validator of passwordValidators) {
      if (!validator.regex.test(password)) {
        return validator.message;
      }
    }
    return 'The string is valid.';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value.substring(0, maxLength);
    setText(inputText);
    setMessage(validatePassword(inputText));
  };

  const isValid = message === 'The string is valid.';

  return (
    <div className='Text-input-container'>
      <label>Validate your string below</label>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        className='Text-input'
      />
      <p style={{ color: isValid ? 'green' : 'red' }}>{message}</p>
    </div>
  );
};
