/**
 * EDC BBIT - Seed Data and Initial State
 * Budge Budge Institute of Technology Entrepreneurship Development Cell
 */

const INITIAL_EDC_DATA = {
  cellInfo: {
    name: "Entrepreneurship Development Cell",
    shortName: "EDC BBIT",
    parentCollege: "Budge Budge Institute of Technology (BBIT)",
    tagline: "Igniting Ideas, Fostering Innovation & Building Future Founders",
    motto: "From Job Seekers to Job Creators",
    linkedinUrl: "https://www.linkedin.com/company/ed-cell-bbit/",
    email: "edc.bbit.official@gmail.com",
    address: "Budge Budge Institute of Technology, Nischintapur, Budge Budge, Kolkata, West Bengal - 700137",
    affiliations: [
      "Institution's Innovation Council (IIC)",
      "BBIT Research & Development (R&D) Cell",
      "Coders' Club BBIT",
      "Google Developer Groups on Campus (GDGC BBIT)"
    ]
  },

  stats: [
    { label: "Active Members", value: "350+", icon: "users" },
    { label: "Events & Hackathons", value: "25+", icon: "calendar" },
    { label: "Student Startups Mentored", value: "15+", icon: "rocket" },
    { label: "Prize Pool Awarded", value: "₹2.5L+", icon: "award" }
  ],

  initiatives: [
    {
      id: "incubation",
      title: "Startup Incubation & Mentoring",
      icon: "rocket",
      description: "Providing aspiring student entrepreneurs with 1-on-1 mentorship, legal guidance, intellectual property basics, and prototyping resources.",
      tags: ["Mentorship", "Prototyping", "Incubation"]
    },
    {
      id: "hackathons",
      title: "Flagship Hackathons & Ideathons",
      icon: "code",
      description: "Organizing 32-hour continuous hackathons like INNOV8 and ideation challenges like Innovation Ignite to build real-world solutions.",
      tags: ["INNOV8 3.0", "Ideation", "Prototyping"]
    },
    {
      id: "workshops",
      title: "Skill Development Bootcamps",
      icon: "cpu",
      description: "Hands-on masterclasses covering AI & Machine Learning, Full-Stack Web Development, Product Design, Pitch Deck Crafting, and Venture Finance.",
      tags: ["Hands-on", "Industry Tech", "Masterclasses"]
    },
    {
      id: "networking",
      title: "Founder Talks & Networking",
      icon: "globe",
      description: "Interactive sessions with alumni founders, venture capitalists, startup mentors, and industry veterans sharing their entrepreneurial journeys.",
      tags: ["Guest Speakers", "Alumni", "VC Insights"]
    },
    {
      id: "funding",
      title: "Investor Pitch & Seed Support",
      icon: "trending-up",
      description: "Guiding high-potential student projects to participate in state and national pitching stages, securing institutional and angel seed assistance.",
      tags: ["Pitch Decks", "Seed Grant", "Competitions"]
    },
    {
      id: "ecosystem",
      title: "Cross-Club Synergy",
      icon: "zap",
      description: "Seamlessly collaborating with Coders' Club, GDGC BBIT, R&D Cell, and IIC to bridge the gap between technical code and viable commercial models.",
      tags: ["IIC Collaboration", "R&D", "Interdisciplinary"]
    }
  ],

  events: [
    {
      id: "innov8-3",
      title: "INNOV8 3.0 — 32-Hour Continuous Hackathon",
      status: "Past Milestone",
      date: "30 Sept – 1 Oct 2026",
      venue: "BBIT Academic Building & Campus",
      description: "A marquee 32-hour hackathon bringing together 45+ teams and 210+ participants across software and hardware innovation tracks, backed by FSL and college departments.",
      stats: "45+ Teams • ₹25,000+ Prize Pool • 32 Hours",
      category: "Hackathon",
      badge: "Flagship Event"
    },
    {
      id: "innovation-ignite",
      title: "Innovation Ignite 5.0 — Ideation & Pitch Challenge",
      status: "Flagship Initiative",
      date: "Concurrent with INNOV8",
      venue: "Auditorium & Innovation Hub",
      description: "A premier platform for students to pitch inventive solutions addressing Green Energy, Healthcare Tech, AI for Bharat, and Smart Automation.",
      stats: "30+ Pitches • Top 3 Cash Awards • Direct Incubation Support",
      category: "Ideathon",
      badge: "Annual Ideation"
    },
    {
      id: "founders-circle",
      title: "E-Summit & Founder's Masterclass 2026",
      status: "Upcoming",
      date: "Coming Soon",
      venue: "BBIT Central Auditorium / Virtual",
      description: "An intensive weekend of keynotes, venture-building workshops, and live pitching to angel investors and industry leaders.",
      stats: "Keynote Speakers • Networking Lounge • Certificate of Merit",
      category: "Summit",
      badge: "Upcoming"
    }
  ],

  facultyLeadership: [
    {
      id: "ashok-shaw",
      name: "Ashok Shaw Sir",
      role: "President",
      designation: "President, EDC BBIT",
      category: "Faculty Leadership",
      department: "Institution's Innovation Council & Faculty Leadership",
      bio: "President of the Entrepreneurship Development Cell at Budge Budge Institute of Technology. Providing strategic vision, institutional mentoring, and fostering entrepreneurial acceleration across all academic departments.",
      badge: "President — EDC BBIT",
      initials: "AS",
      email: "edc.bbit.official@gmail.com",
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "#000000"
    },
    {
      id: "yusuf-alam",
      name: "Yusuf Alam",
      role: "Convener",
      designation: "Convener, EDC BBIT",
      category: "Faculty Leadership",
      department: "EDC Administration & Student Engagement",
      bio: "Convener of the Entrepreneurship Development Cell at BBIT. Orchestrating campus hackathons, startup bootcamps, venture mentoring, and industry-academia entrepreneurial partnerships.",
      badge: "Convener — EDC BBIT",
      initials: "YA",
      email: "edc.bbit.official@gmail.com",
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "#18181b"
    }
  ],

  coreMembers: [
    {
      id: "shruti-biswas",
      name: "Shruti Biswas",
      role: "Developer & Organizer",
      category: "Tech & Operations",
      department: "Computer Science & Engineering",
      year: "Final Year",
      bio: "Core Committee Lead at EDC BBIT, managing web systems, event documentation, and registration desks. Passionate about software architecture, frontend design, and building platforms that empower students.",
      skills: ["Full Stack Development", "Event Operations", "Documentation", "UI/UX Design"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      github: "https://github.com",
      email: "shrutibiswas.edc@gmail.com",
      avatarBg: "linear-gradient(135deg, #3f3f46, #09090b)",
      initials: "SB",
      isHighlight: true
    },
    {
      id: "akash-kumar",
      name: "Akash Kumar",
      role: "Student Lead & Organizer",
      category: "Leadership",
      department: "CSE - Artificial Intelligence",
      year: "Final Year",
      bio: "Student Lead & President of Coders' Club, driving strategic coordination between technical clubs and the Entrepreneurship Development Cell at BBIT.",
      skills: ["Leadership", "Strategic Planning", "AI/ML", "Hackathon Organization"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "linear-gradient(135deg, #27272a, #000000)",
      initials: "AK",
      isHighlight: false
    },
    {
      id: "abhishek-singh",
      name: "Abhishek Kumar Singh",
      role: "Operations & Outreach Lead",
      category: "Leadership",
      department: "CSE - Artificial Intelligence",
      year: "Final Year",
      bio: "Core Organizer handling event logistics, outreach, participant management, and inter-institutional public relations.",
      skills: ["Operations", "PR & Outreach", "Event Management", "Sponsorship"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "linear-gradient(135deg, #52525b, #18181b)",
      initials: "AS",
      isHighlight: false
    },
    {
      id: "bithika-purkait",
      name: "Bithika Purkait",
      role: "Creative & Design Lead",
      category: "Design",
      department: "Computer Science & Engineering",
      year: "Pre-Final Year",
      bio: "Crafting visually compelling identities, event banners, posters, and digital aesthetics for all EDC BBIT showcases and summits.",
      skills: ["Graphic Design", "Branding", "Visual Storytelling", "Figma"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "linear-gradient(135deg, #3f3f46, #18181b)",
      initials: "BP",
      isHighlight: false
    },
    {
      id: "kuntal-mandal",
      name: "Kuntal Mandal",
      role: "Technical Coordinator & Media",
      category: "Tech & Operations",
      department: "Information Technology",
      year: "Final Year",
      bio: "Handling credential distribution, event infrastructure, and digital documentation across hackathons and workshops.",
      skills: ["Media Operations", "Infrastructure", "Technical Coordination"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "linear-gradient(135deg, #27272a, #09090b)",
      initials: "KM",
      isHighlight: false
    },
    {
      id: "shadma-yunus",
      name: "Shadma Yunus",
      role: "Anchor & Public Relations",
      category: "Outreach",
      department: "Computer Science & Engineering",
      year: "Final Year",
      bio: "Engaging host, public speaker, and outreach coordinator steering ceremonies, webinars, and speaker engagement sessions.",
      skills: ["Anchoring", "Public Relations", "Communication", "Event Hosting"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "linear-gradient(135deg, #52525b, #27272a)",
      initials: "SY",
      isHighlight: false
    }
  ],

  faqs: [
    {
      question: "What is the primary purpose of the EDC Cell at BBIT?",
      answer: "The Entrepreneurship Development Cell (EDC) is dedicated to transforming ambitious college students into innovative problem solvers and startup founders. We bridge engineering and technology with viable business models through workshops, mentoring, hackathons, and incubation support."
    },
    {
      question: "Who can join EDC BBIT? Is it limited to CSE students?",
      answer: "Not at all! EDC welcomes students from every department (CSE, CSE-AI, IT, EE, ME, Civil, Management, etc.) and every academic year. Startups thrive on cross-disciplinary teams where designers, engineers, marketers, and visionaries collaborate."
    },
    {
      question: "How can core members register or update their designation?",
      answer: "Core members and organizers can register their details using the 'Register as Core Member' button in the Core Team section. The profile is instantly added to the directory and can also be exported as a permanent code update."
    },
    {
      question: "What benefits do I get by joining as a student member?",
      answer: "You get direct priority access to hackathons (like INNOV8), startup ideation bootcamps (Innovation Ignite), exclusive guest lectures from startup founders, official certificates of participation/merit, and potential seed funding mentorship."
    },
    {
      question: "Does EDC BBIT help if I already have a startup or prototype idea?",
      answer: "Yes! EDC provides structured mentorship, connects you with faculty advisors in the R&D Cell and IIC, helps you develop a pitch deck, and prepares you for state/national innovation grants."
    }
  ]
};

// Universal script & module export compatibility
if (typeof window !== 'undefined') {
  window.INITIAL_EDC_DATA = INITIAL_EDC_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_EDC_DATA };
}
