// src/content.ts

// import the image at the top
import headshot from "./assets/headshot.jpg"

const content = {
  site: {
    logoText: "OLA",
    nav: [
      { id: "work", label: "Work" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
  },

  hero: {
    // each line becomes a separate line in the big stacked headline
    titleLines: ["OSCAR", "LEE-ARCHER", "PRODUCT", "DESIGNER"],
    subtitle:
      "I'm a UX designer passionate about creating intuitive, accessible, and impactful digital products that solve real problems for real people.",
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a Melbourne-based Product Designer creating e-commerce experiences customers find simple and useful.",
      "I combine user research, strategic thinking, and systems design to ship accessible, resilient UI.",
      "Outside work: vintage furniture hunting, photography, and tinkering with AI tools in design.",
    ],
    expertise: ["User Research", "Information Architecture", "Interaction Design", "Prototyping", "Usability Testing"],
    tools: ["Figma", "Adobe CC", "Miro", "Principle", "HTML/CSS"],
    headshot: {
      src: headshot, // use the imported file
      alt: "Portrait of Oscar Lee-Archer",
    },
  },

  // (optional, for when you want to wire CaseStudies later)
  work: [
    {
      id: "1",
      title: "Filter Redesign — Bunnings",
      description:
        "Simplified fulfilment & availability filters. Increased filter usage and ATC in early reads.",
      imageUrl: "figma:asset/2de27d2121b9468a8642d69c2b978f167f4a2d16.png",
      tags: ["UX Design", "E-commerce", "User Research"],
    },
  ],
};

export default content;
