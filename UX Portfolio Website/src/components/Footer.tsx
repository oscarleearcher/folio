import React from 'react';

export function Footer() {
  return (
    <footer className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl text-lime mb-6 md:mb-8">
            Let's Create Something Amazing Together
          </h2>
          <p className="font-sf-pro text-black mb-12 md:mb-16 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
            I'm always excited to work on new projects and collaborate with passionate teams. 
            Let's chat about how we can bring your ideas to life.
          </p>
          
          <a
            href="mailto:hello@yourname.com"
            className="font-sf-pro inline-flex items-center px-8 py-4 bg-lime hover:bg-chocolate text-black hover:text-white font-medium rounded-full transition-colors duration-200 text-lg"
          >
            Get In Touch
          </a>
          
          <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-8">
                <a href="#" className="font-sf-pro text-black hover:text-lime transition-colors text-lg">
                  LinkedIn
                </a>
                <a href="#" className="font-sf-pro text-black hover:text-lime transition-colors text-lg">
                  Dribbble
                </a>
                <a href="#" className="font-sf-pro text-black hover:text-lime transition-colors text-lg">
                  Behance
                </a>
              </div>
              <p className="font-sf-pro text-black">
                © 2024 Oscar Lee-Archer. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}