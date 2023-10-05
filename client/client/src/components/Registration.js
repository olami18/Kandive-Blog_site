import React, { useState } from 'react';
import axios from 'axios';

function Registration({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/register'), { username }}};
