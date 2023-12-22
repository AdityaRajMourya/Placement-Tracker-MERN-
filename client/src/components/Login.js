// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: userData.email,
        password: userData.password,
      });

      if (response.status === 200) {
        const { name } = response.data;
        login({ name });
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 rounded-md shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl text-white font-extrabold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-lg font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white font-semibold text-lg text-red-500 py-2 px-4 my-4 rounded-md hover:text-orange-400 focus:outline-none focus:shadow-outline-red"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-yellow-300 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
