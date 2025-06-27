"use client";
import React, { useState } from "react";
const validateEmail = (email: string) => {
  // Regex robuste pour l'email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email);
};

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setLoading(true);
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (response.ok) {
      setSuccess("Inscription réussie !");
      setEmail("");
      setSent(true);
    } else {
      const data = await response.json();
      setError(
        data.message || "Erreur lors de l'inscription. Veuillez réessayer."
      );
    }
    
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
            placeholder="Your email address"
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto text-black text-semibold"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            {loading? "Sending..." : "Subscribe"}
          </button>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      {success && <p className="text-green-600 mt-2 text-center">{success}</p>}
      <p className="text-xs text-gray-500 mt-2 text-center">
        We respect your privacy. No spam.
      </p>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;