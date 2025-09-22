import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bunningsImage from 'figma:asset/2de27d2121b9468a8642d69c2b978f167f4a2d16.png';

interface CaseStudyDetailProps {
  caseStudyId: string;
  onNavigate: (page: string) => void;
}

export function CaseStudyDetail({ caseStudyId, onNavigate }: CaseStudyDetailProps) {
  // Mock data - in a real app this would come from a data source
  const caseStudyData = {
    '1': {
      title: 'Filter Redesign — Bunnings',
      subtitle: 'This project was all about reducing friction for customers trying to find products in the way that suited them best.',
      heroImage: bunningsImage,
      overview: {
        description: 'Feedback kept surfacing the same frustrations: it was hard to filter out Marketplace products, and customers struggled to quickly see what was available in-store today. I worked closely with a Product Manager, Developers, and a UX Researcher to re-think the filtering logic and design a more intuitive experience. The end result gave customers the flexibility they wanted, and the early data showed a big impact.',
        challenge: {
          title: 'The Challenge',
          points: [
            'Filtering out Marketplace (MP) products wasn\'t possible.',
            'Finding stock available in-store today was confusing.',
            'The old filter logic was rigid — customers could only exclusively view some fulfilment types, but couldn\'t flexibly exclude or refine them.'
          ],
          goal: 'Create a filtering experience that matches how customers actually shop: start with the method (in-store, delivery, click & collect) and then refine with another layer (Marketplace, Special Order, in-store today).'
        },
        role: {
          title: 'My Role',
          responsibilities: [
            'Synthesised customer feedback into design goals',
            'Explored multiple filter logic models in Figma',
            'Partnered with a UX Researcher to run unmoderated tests (20 customers)',
            'Iterated on copy and UI to improve clarity',
            'Worked closely with Developers to refine build logic and ensure data was instrumented for tracking',
            'Collaborated with the Product Manager on launch and success measures'
          ]
        }
      },
      sections: [
        {
          title: 'Exploration & Iterations',
          content: 'We sketched and prototyped different approaches for: inclusion vs exclusion logic, toggle vs checkbox interactions, and clearer microcopy (e.g. "In-store today" vs "Available today"). This phase was crucial for understanding the technical constraints while maintaining user-friendly interactions.',
          image: bunningsImage
        },
        {
          title: 'Testing & Validation',
          content: 'We tested concepts with 20 customers in unmoderated sessions. The feedback was consistent: toggles felt clearer, and customers appreciated the flexibility to refine by fulfilment type and product type together. This validation gave us confidence to move forward with the toggle-based approach.',
          image: bunningsImage
        },
        {
          title: 'Final Design',
          content: 'Based on testing feedback, we landed on a toggle-based design that started with shopping method, then layered refinements. The final solution provided the flexibility customers wanted while maintaining clarity in the interface.',
          image: bunningsImage
        }
      ],
      outcomes: [
        '80% engaged with the "In-store" option',
        '89% engaged with the "In-store today" toggle',
        '+22% increase in filter usage',
        '+24% increase in click-through rate (SRP/PLP)',
        '+25% increase in Add-to-Cart rate'
      ],
      reflection: 'This project reinforced the value of clear logic and simple interactions in solving complex customer problems. By collaborating closely with PMs, developers, and researchers, and grounding decisions in customer feedback, we delivered an experience that both made sense to customers and moved the business metrics.'
    }
  };

  const data = caseStudyData[caseStudyId as keyof typeof caseStudyData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Case study not found</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-lime hover:underline"
          >
            Return to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">


          <div className="mb-12 md:mb-16">
            <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl text-lime mb-6 md:mb-8 leading-tight">
              {data.title}
            </h1>
            <p className="font-sf-pro text-lg md:text-xl lg:text-2xl text-black max-w-4xl leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <div className="aspect-[16/9] overflow-hidden rounded-3xl">
            <ImageWithFallback
              src={data.heroImage}
              alt={`${data.title} hero image`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl text-lime mb-8 md:mb-12">
              Overview
            </h2>
            <p className="font-sf-pro text-black leading-relaxed text-lg lg:text-xl max-w-4xl">
              {data.overview.description}
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-16 md:mb-24">
            <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl text-lime mb-8 md:mb-12">
              {data.overview.challenge.title}
            </h3>
            <div className="mb-8">
              <p className="font-sf-pro text-black mb-6 leading-relaxed text-lg">
                Customers had three major pain points:
              </p>
              <ul className="space-y-4">
                {data.overview.challenge.points.map((point, index) => (
                  <li key={index} className="font-sf-pro text-black leading-relaxed text-lg flex items-start">
                    <span className="text-lime mr-3 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white-5 p-6 md:p-8 rounded-3xl">
              <h4 className="font-sf-pro font-semibold text-lime mb-3 text-lg">Goal</h4>
              <p className="font-sf-pro text-black leading-relaxed text-lg">
                {data.overview.challenge.goal}
              </p>
            </div>
          </div>

          {/* My Role */}
          <div>
            <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl text-lime mb-8 md:mb-12">
              {data.overview.role.title}
            </h3>
            <ul className="space-y-4">
              {data.overview.role.responsibilities.map((responsibility, index) => (
                <li key={index} className="font-sf-pro text-black leading-relaxed text-lg flex items-start">
                  <span className="text-lime mr-3 mt-1">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl text-lime mb-12 md:mb-16 text-center">
            Process
          </h2>
          
          <div className="space-y-24 md:space-y-32">
            {data.sections.map((section, index) => (
              <div
                key={index}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`mb-12 lg:mb-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl text-lime mb-6 md:mb-8">
                    {section.title}
                  </h3>
                  <p className="font-sf-pro text-black leading-relaxed text-lg lg:text-xl">
                    {section.content}
                  </p>
                </div>
                <div className={`aspect-[4/3] overflow-hidden rounded-3xl ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <ImageWithFallback
                    src={section.image}
                    alt={`${section.title} process image`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl text-lime mb-8 md:mb-12">
            Impact (Early Results)
          </h2>
          <p className="font-sf-pro text-black mb-12 md:mb-16 leading-relaxed text-lg lg:text-xl max-w-4xl mx-auto">
            Just one week after launch, the data showed strong behavioural shifts:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 md:mb-16">
            {data.outcomes.map((outcome, index) => (
              <div key={index} className="p-6 lg:p-8 bg-white/10 rounded-3xl">
                <p className="font-sf-pro text-black font-medium leading-relaxed text-lg">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
          <p className="font-sf-pro text-black leading-relaxed text-lg max-w-4xl mx-auto">
            These were early indicators, but they gave the team confidence we had solved real pain points. Longer-term tracking is underway to confirm sustained impact.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl text-lime mb-8 md:mb-12">
            Reflection
          </h2>
          <p className="font-sf-pro text-black leading-relaxed text-lg lg:text-xl">
            {data.reflection}
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-syne text-3xl md:text-4xl lg:text-5xl text-lime mb-6 md:mb-8">
            Interested in learning more?
          </h2>
          <p className="font-sf-pro text-black mb-12 md:mb-16 leading-relaxed text-lg lg:text-xl">
            I'd love to discuss this project in detail and share more insights about the design process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="font-sf-pro px-8 py-4 bg-lime hover:bg-chocolate text-black hover:text-white font-medium rounded-full transition-colors text-lg"
            >
              View More Work
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="font-sf-pro px-8 py-4 border-2 border-lime text-lime hover:bg-lime hover:text-black font-medium rounded-full transition-colors text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}