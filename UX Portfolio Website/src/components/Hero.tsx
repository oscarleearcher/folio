import React from 'react';

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          <h1 className="font-syne text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black leading-[0.85] mb-8 md:mb-12">
            OSCAR
            <br />
            LEE-ARCHER
            <br />
            <span className="text-lime">PRODUCT</span>
            <br />
            <span className="text-lime">DESIGNER</span>
          </h1>
          <p className="font-sf-pro text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black max-w-4xl leading-relaxed">
            I'm a UX designer passionate about creating intuitive, accessible, and impactful digital products that solve real problems for real people.
          </p>
        </div>
      </div>
    </section>
  );
}