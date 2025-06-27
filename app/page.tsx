"use client";

import React from "react";
import NewsletterSection from "../components/NewsletterSection";

const links = [
  {
    title: "Saudi Arabia",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70436",
    image: "saudiarabia.png",
    description:"دخل رقم هاتفك الآن لبدء التنزيل",
    about:"حمّل أحدث المحتوى"
  },
  {
    title: "Germany",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70105",
    image: "germany.png",
    description:"Geben Sie jetzt Ihre Kreditkartendaten ein, um loszulegen.",
    about:"Testen Sie jetzt Ihre Damenunterwäsche!"
  },
  {
    title: "United Kingdom",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=70099",
    image: "unitedkingdom.png",
    description:"Enter your credit card information now to get started.",
    about:"Start your Woman Underwear Trial Now!"
  },
  {
    title: "Denmark",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=69752",
    image: "denmark.png",
    description:"Indtast dine kreditkortoplysninger nu for at komme i gang.",
    about:"Start din prøveperiode på dameundertøj nu!"
  },
  {
    title: "Italy",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=69067",
    image: "italy.png",
    description:"Installa l'app e registrati nell'app.",
    about:"Registra un account SisalFunClub!"
  },
  {
    title: "New Zealand",
    url: "https://tundrafile.com/show.php?l=0&u=2413362&id=52956",
    image: "newzealand.png",
    description:"Enter your information now for a chance to win.",
    about:"Claim Your $100 Gillette Heated Razor!"
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