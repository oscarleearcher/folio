// src/components/About.tsx
import React from "react";
import content from "../content";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const a = content.about;

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-16 lg:gap-24 md:items-center">
        {/* Text */}
        <div className="mb-16 md:mb-0 md:order-1">
          <h2 id="about-title" className="font-syne text-4xl md:text-6xl lg:text-7xl text-lime mb-8 md:mb-12">
            {a.heading}
          </h2>

          <div className="prose prose-lg max-w-none">
            {a.paragraphs.map((p, i) => (
              <p key={i} className="font-sf-pro text-lg md:text-xl lg:text-2xl text-black leading-relaxed mb-8">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="font-syne text-xl md:text-2xl text-lime mb-4">Expertise</h3>
              <ul className="font-sf-pro space-y-3 text-black text-lg">
                {a.expertise.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-syne text-xl md:text-2xl text-lime mb-4">Tools</h3>
              <ul className="font-sf-pro space-y-3 text-black text-lg">
                {a.tools.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative md:order-2">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <ImageWithFallback
              src={a.headshot.src}
              alt={a.headshot.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {/* decorative blobs (kept as presentational) */}
          <div aria-hidden className="absolute -top-6 -right-6 w-32 h-32 bg-celeste rounded-full opacity-60 -z-10" />
          <div aria-hidden className="absolute -bottom-8 -left-8 w-40 h-40 bg-coral rounded-full opacity-40 -z-10" />
        </div>
      </div>
    </section>
  );
}
