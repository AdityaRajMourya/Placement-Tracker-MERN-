// ApplyCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ApplyCard = () => {
  return (
    <div className="bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white p-4 rounded-md shadow-md mb-4 drop-shadow-lg">
      <h2 className="text-xl text-white font-semibold mb-2">Apply for New Jobs</h2>
      <p className="text-white mb-4">Click below to apply for new job opportunities.</p>
      <Link to="/apply">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default ApplyCard;
