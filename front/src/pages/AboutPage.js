import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const AboutPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to My Online Courses, your number one source for all things related to online education.
          We're dedicated to giving you the very best of online courses, with a focus on quality content, 
          accessibility, and a great learning experience.
        </Typography>
        <Typography variant="body1" paragraph>
          Created in 2024 by a group of UCC students, this page was designed using React, Golang, MYSQL, and Docker.
        </Typography>
        <Typography variant="body1" paragraph>
          We hope you find this page appealing and useful, please enjoy our courses as much as we enjoy offering them to you. If you have any questions or comments, 
          please don't hesitate to contact us.
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
