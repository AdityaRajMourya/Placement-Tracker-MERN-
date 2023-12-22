// Questions.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
  const [subjects] = useState([
    { id: 1, name: 'C/C++', image: './images/cpp.png', path: '/prepare/c_cpp' },
    { id: 2, name: 'Java', image: './images/java.png', path: '/prepare/java' },
    { id: 3, name: 'Operating Systems', image: './images/os.jpg', path: '/prepare/os' },
    { id: 4, name: 'Database Management', image: './images/dbms.png', path: '/prepare/dbms' },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2 p-5">
      {subjects.map((subject) => (
        <Link to={subject.path} key={subject.id} className="bg-white bg-opacity-50 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white p-4 rounded-md shadow-md mb-4 transition-transform transform hover:scale-105 flex flex-col items-center m-3">
          <img src={subject.image} alt={subject.name} className="h-32 object-cover mb-4 rounded-md" />
          <h3 className="text-xl font-semibold text-center">{subject.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Questions;
