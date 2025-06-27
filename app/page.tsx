"use client";

import React from "react";
import NewsletterSection from "../components/NewsletterSection";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    title: "Saudi Arabia",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70436",
    image: "/saudiarabia.png",
    description:"دخل رقم هاتفك الآن لبدء التنزيل",
    about:"حمّل أحدث المحتوى"
  },
 
  {
    title: "Germany",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70105",
    image: "/germany.png",
    description:"Geben Sie jetzt Ihre Kreditkartendaten ein, um loszulegen.",
    about:"Testen Sie jetzt Ihre Damenunterwäsche!"
  },
  {
    title: "United Kingdom",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70099",
    image: "/unitedkingdom.png",
    description:"Enter your credit card information now to get started.",
    about:"Start your Woman Underwear Trial Now!"
  },
  {
    title: "Denmark",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=69752",
    image: "/denmark.png",
    description:"Indtast dine kreditkortoplysninger nu for at komme i gang.",
    about:"Start din prøveperiode på dameundertøj nu!"
  },
  {
    title: "Italy",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=69067",
    image: "/italy.png",
    description:"Installa l'app e registrati nell'app.",
    about:"Registra un account SisalFunClub!"
  },
  {
    title: "New Zealand",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=52956",
    image: "/newzealand.png",
    description:"Enter your information now for a chance to win.",
    about:"Claim Your $100 Gillette Heated Razor!"
  },
  
  // Ajoutez d'autres liens si besoin
];



const LINKS_PER_PAGE = 10;

const LinksSection: React.FC = () => {
  const [page, setPage] = useState(0);

  const start = page * LINKS_PER_PAGE;
  const end = start + LINKS_PER_PAGE;
  const paginatedLinks = links.slice(start, end);

  const hasNext = end < links.length;
  const hasPrev = page > 0;

  return (
    <section id="links" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Featured links</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {paginatedLinks.map((link, idx) => (
          <div
            key={idx}
            className="break-inside-avoid rounded-xl shadow-lg bg-white mb-4 hover:scale-105 transition-transform"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                width={500}
                height={300}
                src={link.image}
                alt={link.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-950">{link.title}</h3>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg text-blue-950">{link.description}</h3>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-blue-950">{link.about}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        {hasPrev && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300 font-semibold"
          >
            Précédent
          </button>
        )}
        {hasNext && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
          >
            Voir plus
          </button>
        )}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4 mx-2 text-center">Welcome to your gateway <br />for country-specific links and updates!</h1>
        <p className="text-xl mb-6 mx-2 text-center">Discover amazing links for fun, exciting prizes,<br/> free games and exciting giveaways! Stay tuned and keep coming back for more fresh, entertaining content made just for you.</p>
        <a
          href="#links"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50 transition"
        >
          Start exploring now
        </a>
      </div>

      {/* Présentation */}
      <section className="max-w-2xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">About our website</h2>
        <p className="mb-2 text-center text-black ">
          Welcome to our website, your destination for free giveaways and exciting prizes, fun games, and the latest videos! Explore our links and discover the fun and free rewards we&apos;ve prepared just for you.
        </p>
        <p className="text-center text-black">
         Our site is designed to help you discover links you might have missed without us.
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