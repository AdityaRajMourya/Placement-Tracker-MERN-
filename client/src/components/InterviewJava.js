// InterviewJava.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const InterviewJava = () => {
  const [questions] = useState([
    {
      id: 1,
      question: 'What is Java?',
      answer: 'Java is a high-level, object-oriented, and platform-independent programming language.',
    },
    {
      id: 2,
      question: 'Explain the difference between JDK, JRE, and JVM.',
      answer: 'JDK (Java Development Kit) is a software development kit, JRE (Java Runtime Environment) is the runtime environment, and JVM (Java Virtual Machine) is the virtual machine where Java programs run.',
    },
    {
      id: 3,
      question: 'What is the difference between abstract class and interface in Java?',
      answer: 'An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods. A class can implement multiple interfaces, but it can extend only one abstract class.',
    },
    {
      id: 4,
      question: 'What is the purpose of the "final" keyword in Java?',
      answer: 'The "final" keyword is used to restrict the modification of classes, methods, and variables. In the case of a variable, it makes the variable a constant.',
    },
    {
      id: 5,
      question: 'Explain the concept of multithreading in Java.',
      answer: 'Multithreading is the concurrent execution of more than one sequential set of instructions. It allows multiple threads to exist within the same process, sharing the same resources but executing independently.',
    },
    {
      id: 6,
      question: 'What is the difference between method overloading and method overriding?',
      answer: 'Method overloading occurs when two or more methods in the same class have the same method name but different parameters. Method overriding occurs when a subclass provides a specific implementation for a method that is already provided by its parent class.',
    },
    {
      id: 7,
      question: 'What is the use of the "this" keyword in Java?',
      answer: 'The "this" keyword refers to the current instance of the class. It is used to differentiate instance variables from local variables when they have the same name.',
    },
    {
      id: 8,
      question: 'How does exception handling work in Java?',
      answer: 'Exception handling in Java is done using the try, catch, throw, and finally blocks. The try block contains the code that might throw an exception, and the catch block handles the exception. The throw keyword is used to explicitly throw an exception, and the finally block contains code that will be executed regardless of whether an exception is thrown or not.',
    },
    {
      id: 9,
      question: 'What is the difference between "==" and ".equals()" in Java?',
      answer: '"==" is used to compare primitive data types, while ".equals()" is used to compare the content of objects, especially strings.',
    },
    {
      id: 10,
      question: 'Explain the concept of garbage collection in Java.',
      answer: 'Garbage collection is the process of automatically reclaiming the memory occupied by objects that are no longer in use. Java\'s garbage collector runs in the background, identifying and collecting objects that are no longer reachable by the program.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions (Java)</h2>
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

export default InterviewJava;
