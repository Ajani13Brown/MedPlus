import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  // State variables for form fields and feedback
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(null); 
    setSuccess(null); 

    // Call loginUser with current form values
    await loginUser(username, password);
  };

  // Function to login user
  const loginUser = async (username, password) => {
    const requestData ={
      username,
      password,
    };
    console.log("Sending data to API:", requestData);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setSuccess("Login successful!");
        console.log("Login successful");
      } else {
        const data = await response.json();
        setError(data.message || "Login failed");
        console.log("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username} // Update username state
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
