import React, { useState } from 'react';
import { siteContent } from '../data/content';

export default function LoveReasons() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="reasons" className="min-h-screen py-20 px-4 bg-gradient-to-b from-cream to-romantic-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-4">
          ❤️ Reasons I Love You
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          The reasons are endless, but here are some of my favorites
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.reasons.map((reason) => (
            <div
              key={reason.id}
              onClick={() =>
                setExpandedId(expandedId === reason.id ? null : reason.id)
              }
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden card-hover group"
            >
              <div className="p-6">
                {/* Emoji */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {reason.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-romantic-700 mb-3">
                  {reason.title}
                </h3>

                {/* Description - Shows on expand */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === reason.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed text-sm animate-slide-up">
                    {reason.description}
                  </p>
                </div>

                {/* Click indicator */}
                <div className="mt-4 text-center text-romantic-500 font-semibold text-sm">
                  {expandedId === reason.id ? 'Read less ✓' : 'Click to reveal ✨'}
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="h-1 bg-gradient-to-r from-romantic-300 to-romantic-500" />
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-700 italic mb-4">
            And the list goes on and on... 💕
          </p>
          <div className="text-4xl flex justify-center gap-4">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>❤️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💕</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>❤️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
