import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="container  p-6 bg-gray-400 shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h1>
      <form>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
