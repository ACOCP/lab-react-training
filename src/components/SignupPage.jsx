import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid ${(props) => (props.isValid ? '#10B981' : '#EF4444')};
  border-radius: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #2563EB;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.isValid ? '#10B981' : '#EF4444')};
`;

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const isValidEmail = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  const isStrongPassword = password.length >= 6 && /[0-9]/.test(password);
  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour'
  };

  return (
    <Container>
      <h1>Signup</h1>

      <label>Email</label>
      <Input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email"
        isValid={isValidEmail}
      />
      {email && <Message isValid={isValidEmail}>{isValidEmail ? 'You typed a valid email' : 'Your email is invalid'}</Message>}

      <label>Password</label>
      <Input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter your password"
        isValid={isStrongPassword}
      />
      {password && <Message isValid={isStrongPassword}>{isStrongPassword ? 'Your password is strong' : 'Your password is too weak'}</Message>}

      <label>Nationality</label>
      <Select value={nationality} onChange={(e) => setNationality(e.target.value)}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </Select>

      <Button>Sign up</Button>

      <hr />

      <p>{greetings[nationality]}</p>
      <p>Your email address is: {email || 'email@email.com'}</p>
      <p>{isValidEmail ? 'Your email address is correct' : 'Please enter a valid email address'}</p>
    </Container>
  );
}
