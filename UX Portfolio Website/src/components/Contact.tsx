import React from 'react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="font-sf-pro flex items-center text-black hover:text-lime transition-colors mb-12 md:mb-16 group"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>

          <div className="text-center mb-16 md:mb-24">
            <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl text-lime mb-6 md:mb-8">
              Let's Work Together
            </h1>
            <p className="font-sf-pro text-lg md:text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
              I'm always excited to collaborate on new projects and bring innovative ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl text-lime mb-12 md:mb-16">
              Get In Touch
            </h2>
          
            <div className="space-y-12 md:space-y-16">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-celeste rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sf-pro font-semibold text-lime mb-3 text-xl">Email</h3>
                  <a 
                    href="mailto:hello@yourname.com"
                    className="font-sf-pro text-black hover:text-lime transition-colors text-lg"
                  >
                    hello@yourname.com
                  </a>
                  <p className="font-sf-pro text-black mt-2">
                    For project inquiries and collaborations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-celeste rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sf-pro font-semibold text-lime mb-3 text-xl">Location</h3>
                  <p className="font-sf-pro text-black text-lg">
                    San Francisco, CA
                  </p>
                  <p className="font-sf-pro text-black mt-2">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sf-pro font-semibold text-lime mb-3 text-xl">Response Time</h3>
                  <p className="font-sf-pro text-black text-lg">
                    Within 24 hours
                  </p>
                  <p className="font-sf-pro text-black mt-2">
                    Usually much faster during business hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-white/20">
              <h3 className="font-syne text-2xl md:text-3xl text-lime mb-8">
                Find Me Online
              </h3>
              <div className="flex flex-wrap gap-8">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-black hover:text-lime transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-black hover:text-lime transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.177 4.72-1.299 1.302-2.844 2.015-4.614 2.134-.526.036-1.549.036-2.075 0-1.77-.119-3.315-.832-4.614-2.134C2.81 11.593 2.083 10.018 1.914 8.16c-.034-.37-.034-1.104 0-1.474.169-1.858.896-3.433 2.177-4.72C5.39 0.663 6.935-.05 8.705-.169c.526-.036 1.549-.036 2.075 0 1.77.119 3.315.832 4.614 2.134 1.281 1.287 2.008 2.862 2.177 4.72.034.37.034 1.104-.003 1.475z"/>
                  </svg>
                  <span>Dribbble</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-black hover:text-lime transition-colors text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.017 12.271c0-1.133.896-2.054 2.006-2.054 1.109 0 2.006.921 2.006 2.054s-.897 2.055-2.006 2.055c-1.11 0-2.006-.922-2.006-2.055zm5.994 0c0-1.133.896-2.054 2.006-2.054 1.109 0 2.006.921 2.006 2.054s-.897 2.055-2.006 2.055c-1.11 0-2.006-.922-2.006-2.055zM2.68 12.271c0-5.316 4.314-9.63 9.63-9.63s9.63 4.314 9.63 9.63-4.314 9.63-9.63 9.63S2.68 17.587 2.68 12.271zM12.31 24C5.514 24 0 18.486 0 11.69S5.514-.48 12.31-.48s12.31 6.17 12.31 12.17S19.106 24 12.31 24z"/>
                  </svg>
                  <span>Behance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}