import React from 'react';

const PlacementHighlights = () => {
  return (
    <div className="container mx-auto mt-8 p-8 rounded-md">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">Placement Highlights</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="./images/hi1.jpg"
            alt="Highlight 1"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div>
          <img
            src="./images/hi2.jpg"
            alt="Highlight 2"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div>
          <img
            src="./images/hi3.jpg"
            alt="Highlight 3"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div>
          <img
            src="./images/hi4.jpg"
            alt="Highlight 4"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PlacementHighlights;
