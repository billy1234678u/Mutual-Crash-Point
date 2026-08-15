import React, { useState } from 'react';
import { siteContent } from '../data/content';

export default function LoveMeter() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    setIsCalculating(true);
    setResult(null);

    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 3000));

    setResult({
      percentage: 999,
      message: siteContent.loveMeter.result,
      submessage: siteContent.loveMeter.message,
    });
    setIsCalculating(false);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculating(false);
  };

  return (
    <section id="love-meter" className="min-h-screen py-20 px-4 bg-gradient-to-b from-cream to-romantic-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-12">
          {siteContent.loveMeter.title}
        </h2>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {!result ? (
            <div className="text-center">
              <div className="text-6xl mb-8">💕</div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                I built this meter to measure the love I have for you, but I quickly realized no meter in the world could calculate something infinite.
              </p>
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="px-8 py-4 bg-romantic-500 text-white rounded-full font-bold text-lg hover:bg-romantic-600 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isCalculating ? 'Calculating...' : siteContent.loveMeter.buttonText}
              </button>

              {/* Loading animation */}
              {isCalculating && (
                <div className="mt-8 space-y-4">
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div className="bg-romantic-500 h-full rounded-full animate-pulse" style={{ width: '75%' }} />
                  </div>
                  <p className="text-gray-600 animate-pulse">Measuring your love...</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              {/* Animated result */}
              <div className="mb-8">
                <div className="text-7xl animate-heart-beat mb-4">❤️</div>
              </div>

              {/* Result display */}
              <div className="mb-6">
                <div className="text-5xl font-bold text-romantic-600 mb-4">
                  {result.percentage}%
                </div>
                <p className="text-2xl font-bold text-romantic-700 mb-4">
                  {result.message}
                </p>
              </div>

              {/* Submessage */}
              <div className="mb-8 bg-gradient-to-r from-romantic-50 to-romantic-100 rounded-xl p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {result.submessage}
                </p>
              </div>

              {/* Celebration elements */}
              <div className="flex justify-center gap-4 mb-8 text-4xl">
                {[...Array(7)].map((_, i) => (
                  <span
                    key={i}
                    className="animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    ✨
                  </span>
                ))}
              </div>

              {/* Additional message */}
              <div className="mb-8 text-gray-700 italic">
                <p className="mb-2">The error is intentional.</p>
                <p>My love for you will always exceed maximum capacity.</p>
              </div>

              {/* Reset button */}
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-400 transition-colors duration-300"
              >
                Calculate Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
