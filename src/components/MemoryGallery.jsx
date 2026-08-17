import React, { useState } from 'react';
import { X } from 'lucide-react';
import { siteContent } from '../data/content';

export default function MemoryGallery() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section id="memories" className="min-h-screen py-20 px-4 bg-gradient-to-b from-romantic-50 to-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-romantic-700 mb-4">
          📸 Our Memories
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Every moment with you is a treasure
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.memories.map((memory) => (
            <div
              key={memory.id}
              onClick={() => setSelectedMemory(memory)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white card-hover"
            >
              {/* Image container */}
              <div className="relative w-full h-64 bg-gradient-to-br from-romantic-200 to-romantic-100 overflow-hidden">
                {memory.image && !memory.image.includes('[') ? (
                  memory.image.endsWith('.mp4') || memory.image.endsWith('.webm') || memory.image.endsWith('.mov') ? (
                    <>
                      <video
                        key={`video-${memory.id}`}
                        src={memory.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20">
                        <div className="bg-white rounded-full p-4 shadow-lg">
                          <svg className="w-6 h-6 text-romantic-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-50">📷</span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold">{memory.caption}</p>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-gray-700 font-semibold text-sm line-clamp-2">
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-96 md:max-h-screen bg-white rounded-2xl overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Image */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-romantic-200 to-romantic-100 flex items-center justify-center">
              {selectedMemory.image && !selectedMemory.image.includes('[') ? (
                selectedMemory.image.endsWith('.mp4') || selectedMemory.image.endsWith('.webm') || selectedMemory.image.endsWith('.mov') ? (
                  <video
                    src={selectedMemory.image}
                    alt={selectedMemory.caption}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedMemory.image}
                    alt={selectedMemory.caption}
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                <span className="text-9xl opacity-50">📷</span>
              )}
            </div>

            {/* Caption */}
            <div className="p-6 text-center">
              <p className="text-xl text-gray-700 font-semibold mb-4">
                {selectedMemory.caption}
              </p>
              <p className="text-gray-600">
                One of our beautiful moments together
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
