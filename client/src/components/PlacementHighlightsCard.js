// PlacementHighlightsCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PlacementHighlightsCard = () => {
  return (
    <Link to="/placementHighlights">
    <div className="bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white p-4 rounded-md shadow-md mb-4 drop-shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Placement Highlights</h2>
      <p className="text-white mb-4">Explore the latest placement highlights and success stories.</p>
    </div>
    </Link>
  );
};

export default PlacementHighlightsCard;
