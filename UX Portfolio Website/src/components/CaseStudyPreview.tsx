import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyPreviewProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onNavigate: (page: string) => void;
}

export function CaseStudyPreview({ id, title, description, imageUrl, tags, onNavigate }: CaseStudyPreviewProps) {
  return (
    <article className="group cursor-pointer" onClick={() => onNavigate(`case-study-${id}`)}>
      {/* Mobile: Image on top, stacked layout */}
      <div className="md:hidden space-y-6">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl">
          <ImageWithFallback
            src={imageUrl}
            alt={`${title} case study preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          {/* Title */}
          <h3 className="font-syne text-2xl lg:text-3xl text-lime group-hover:text-chocolate transition-colors duration-200 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="font-sf-pro text-lg text-black leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div className="pt-2">
            <div className="inline-flex items-center text-black font-sf-pro font-medium group-hover:translate-x-1 group-hover:text-lime transition-all duration-200">
              <span>View Case Study</span>
              <svg
                className="w-5 h-5 ml-2 text-lime"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Side by side layout */}
      <div className="hidden md:flex md:items-center md:gap-16 lg:gap-24">
        {/* Image Section */}
        <div className="md:flex-1">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <ImageWithFallback
              src={imageUrl}
              alt={`${title} case study preview`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:flex-1 space-y-6 lg:space-y-8">
          {/* Title */}
          <h3 className="font-syne text-3xl lg:text-4xl xl:text-5xl text-lime group-hover:text-chocolate transition-colors duration-200 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="font-sf-pro text-lg lg:text-xl text-black leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div className="pt-2">
            <div className="inline-flex items-center text-black font-sf-pro font-medium group-hover:translate-x-1 group-hover:text-lime transition-all duration-200">
              <span>View Case Study</span>
              <svg
                className="w-5 h-5 ml-2 text-lime"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}