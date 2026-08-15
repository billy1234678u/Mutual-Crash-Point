import React, { useState, useRef, useEffect } from 'react';
import { Music, X } from 'lucide-react';
import { siteContent } from '../data/content';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load saved preference from session storage
    const savedPreference = sessionStorage.getItem('musicPlaying');
    if (savedPreference === 'true' && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      sessionStorage.setItem('musicPlaying', !isPlaying);
    }
  };

  // Don't render if no song URL is configured
  if (!siteContent.music.songUrl || siteContent.music.songUrl.includes('[')) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src={siteContent.music.songUrl}
        loop
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      />
      <button
        onClick={toggleMusic}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isPlaying
            ? 'bg-romantic-500 text-white'
            : 'bg-white text-romantic-500 border-2 border-romantic-300'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Music On' : 'Music Off'}
      >
        {isPlaying ? (
          <Music className="w-6 h-6 animate-pulse" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
