import React, { useState } from 'react';
import './Signup.css'; 


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (username && password) {
      // Store user data in local storage
      const userData = { username, password };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Signup successful! \n please login to use taskboard');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
     
    </div>
  );
}

export default Signup;
