import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-white bg-white p-4 bg-white bg-opacity-75 p-6 rounded-md backdrop-filter backdrop-blur-md shadow-lg p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">About Placement Tracker App</h2>
        <p className="text-lg text-gray-800 mb-6">
          Welcome to Placement Tracker App, your dedicated platform for managing placement activities efficiently.
          We strive to create a seamless experience for both students and recruiters, streamlining the placement process.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Explore the features that enable students to apply for new job opportunities, view placement highlights, and
          analyze placement trends over the last five years. Our platform is designed to provide recruiters with a
          user-friendly interface to connect with potential candidates effortlessly.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          For any inquiries or assistance, feel free to contact us at{' '}
          <a href="mailto:info@placementtrackerapp.com" className="text-red-500 hover:underline">
            info@placementtrackerapp.com
          </a>
          .
        </p>
        <p className="text-lg text-gray-800 mb-8">
          <i>Stay connected with us on social media for the latest updates and news.</i>
        </p>
      </div>
    </div>
  );
};

export default About;
