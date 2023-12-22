// InterviewOS.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const InterviewOS = () => {
  const [questions] = useState([
    {
      id: 1,
      question: 'What is an operating system?',
      answer: 'An operating system is system software that manages computer hardware, software resources, and provides various services for computer programs.',
    },
    {
      id: 2,
      question: 'Explain the difference between multiprogramming and multitasking.',
      answer: 'Multiprogramming involves running multiple programs on a single processor, while multitasking involves executing multiple tasks concurrently.',
    },
    {
      id: 3,
      question: 'What is virtual memory?',
      answer: 'Virtual memory is a memory management technique that provides an "idealized abstraction of the storage resources that are actually available on a given machine" that "creates the illusion to users of a very large (main) memory."',
    },
    {
      id: 4,
      question: 'What is a deadlock?',
      answer: 'A deadlock is a situation where two or more processes are unable to proceed because each is waiting for the other to release a resource.',
    },
    {
      id: 5,
      question: 'Explain the concept of paging in operating systems.',
      answer: 'Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It allows the physical address space of a process to be non-contiguous.',
    },
    {
      id: 6,
      question: 'What is a semaphore?',
      answer: 'A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system.',
    },
    {
      id: 7,
      question: 'What is the role of the CPU scheduler?',
      answer: 'The CPU scheduler is responsible for selecting a process from the ready queue and allocating the CPU to that process.',
    },
    {
      id: 8,
      question: 'What is the purpose of an I/O scheduler?',
      answer: 'An I/O scheduler is responsible for prioritizing and scheduling the execution of I/O-bound processes in a system.',
    },
    {
      id: 9,
      question: 'Explain the concept of file system fragmentation.',
      answer: 'File system fragmentation occurs when file data is stored in non-contiguous blocks, leading to inefficient use of storage space and increased disk access times.',
    },
    {
      id: 10,
      question: 'What is the difference between a process and a thread?',
      answer: 'A process is an independent program that runs in its own memory space, while a thread is a lightweight process that shares the same memory space as the parent process.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-1/2 mx-auto mt-8 p-8">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions (Operating Systems)</h2>
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

export default InterviewOS;
