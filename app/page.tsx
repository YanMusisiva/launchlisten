"use client";
import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import {
  ArrowRight,
  Users,
  User,
  Mail,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

// --- DATA ---
const videos = [
  {
    id: 1,
    title: "Vidéo 1 : Introduction",
    description: "Découvrez nos offres (en anglais)",
    src: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Vidéo 2 : Les bases",
    description: "Les secrets pour apprendre une nouvelle langue",
    src: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Vidéo 3 : En pratique",
    description: "Ce que nous vous offrons réellement",
    src: "/videos/video3.mp4",
  },
  // {
  //   id: 4,
  //   title: "Vidéo 4 : Accélérateur",
  //   description: "Boostez vos résultats avec nos astuces avancées",
  //   src: "/videos/video4.mp4",
  // },
];

const offers = [
  {
    id: 1,
    title: "GROUPE GRATUIT - ANGLAIS",
    description:
      "Rejoignez une communauté d'apprenants motivés et progressez ensemble.",
    price: "0$",
    color: "from-blue-500 to-indigo-600",
    icon: <Users className="w-12 h-12 text-white mb-4 mx-auto" />,
    perks: ["Accès à vie", "Communauté", "Support"],
    link: "https://chat.whatsapp.com/GA54bbWLUXMFXU6WqlslwW?mode=ems_copy_t", // 🔗 groupe WhatsApp
  },
  {
    id: 2,
    title: "GROUPE PREMIUM - ANGLAIS",
    description: "Un accompagnement sur-mesure pour atteindre vos objectifs.",
    price: "17$ / 2 mois",
    color: "from-emerald-500 to-teal-600",
    icon: <User className="w-12 h-12 text-white mb-4 mx-auto" />,
    perks: ["Débats", "suivi personnalisé", "Priorité"],
    badge: "POPULAIRE",
    link: "https://chat.whatsapp.com/IzfmoskpitV6Z2nhSIAIoJ?mode=ems_copy_t", // 🔗 site
  },
  {
    id: 3,
    title: "GROUPE MULTILINGUE",
    description:
      "Exploration des basiques de plus de 10 langues. Inclut des appels avec des locuteurs de langues",
    price: "39$ / an",
    color: "from-purple-500 to-pink-600",
    icon: <Star className="w-12 h-12 text-white mb-4 mx-auto" />,
    perks: ["Audios", "Bonus exclusifs", "Appels"],
    link: "https://chat.whatsapp.com/GkwKPhiEgMkFT9IoXcT8NL?mode=ems_copy_t", // 🔗 autre WhatsApp
  },
  {
    id: 4,
    title: "PROGRAMME PRIVE - VIP",
    description: "Une expérience haut de gamme pour un apprentissage accéléré.",
    price: "Sur Devis",
    color: "from-orange-500 to-red-600",
    icon: <Sparkles className="w-12 h-12 text-white mb-4 mx-auto" />,
    perks: ["Hors groupe", "1-on-1", "Suivi prioritaire"],
    link: "https://listenmethod.vercel.app", // 🔗 site
  },
];

const LaunchSite = () => {
  const [currentPage, setCurrentPage] = useState("email");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleEmailSubmit = async () => {
    if (!email) return;

    setIsLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      // console.log("✅ Réponse API:", data);

      if (!res.ok) {
        // Erreur serveur ou MongoDB
        alert(data.error || "Erreur serveur, veuillez réessayer.");
        return;
      }

      if (data.message === "Déjà inscrit" || data.exists) {
        setIsAlreadySubscribed(true);
        setTimeout(() => {
          setCurrentPage("video");
        }, 1000);
      } else if (data.message === "Email ajouté avec succès") {
        setIsSubmitted(true);
        setTimeout(() => {
          setCurrentPage("video");
        }, 2000);
      } else {
        // Cas inattendu
        alert("Réponse inattendue du serveur.");
      }
    } catch (err) {
      console.error("Erreur soumission email:", err);
      alert("Erreur réseau, veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  if (currentPage === "email") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-2000"></div>

        {/* Floating elements */}
        <div className="absolute top-32 right-1/4 animate-bounce delay-1000">
          <Sparkles className="text-cyan-300 w-8 h-8" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-2000">
          <Star className="text-blue-300 w-6 h-6" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            {!isSubmitted && !isAlreadySubscribed ? (
              <>
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 mb-6 leading-tight">
                    Transformez
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Votre vie relationnelle avec
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                      {" "}
                      Les langues
                    </span>
                  </h2>
                  <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed">
                    Découvrez les secrets pour apprendre les langues d&apos;une
                    manière extraordinaire avec LGA( Languages for global
                    africans)
                  </p>
                </div>

                {/* Email Form */}
                <div className="space-y-6 mb-12">
                  <div className="relative max-w-md mx-auto">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg"
                      required
                    />
                  </div>

                  <button
                    onClick={handleEmailSubmit}
                    disabled={isLoading}
                    className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center mx-auto min-w-64"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Accéder Maintenant
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-8 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">100% Gratuit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Sans Spam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Désabonnement Facile</span>
                  </div>
                </div>
              </>
            ) : isSubmitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-4">
                  Parfait !
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Vous êtes maintenant inscrit(e) à notre newsletter exclusive
                </p>
                <div className="animate-pulse text-pink-300">
                  Redirection en cours...
                </div>
              </div>
            ) : isAlreadySubscribed ? (
              // 👉 Cas déjà inscrit → redirection discrète
              <div className="text-center py-20">
                <p className="text-xl text-gray-200 mb-8">
                  Vous êtes déjà inscrit(e). Redirection en cours...
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6">
            Votre Formation Vous Attend
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Regardez ces vidéos exclusives et juste en dessous choisissez votre
            parcours
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 w-full max-w-5xl">
          {videos.map((video, idx) => (
            <VideoPlayer
              key={video.id}
              src={video.src}
              title={video.title}
              description={video.description}
              isPlaying={playingIndex === idx}
              onPlay={() => setPlayingIndex(idx)}
              onPause={() => setPlayingIndex(null)}
            />
          ))}
        </div>

        {/* Offers */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {offers.map((offer) => (
            <div key={offer.id} className="group relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${offer.color} rounded-3xl blur opacity-75 group-hover:opacity-100 transition`}
              ></div>
              <div
                className={`relative bg-gradient-to-br ${offer.color} p-8 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300`}
              >
                {offer.badge && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {offer.badge}
                  </div>
                )}
                {offer.icon}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {offer.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <div className="text-4xl font-extrabold text-white mb-6">
                  {offer.price}
                </div>
                <button className="w-full bg-white text-black font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">
                  <a
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choisir {offer.title}
                  </a>
                </button>

                <div className="mt-4 flex items-center justify-center space-x-4 text-white/80 text-sm">
                  {offer.perks.map((perk, i) => (
                    <span key={i}>✓ {perk}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-400 text-center">
          <p className="text-sm">
            🔒 Paiement sécurisé • Garantie satisfaction • Support client 24/7
          </p>
          <p>
            Made by{" "}
            <a
              href="https://asikireportfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500"
            >
              John Asikire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchSite;
