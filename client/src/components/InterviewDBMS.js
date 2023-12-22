// InterviewDBMS.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const InterviewDBMS = () => {
  const [questions] = useState([
    {
      id: 1,
      question: 'What is a Database Management System (DBMS)?',
      answer: 'A Database Management System (DBMS) is software that manages databases and provides an interface for interacting with the data stored in databases.',
    },
    {
      id: 2,
      question: 'Explain the difference between a primary key and a foreign key.',
      answer: 'A primary key is a unique identifier for a record in a table, while a foreign key is a field in a table that refers to the primary key in another table.',
    },
    {
      id: 3,
      question: 'What is normalization in the context of a database?',
      answer: 'Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller tables and defining relationships between them.',
    },
    {
      id: 4,
      question: 'What are the ACID properties in the context of database transactions?',
      answer: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure that database transactions are processed reliably.',
    },
    {
      id: 5,
      question: 'Explain the concept of indexing in a database.',
      answer: 'Indexing is a technique used to optimize the retrieval of records from a database. It involves creating a data structure (an index) to improve the speed of data retrieval operations on a database table.',
    },
    {
      id: 6,
      question: 'What is a view in a database?',
      answer: 'A view is a virtual table based on the result of a SELECT query. It does not store the data itself but provides a way to present selected data from one or more tables.',
    },
    {
      id: 7,
      question: 'What is a stored procedure?',
      answer: 'A stored procedure is a precompiled collection of one or more SQL statements that can be executed as a single unit. It is stored in the database and can be invoked by name.',
    },
    {
      id: 8,
      question: 'What is the difference between a clustered and a non-clustered index?',
      answer: 'In a clustered index, the rows of a table are stored in the order of the index key, while in a non-clustered index, a separate structure is created to store the index key and a pointer to the corresponding row.',
    },
    {
      id: 9,
      question: 'Explain the concept of transactions in a database.',
      answer: 'A transaction is a sequence of one or more SQL statements that are executed as a single unit. It follows the ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure the reliability of database transactions.',
    },
    {
      id: 10,
      question: 'What is the purpose of the GROUP BY clause in SQL?',
      answer: 'The GROUP BY clause in SQL is used to arrange identical data into groups. It is often used in conjunction with aggregate functions like COUNT, SUM, AVG, etc., to perform operations on each group of data.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions (Database Management Systems)</h2>
      {questions.map((item) => (
        <div key={item.id} className="mb-4">
          <div
            className={`cursor-pointer p-4 rounded-md flex justify-between items-center transition-transform ${
              activeIndex === item.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => toggleAccordion(item.id)}
          >
            <p className="font-semibold">{item.question}</p>
            <FontAwesomeIcon
              icon={activeIndex === item.id ? faChevronUp : faChevronDown}
              className="text-xl"
            />
          </div>
          {activeIndex === item.id && (
            <div className="p-3 bg-white">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InterviewDBMS;
