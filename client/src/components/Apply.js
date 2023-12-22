import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    graduationYear: '',
    university: '',
    gpa: '',
    skills: '',
    experience: '',
    project: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/apply', formData);
      setSubmitSuccess(true);
      console.log('Application submitted successfully!');

      setTimeout(() => {
        setSubmitSuccess(false);
        navigate('/dashboard')
      }, 3000);
    } catch (error) {
      console.error('Error sending data:', error.message);
    }
  };

  useEffect(() => {
    return () => setSubmitSuccess(false);
  }, [])

  return (
    <div className="container mx-auto mt-8 p-8 rounded-md">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">Placement Application Form</h2>

      {submitSuccess ? (
        <div className="text-yellow-400 text-2xl text-center mb-6">
          Application submitted successfully! Redirecting to the dashboard...
          <img src="./images/thankYou.png" alt="Success" className="mt-4 mx-auto" style={{ height: '300px'}}/>
        </div>
      ) : (
      <form ref={form} onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="text"
              name="university"
              placeholder="University"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="graduationYear"
              placeholder="Graduation Year"
              onChange={handleChange}
              className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            name="skills"
            placeholder="Skills"
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="experience"
            placeholder="Experience"
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <textarea
            name="project"
            placeholder="Projects"
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-400 bg-opacity-75 text-white py-3 px-6 rounded-md hover:bg-opacity-50 focus:outline-none focus:shadow-outline-blue mb-6"
        >
          Submit Application
        </button>
      </form>
      )}
    </div>
  );
};

export default Apply;
