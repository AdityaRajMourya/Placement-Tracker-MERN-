import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_xvr4pub";
    const userId = "PEiG92iNPTz-Dkd9h";

    emailjs
      .sendForm("service_psfefuq", templateId, e.target, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setShowSuccess(true);
        setFormData(initialFormData);

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8 flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">
        {showSuccess ? (
          <div className="text-center font-extrabold text-3xl text-yellow-300">
            <p>
              Thank you for contacting us! We will get back to you very soon :)
            </p>
            <img src="./images/thankYou.png" alt="Success" className="mt-4" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-md font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-md font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-white text-md font-semibold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white text-md font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 bg-white bg-opacity-25 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white placeholder-white focus:outline-none focus:border-orange-500"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-400 bg-opacity-75 rounded-md backdrop-filter backdrop-blur-md shadow-lg rounded-md text-white p-4 font-semibold text-lg focus:outline-none focus:shadow-outline-red hover:bg-opacity-50"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
