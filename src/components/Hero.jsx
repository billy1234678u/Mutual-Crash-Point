import React from 'react';
import { siteContent } from '../data/content';
import FloatingHearts from './FloatingHearts';

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <FloatingHearts />

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-romantic-100 to-cream opacity-40" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">✨</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float-delayed">💕</div>
      <div className="absolute bottom-32 left-20 text-5xl opacity-20 animate-float">🌹</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float-delayed">✨</div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Main greeting */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-romantic-700 mb-6 animate-fade-in">
          {siteContent.landing.greeting}
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-2xl text-gray-700 mb-12 leading-relaxed animate-slide-up">
          {siteContent.landing.message}
        </p>

        {/* Animated heart pulse */}
        <div className="mb-12 text-7xl animate-heart-beat inline-block">
          ❤️
        </div>

        {/* Main CTA button */}
        <div className="mt-12">
          <button
            onClick={() => onNavigate('letter')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-romantic-500 to-romantic-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-romantic-400 focus:ring-offset-2"
          >
            <span className="mr-2">{siteContent.landing.buttonText}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-500 text-sm">Scroll to explore</div>
          <div className="text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
}
