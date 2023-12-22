import React from 'react';
import { Link } from 'react-router-dom';

const Interview = () => {
  return (
    <Link to="/questions">
    <div className="bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white p-4 rounded-md shadow-md mb-4 drop-shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Prepare for Placements</h2>
      <div className="text-white mb-4">
          Get placement ready with us!
      </div>
    </div>
    </Link>
  );
};



export default Interview;