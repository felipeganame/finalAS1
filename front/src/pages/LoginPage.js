import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password }); //cambiar por el endpoint que quede en el backend logimn
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, password }); //cambiar por el endpoint que quede en el backend registro
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Failed to register');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {showRegister ? 'Register' : 'Login'}
      </Typography>
      <form onSubmit={showRegister ? handleRegisterSubmit : handleLoginSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {showRegister && (
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {showRegister ? 'Register' : 'Login'}
        </Button>
      </form>
      <Button onClick={() => setShowRegister(!showRegister)} fullWidth sx={{ mt: 2 }}>
        {showRegister ? 'Back to Login' : 'Register'}
      </Button>
    </Box>
  );
};

export default LoginPage;
