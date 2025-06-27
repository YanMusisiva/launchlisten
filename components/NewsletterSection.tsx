"use client";
import React, { useState } from "react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-8 mt-12 mb-8 text-center break-inside-avoid">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Get updated Now subscribe</h2>
      <p className="mb-6 text-black">
        Get the latest giveaway links and fun content from your country delivered to your inbox.
      </p>
      {sent ? (
        <div className="text-green-600 font-semibold">Thank you for signing up!</div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Váš e-mail"
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;