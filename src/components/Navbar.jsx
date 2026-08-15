import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream bg-opacity-95 backdrop-blur-md shadow-md z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-romantic-600">
          ❤️
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {siteContent.navigation.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-romantic-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-romantic-100'
              }`}
            >
              <span className="mr-2">{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-romantic-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-romantic-600" />
          ) : (
            <Menu className="w-6 h-6 text-romantic-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-romantic-200 shadow-lg">
          <div className="flex flex-col gap-2 p-4">
            {siteContent.navigation.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-romantic-500 text-white'
                    : 'text-gray-600 hover:bg-romantic-100'
                }`}
              >
                <span className="mr-2 text-lg">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
