import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/storyComponents/TextInput'; 
import Button from '../components/storyComponents/Button';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginFormComponents: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      console.log('Navigation triggered');
      onLogin(email, password);
      navigate('/products');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <TextInput
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <TextInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default LoginFormComponents;
