import React, { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      };
      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    const interval = setInterval(createHeart, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-red-400 text-2xl animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: 0.6,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
