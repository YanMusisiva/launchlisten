"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  Users,
  User,
  Mail,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

const LaunchSite = () => {
  const [currentPage, setCurrentPage] = useState("email");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async () => {
    if (!email) return;

    setIsLoading(true);
    // Simulation d'ajout à la newsletter
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);

    // Redirection vers la page vidéo après 2 secondes
    setTimeout(() => {
      setCurrentPage("video");
    }, 2000);
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
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 mb-6 leading-tight">
                    Transformez
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Votre Passion en
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                      {" "}
                      Succès
                    </span>
                  </h2>
                  <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed">
                    Découvrez les secrets des experts pour créer une carrière
                    extraordinaire dans votre domaine de passion
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
            ) : (
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
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-6">
              Votre Formation Vous Attend
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Regardez cette vidéo exclusive et choisissez votre parcours vers
              le succès
            </p>
          </div>

          {/* Video Container */}
          <div className="mb-12 relative group">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-3xl shadow-2xl">
              <div className="bg-black rounded-3xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <Play className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <p className="absolute bottom-4 left-4 text-white text-sm opacity-75">
                    Cliquez pour voir votre formation exclusive
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Formation Groupe */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-white mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Formation en Groupe
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Rejoignez notre communauté d'apprenants motivés et bénéficiez
                  de l'entraide collective pour maximiser votre réussite.
                </p>
                <div className="text-4xl font-extrabold text-white mb-6">
                  17<span className="text-2xl">$</span>
                </div>
                <button className="w-full bg-white text-indigo-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">
                  Rejoindre le Groupe
                </button>
                <div className="mt-4 flex items-center justify-center space-x-4 text-blue-100 text-sm">
                  <span>✓ Accès à vie</span>
                  <span>✓ Communauté</span>
                  <span>✓ Support</span>
                </div>
              </div>
            </div>

            {/* Formation Personnelle */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAIRE
                </div>
                <User className="w-12 h-12 text-white mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Formation Personnelle
                </h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Bénéficiez d'un accompagnement personnalisé et sur-mesure pour
                  atteindre vos objectifs plus rapidement.
                </p>
                <div className="text-4xl font-extrabold text-white mb-2">
                  Sur Devis
                </div>
                <div className="text-emerald-100 text-sm mb-6">
                  Prix selon vos besoins
                </div>
                <button className="w-full bg-white text-teal-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">
                  Formation Personnelle
                </button>
                <div className="mt-4 flex items-center justify-center space-x-4 text-emerald-100 text-sm">
                  <span>✓ 1-on-1</span>
                  <span>✓ Personnalisé</span>
                  <span>✓ Priorité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-gray-400 text-center">
            <p className="text-sm">
              🔒 Paiement sécurisé • Garantie satisfaction 30 jours • Support
              client 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchSite;
