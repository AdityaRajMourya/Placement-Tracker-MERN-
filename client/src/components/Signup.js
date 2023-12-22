// Signup.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match. Please try again.',
      }));
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/signup', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      if (response.status === 201) {
        setSuccessMessage('Signup successful! Redirecting to login page...');
        setErrors({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        setShowForm(false);

        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors||{});
      } else {
        setErrors({
          name: '',
          email: '',
          password: '',
          confirmPassword: 'Something went wrong. Please try again.',
        });
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage('');
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 rounded-md my-8 shadow-lg w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl text-white font-bold mb-4">Sign Up</h2>
        {showForm && (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Enter your name"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            </div>
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
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-white text-lg font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Confirm your password"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            </div>
            <button
              type="submit"
              className="w-full bg-white font-semibold text-lg text-red-500 py-2 px-4 my-4 rounded-md hover:text-orange-400 focus:outline-none focus:shadow-outline-red"
            >
              Sign Up
            </button>
          </form>
        )}
        {successMessage && <p className="text-yellow-500 mb-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Signup;
