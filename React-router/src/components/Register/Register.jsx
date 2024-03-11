import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleRegister = () => {
    // Create a new user object



    const newUser = {
      name: name,
      email: email,
      password: password
    };

    // Update the users array with the new user
    setUsers([...users, newUser]);

    // Optional: You can also clear the form fields after registration
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex flex-col w-1/4 mx-auto border-2 my-32 content-center p-4 rounded-3xl shadow-md border-blue-500'>
      <label htmlFor="name">Name</label>
      <input onChange={(e) => setName(e.target.value)} className='border outline-0 p-2 my-3 rounded-md ' type="name" id="name" required />
      <label htmlFor="email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} className='border outline-0 p-2 my-3 rounded-md ' type="email" id="email" required/>
      <label htmlFor="password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} className='border outline-0 p-2 my-3 rounded-md ' type="password" id="password" required/>
      <Link  to="#" className='mx-auto'>
        <button onClick={handleRegister} className='border-2 w-24 p-2 rounded-lg mx-auto mt-10 border-blue-500 text-blue-800 font-semibold'>
          Register
        </button>
      </Link>
      <h2>Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Email: {user.email}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Register;
