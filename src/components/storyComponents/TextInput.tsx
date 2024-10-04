import React from 'react';

interface TextInputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput= ({ id, type, value, onChange, placeholder } : TextInputProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      required
    />
  );
};

export default TextInput;
