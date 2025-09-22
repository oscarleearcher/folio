import React from 'react';
import { CaseStudyPreview } from './CaseStudyPreview';
import bunningsImage from 'figma:asset/2de27d2121b9468a8642d69c2b978f167f4a2d16.png';

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const caseStudies = [
    {
      id: '1',
      title: 'Filter Redesign — Bunnings',
      description: 'Simplified a complex fulfilment and availability filter into an intuitive, customer-first experience. Delivered a tested solution that increased filter usage by 22% and boosted Add-to-Cart by 25% in the first week.',
      imageUrl: bunningsImage,
      tags: ['UX Design', 'E-commerce', 'User Research']
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl text-lime mb-6 md:mb-8">
            Featured Work
          </h2>
          <p className="font-sf-pro text-lg md:text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
            A selection of recent projects showcasing my approach to user-centered design and problem-solving.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex md:items-center md:gap-16 lg:gap-24`}
            >
              <div className="md:flex-1">
                <CaseStudyPreview {...study} onNavigate={onNavigate} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}