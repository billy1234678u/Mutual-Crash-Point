import React from 'react';
import { siteContent } from '../data/content';

export default function FutureDreams() {
  return (
    <section id="future" className="min-h-screen py-20 px-4 bg-gradient-to-b from-romantic-50 to-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-4">
          🌈 {siteContent.futureDreams.title}
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          The future is bright because I get to experience it with you
        </p>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {siteContent.futureDreams.dreams.map((dream, index) => (
            <div
              key={dream.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Color accent border */}
              <div
                className={`h-2 bg-gradient-to-r ${
                  index % 2 === 0
                    ? 'from-romantic-400 to-romantic-600'
                    : 'from-romantic-300 to-pink-400'
                }`}
              />

              <div className="p-8">
                {/* Emoji */}
                <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {dream.emoji}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-romantic-700 mb-3">
                  {dream.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {dream.description}
                </p>

                {/* Link style indicator */}
                <div className="flex items-center text-romantic-500 font-semibold text-sm group-hover:text-romantic-600 transition-colors">
                  <span>I can't wait</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-20 text-center bg-gradient-to-r from-romantic-100 to-romantic-50 rounded-2xl p-8 shadow-lg">
          <p className="text-xl text-romantic-700 font-semibold mb-4">
            With you, every dream feels possible. 💕
          </p>
          <p className="text-gray-700">
            Let's create the most beautiful story together.
          </p>
        </div>
      </div>
    </section>
  );
}
