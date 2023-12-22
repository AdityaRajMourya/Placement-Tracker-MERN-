// Dashboard.js
import React from 'react';
import ApplyCard from './ApplyCard';
import PlacementHighlightsCard from './PlacementHighlightsCard';
import Interview from './Interview';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 m-6">
      <h1 className="text-3xl text-white drop-shadow-lg font-semibold mb-4">Dashboard</h1>
      <ApplyCard />
      <Interview />
      <PlacementHighlightsCard />
    </div>
  );
};

export default Dashboard;
