import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { siteContent } from '../data/content';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="letter" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-cream to-romantic-50">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-16">
          {siteContent.letter.title}
        </h2>

        <div className="flex justify-center perspective">
          {/* Envelope/Card */}
          <div
            className={`w-full max-w-md transition-all duration-700 cursor-pointer ${
              isOpen ? 'transform scale-95' : 'transform hover:scale-105'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              // Closed envelope
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-romantic-200 hover:shadow-3xl transition-shadow duration-300">
                <div className="flex flex-col items-center justify-center min-h-64">
                  <Mail className="w-24 h-24 text-romantic-500 mb-6" />
                  <p className="text-center text-gray-600 font-semibold text-lg mb-4">
                    For You
                  </p>
                  <button className="px-6 py-3 bg-romantic-500 text-white rounded-full font-semibold hover:bg-romantic-600 transition-colors duration-300 shadow-lg">
                    Open Letter 💌
                  </button>
                </div>
              </div>
            ) : (
              // Open letter
              <div className="bg-gradient-to-br from-white to-romantic-50 rounded-2xl shadow-2xl p-8 border-4 border-romantic-300 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">💌</div>
                  <p className="text-xl text-romantic-700 font-serif italic mb-6">
                    {siteContent.letter.opening}
                  </p>
                </div>

                {/* First paragraph */}
                <div className="prose prose-sm max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {siteContent.letter.paragraphs[0]}
                  </p>
                </div>

                {/* Additional paragraphs */}
                {showMore && (
                  <div className="space-y-6 mb-6 animate-slide-up">
                    {siteContent.letter.paragraphs.slice(1).map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-8">
                  {!showMore && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMore(true);
                      }}
                      className="w-full px-6 py-3 bg-romantic-500 text-white rounded-full font-semibold hover:bg-romantic-600 transition-colors duration-300"
                    >
                      Read More ❤️
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
