import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoMdClose } from "react-icons/io";

const ContactPopup = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullName,
      email,
      message,
    };

    emailjs
      .send(
        "service_xh60f3r",
        "template_rehznzy",
        templateParams,
        "TiFhrXoPD-ZtNBC03"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          onClose(); // Optionally close the popup on successful submission
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4"
      onClick={() => onClose()}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-1/3 p-6 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoMdClose className="text-2xl" />
        </button>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-center text-xl font-semibold">Contact Us</h2>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
