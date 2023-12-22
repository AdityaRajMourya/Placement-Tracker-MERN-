import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I apply for placements?',
      answer: 'You can apply for placements by visiting the "Apply" section on our platform.',
    },
    {
      question: 'What documents are required for the application?',
      answer: 'The required documents may vary, but typically include your resume, cover letter, and academic transcripts.',
    },
    {
      question: 'How can I track my application status?',
      answer: 'You can check the status of your application by logging into your account and visiting the "Application Status" page.',
    },
    {
      question: 'How do I create an account on the placement platform?',
      answer: 'To create an account, click on the "Sign Up" button on the homepage and follow the instructions to provide your details.',
    },
    {
      question: 'What information should I include in my resume?',
      answer: 'Your resume should include your educational background, work experience, skills, and any relevant achievements. Make sure to tailor it for each job application.',
    },
    {
      question: 'Can I apply for multiple jobs simultaneously?',
      answer: 'Yes, you can apply for multiple jobs at the same time. Visit the "Apply" section and explore the available job listings.',
    },
    {
      question: 'How can I update my profile information?',
      answer: 'Log in to your account, go to the "Profile" section, and you can edit your information, including contact details, education, and work experience.',
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'If you forget your password, click on the "Forgot Password" link on the login page. You will receive instructions on how to reset your password via email.',
    },
    {
      question: 'How does the application status feature work?',
      answer: 'You can track the status of your applications in the "Application Status" page. It will show whether your application is pending, in review, or has been accepted or rejected.',
    },
    {
      question: 'Is there a specific format for the cover letter?',
      answer: 'While there is no strict format, a cover letter should introduce yourself, highlight your qualifications, and explain why you are a good fit for the position. Keep it concise and tailored to the job description.',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className={`cursor-pointer flex justify-between items-center p-3 rounded-md ${
              activeIndex === index ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <p>{item.question}</p>
            <span>{activeIndex === index ? '▼' : '▶'}</span>
          </div>
          {activeIndex === index && (
            <div className="p-3 text-white">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
