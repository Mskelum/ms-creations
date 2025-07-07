import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ error: "Please fill all fields" });
      return;
    }

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ success: "Thank you for your feedback!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ error: "Failed to send feedback. Try again later." });
      }
    } catch (error) {
      setStatus({ error: "Server error. Try again later." });
    }
  };

  return (
    <div className="max-w-xl mx-4 sm:mx-auto p-3 sm:p-4 my-5 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-2xl font-bold mb-4 text-center text-gray-900">
        Feedback
      </h2>

      {status?.error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">{status.error}</div>
      )}
      {status?.success && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">{status.success}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full px-4 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base sm:text-lg"
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
            className="w-full px-4 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-base sm:text-lg"
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
            className="w-full px-4 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 max-h-28 resize-y text-base sm:text-lg"
            placeholder="Write your feedback here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded transition text-base sm:text-lg"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
