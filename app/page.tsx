"use client";

import React from "react";
import NewsletterSection from "../components/NewsletterSection";

const links = [
  {
    title: "Videá",
    url: "https://example.com/videos",
    image: "videos.jpg",
  },
  {
    title: "Hry",
    url: "https://example.com/games",
    image: "games.jpg",
  },
  {
    title: "Darčeky",
    url: "https://example.com/gifts",
    image: "/images/gifts.png",
  },
  // Ajoutez d'autres liens si besoin
];

const LinksSection: React.FC = () => (
  <section id="links" className="py-8">
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Naše odkazy</h2>
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {links.map((link, idx) => (
        <div
          key={idx}
          className="break-inside-avoid rounded-xl shadow-lg bg-white mb-4 hover:scale-105 transition-transform"
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={link.image}
              alt={link.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-950">{link.title}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Vitajte na našej stránke!</h1>
        <p className="text-xl mb-6">Objavte úžasné videá, hry a darčeky!</p>
        <a
          href="#links"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          Začnite teraz
        </a>
      </div>

      {/* Présentation */}
      <section className="max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">O našej stránke</h2>
        <p className="mb-2 text-center text-black ">
          Vitajte na našej stránke, kde nájdete najnovšie videá, hry a darčeky!
          Preskúmajte naše odkazy a objavte zábavu, ktorú sme pre vás pripravili.
        </p>
        <p className="text-center text-black">
          Naša stránka je navrhnutá tak, aby ste mali jednoduchý prístup k obsahu,
          ktorý vás zaujíma. Nezabudnite sa pozrieť na naše sekcie s videami,
          hrami a darčekmi!
        </p>
      </section>

      {/* Liens façon Pinterest */}
      <LinksSection />

      {/* Newsletter */}
      <div className="max-w-xl mx-auto px-4">
        <NewsletterSection />
      </div>
    </div>
  );
}