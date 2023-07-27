import { ChangeEvent, FC } from 'react';

import './App.css';

interface TextInputProps {
  text: string;
  message: string;
  isValid: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: FC<TextInputProps> = ({
  handleChange,
  isValid,
  message,
  text,
}) => {
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
