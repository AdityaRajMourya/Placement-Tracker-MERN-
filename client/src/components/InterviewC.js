// InterviewC.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
const InterviewC = () => {
  const [questions] = useState([
    {
      id: 1,
      question: 'What is the difference between C and C++?',
      answer: 'C is a procedural programming language, while C++ supports both procedural and object-oriented programming.',
    },
    {
      id: 2,
      question: 'What is a pointer in C?',
      answer: 'A pointer is a variable that stores the memory address of another variable.',
    },
    {
      id: 3,
      question: 'Explain the concept of function overloading in C++.',
      answer: 'Function overloading allows multiple functions with the same name but different parameters in the same scope.',
    },
    {
      id: 4,
      question: 'What is the purpose of the "const" keyword in C++?',
      answer: 'The "const" keyword is used to indicate that a variable or function parameter cannot be modified.',
    },
    {
      id: 5,
      question: 'How does dynamic memory allocation work in C?',
      answer: 'Dynamic memory allocation in C is done using functions like malloc, calloc, realloc, and free.',
    },
    {
      id: 6,
      question: 'What is the role of the "new" operator in C++?',
      answer: 'The "new" operator is used for dynamic memory allocation in C++. It returns a pointer to the allocated memory.',
    },
    {
      id: 7,
      question: 'Explain the difference between pass by value and pass by reference.',
      answer: 'In pass by value, the actual value is passed to the function, while in pass by reference, the memory address is passed.',
    },
    {
      id: 8,
      question: 'What is polymorphism in C++?',
      answer: 'Polymorphism allows objects of different types to be treated as objects of a common type. It can be achieved through function overloading and virtual functions.',
    },
    {
      id: 9,
      question: 'How is exception handling implemented in C++?',
      answer: 'C++ uses the "try," "catch," and "throw" keywords for exception handling. The "try" block contains code that may throw an exception, and the "catch" block handles the exception.',
    },
    {
      id: 10,
      question: 'What are the advantages of using structures in C?',
      answer: 'Structures in C allow you to group different data types together under a single name, making it easier to organize and manage data.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions (C/C++)</h2>
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

export default InterviewC;