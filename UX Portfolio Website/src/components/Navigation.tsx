import React from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-lime hover:text-chocolate font-syne text-xl md:text-2xl transition-all duration-200 hover:underline underline-offset-4"
          >
            OLA
          </button>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('work')}
              className={`font-sf-pro font-medium transition-all duration-200 hover:underline underline-offset-4 ${
                currentPage === 'work' 
                  ? 'text-chocolate underline' 
                  : 'text-chocolate hover:text-chocolate'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`font-sf-pro font-medium transition-all duration-200 hover:underline underline-offset-4 ${
                currentPage === 'about' 
                  ? 'text-chocolate underline' 
                  : 'text-chocolate hover:text-chocolate'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`font-sf-pro font-medium transition-all duration-200 hover:underline underline-offset-4 ${
                currentPage === 'contact' 
                  ? 'text-chocolate underline' 
                  : 'text-chocolate hover:text-chocolate'
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}