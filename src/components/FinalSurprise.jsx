import React, { useState } from 'react';
import { siteContent } from '../data/content';
import FloatingHearts from './FloatingHearts';

export default function FinalSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section id="surprise" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-cream to-romantic-50 relative overflow-hidden">
      {isRevealed && <FloatingHearts />}

      <div className="max-w-2xl w-full z-10">
        {!isRevealed ? (
          <div className="text-center">
            {/* Teaser */}
            <div className="mb-12">
              <div className="text-6xl mb-6 animate-pulse">🎁</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-romantic-700 mb-6">
                {siteContent.finalSurprise.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I saved the best for last.
              </p>
            </div>

            {/* Reveal button */}
            <button
              onClick={() => setIsRevealed(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-romantic-500 via-romantic-600 to-wine rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-romantic-400 focus:ring-offset-2"
            >
              <span className="mr-2">{siteContent.finalSurprise.buttonText}</span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-125">
                💌
              </span>
            </button>

            {/* Decorative elements */}
            <div className="mt-16 flex justify-center gap-8 text-4xl">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  ✨
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            {/* Main reveal */}
            <div className="mb-12">
              <div className="text-8xl mb-8 animate-heart-beat">❤️</div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-romantic-700 mb-8">
                {siteContent.finalSurprise.reveal}
              </h2>
            </div>

            {/* Personal message */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-romantic-200">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif italic">
                "{siteContent.finalSurprise.message}"
              </p>
            </div>

            {/* Celebration */}
            <div className="space-y-8">
              {/* Floating hearts */}
              <div className="flex justify-center gap-4 text-5xl">
                {[...Array(7)].map((_, i) => (
                  <span
                    key={i}
                    className="animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    ❤️
                  </span>
                ))}
              </div>

              {/* Sparkles */}
              <div className="flex justify-center gap-6 text-4xl">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="animate-sparkle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    ✨
                  </span>
                ))}
              </div>

              {/* Final message */}
              <div className="bg-gradient-to-r from-romantic-100 to-romantic-50 rounded-xl p-6">
                <p className="text-romantic-700 font-semibold text-lg mb-2">
                  Forever starts now. 💕
                </p>
                <p className="text-gray-700">
                  Thank you for being my greatest adventure.
                </p>
              </div>
            </div>

            {/* Scroll back button */}
            <div className="mt-12">
              <button
                onClick={() => setIsRevealed(false)}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-400 transition-colors duration-300 text-sm"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
