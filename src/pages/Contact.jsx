import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const whatsappNumber = "94705845954"; // Your WhatsApp number without + or spaces

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendWhatsApp = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const text = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl mx-4 sm:mx-auto p-4 sm:p-6 my-5 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 flex items-center justify-center gap-2">
        <FaWhatsapp className="text-green-600 text-3xl" /> Contact Me
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendWhatsApp();
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-y text-base"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded transition"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Contact;
