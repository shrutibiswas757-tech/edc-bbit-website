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
      name: "Dr. Prof. Ashok Kumar Shaw",
      role: "President",
      designation: "President, EDC BBIT & IIC • Dean (R&D)",
      academicTitle: "Dean (Research & Development), Professor & HOD (BSH & Mathematics)",
      category: "Faculty Leadership",
      department: "Mathematics & Basic Science and Humanities (BSH)",
      bio: "Dean of Research & Development and Professor & Head of the Department (BSH/Mathematics) at BBIT. Providing strategic academic mentorship and research-to-commercialization roadmaps, empowering students in reliability optimization and innovation.",
      badge: "President — EDC BBIT & IIC",
      image: "assets/images/dr-ashok-shaw.jpg",
      initials: "AS",
      specialization: ["Reliability Optimization", "Fuzzy Mathematics", "Inventory Systems", "R&D Incubation"],
      officialUrl: "https://bbit.edu.in",
      email: "edc.bbit.official@gmail.com",
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "#000000"
    },
    {
      id: "yusuf-alam",
      name: "Dr. Prof. Munshi Yusuf Alam",
      role: "Convener",
      designation: "Convener, EDC BBIT • Associate Professor (CSE)",
      academicTitle: "Associate Professor, Computer Science & Engineering (Cyber Security)",
      category: "Faculty Leadership",
      department: "Computer Science & Engineering (CSE - Cyber Security)",
      bio: "Associate Professor in the Department of Computer Science & Engineering at BBIT. Orchestrating EDC administration, flagship hackathons (INNOV8), startup incubation bootcamps, and bridging student creators with advanced research in IoT and pervasive systems.",
      badge: "Convener — EDC BBIT",
      image: "assets/images/dr-munshi-yusuf-alam.jpg",
      initials: "YA",
      specialization: ["Pervasive Computing", "Internet of Things (IoT)", "Machine Learning", "Cyber Security"],
      officialUrl: "https://bbit.edu.in",
      email: "edc.bbit.official@gmail.com",
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      avatarBg: "#18181b"
    }
  ],

  coreMembers: [
    {
      id: "rajib-karmakar",
      name: "Rajib Karmakar",
      role: "Core Member",
      designation: "Core Member",
      year: "4th Year",
      contact: "9153136004",
      department: "Engineering (BBIT)",
      category: "core leadership 4th",
      bio: "4th Year Core Member guiding strategic cell initiatives, event execution, and student startup acceleration.",
      skills: ["Strategic Planning", "Team Leadership", "Operations", "Event Logistics"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      photo: "assets/images/rajib-karmakar.jpg",
      photoClass: "avatar-rajib",
      initials: "RK",
      avatarBg: "linear-gradient(135deg, #18181b, #000000)",
      isHighlight: false
    },
    {
      id: "supravat-pal",
      name: "Supravat Pal",
      role: "Core Member",
      designation: "Core Member",
      year: "4th Year",
      contact: "7439928855",
      department: "Engineering (BBIT)",
      category: "core leadership 4th",
      bio: "4th Year Core Member coordinating student innovation pipelines, technical evaluation, and event operations.",
      skills: ["Operations Management", "Event Planning", "Student Coordination", "Logistics"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      photo: "assets/images/supravat-pal.jpg",
      photoClass: "avatar-supravat",
      initials: "SP",
      avatarBg: "linear-gradient(135deg, #27272a, #18181b)",
      isHighlight: false
    },
    {
      id: "tirtha-shankar-khan",
      name: "Tirtha Shankar Khan",
      role: "Core Member",
      designation: "Core Member",
      year: "4th Year",
      contact: "9382087189",
      department: "Engineering (BBIT)",
      category: "core leadership 4th",
      bio: "4th Year Core Member spearheading technical oversight, cross-club synchronization, and major hackathon challenges.",
      skills: ["Project Coordination", "Technical Oversight", "Outreach", "Operations"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "TK",
      avatarBg: "linear-gradient(135deg, #3f3f46, #18181b)",
      isHighlight: false
    },
    {
      id: "arva-jatin",
      name: "Arva Jatin",
      role: "Core Member",
      designation: "Core Member",
      year: "3rd Year",
      contact: "8240811834",
      department: "Engineering (BBIT)",
      category: "core leadership 3rd",
      bio: "3rd Year Core Member managing student engagement, administrative operations, and ideation bootcamp workflows.",
      skills: ["Event Management", "Student Engagement", "Administration", "Outreach"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AJ",
      avatarBg: "linear-gradient(135deg, #27272a, #09090b)",
      isHighlight: false
    },
    {
      id: "avinaba-mitra",
      name: "Avinaba Mitra",
      role: "Core Member",
      designation: "Core Member",
      year: "3rd Year",
      contact: "9734094131",
      department: "Engineering (BBIT)",
      category: "core leadership 3rd",
      bio: "3rd Year Core Member leading innovation strategy, hackathon tracks, and technical operational execution.",
      skills: ["Innovation Strategy", "Hackathon Logistics", "Tech Operations", "Problem Solving"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      photo: "assets/images/avinaba-mitra.jpg",
      photoClass: "avatar-avinaba",
      initials: "AM",
      avatarBg: "linear-gradient(135deg, #52525b, #18181b)",
      isHighlight: false
    },
    {
      id: "aritroy-kundu",
      name: "Aritroy Kundu",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "9382211382",
      department: "Engineering (BBIT)",
      category: "volunteer tech 3rd",
      bio: "3rd Year Volunteer providing technical support, equipment coordination, and campus outreach for EDC activities.",
      skills: ["Technical Support", "Event Logistics", "Campus Outreach"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AK",
      avatarBg: "linear-gradient(135deg, #3f3f46, #27272a)",
      isHighlight: false
    },
    {
      id: "navneet-singh",
      name: "Navneet Singh",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "7070444574",
      department: "Engineering (BBIT)",
      category: "volunteer outreach 3rd",
      bio: "3rd Year Volunteer handling inter-departmental communications, public relations, and event hosting.",
      skills: ["Public Relations", "Communication", "Event Hosting", "Outreach"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "NS",
      avatarBg: "linear-gradient(135deg, #52525b, #27272a)",
      isHighlight: false
    },
    {
      id: "ankur-pal",
      name: "Ankur Pal",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "9875415054",
      department: "Engineering (BBIT)",
      category: "volunteer tech 3rd",
      bio: "3rd Year Volunteer managing registration desks, attendee tracking, and infrastructure coordination during hackathons.",
      skills: ["Operations", "Registration Support", "Coordination", "Logistics"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AP",
      avatarBg: "linear-gradient(135deg, #27272a, #18181b)",
      isHighlight: false
    },
    {
      id: "khushi-kumari",
      name: "Khushi Kumari",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "9608875808",
      department: "Engineering (BBIT)",
      category: "volunteer design 3rd",
      bio: "3rd Year Volunteer driving visual design assets, social media branding, and creative participant campaigns.",
      skills: ["Creative Design", "Social Media", "Participant Engagement"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "KK",
      avatarBg: "linear-gradient(135deg, #3f3f46, #09090b)",
      isHighlight: false
    },
    {
      id: "surojit-roy",
      name: "Surojit Roy",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "7980488817",
      department: "Engineering (BBIT)",
      category: "volunteer tech 3rd",
      bio: "3rd Year Volunteer assisting with ground logistics, audio-visual technical setups, and event stage flow management.",
      skills: ["Logistics Management", "Technical Setup", "Event Coordination"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      photo: "assets/images/surojit-roy.jpg",
      photoClass: "avatar-surojit",
      initials: "SR",
      avatarBg: "linear-gradient(135deg, #18181b, #000000)",
      isHighlight: false
    },
    {
      id: "kuntal-mondal",
      name: "Kuntal Mondal",
      role: "Volunteer",
      designation: "Volunteer",
      year: "3rd Year",
      contact: "6294402163",
      department: "Information Technology",
      category: "volunteer tech 3rd",
      bio: "3rd Year Volunteer handling media capture, digital certificate administration, and technical coordination.",
      skills: ["Media Operations", "Infrastructure", "Technical Coordination"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      photo: "assets/images/kuntal-mondal.jpg",
      photoClass: "avatar-kuntal",
      initials: "KM",
      avatarBg: "linear-gradient(135deg, #27272a, #09090b)",
      isHighlight: false
    },
    {
      id: "sudip-pal",
      name: "Sudip Pal",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "9641718883",
      department: "Engineering (BBIT)",
      category: "volunteer tech 2nd",
      bio: "2nd Year Volunteer facilitating junior student participation, hackathon desk management, and venue setup.",
      skills: ["Campus Logistics", "Technical Support", "Volunteer Operations"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "SP",
      avatarBg: "linear-gradient(135deg, #3f3f46, #18181b)",
      isHighlight: false
    },
    {
      id: "abhradeep-basu",
      name: "Abhradeep Basu",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "6290037905",
      department: "Engineering (BBIT)",
      category: "volunteer tech 2nd",
      bio: "2nd Year Volunteer supporting software platforms, digital form workflows, and technical helpdesks.",
      skills: ["Software Development", "Web Coordination", "System Setup"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AB",
      avatarBg: "linear-gradient(135deg, #52525b, #18181b)",
      isHighlight: false
    },
    {
      id: "avnish-kumar",
      name: "Avnish Kumar",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "7044313170",
      department: "Engineering (BBIT)",
      category: "volunteer outreach 2nd",
      bio: "2nd Year Volunteer actively promoting EDC initiatives, student awareness campaigns, and membership drives across campus.",
      skills: ["Publicity", "Outreach", "Student Relations"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AK",
      avatarBg: "linear-gradient(135deg, #27272a, #000000)",
      isHighlight: false
    },
    {
      id: "nitika-kumari",
      name: "Nitika Kumari",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "7980460545",
      department: "Engineering (BBIT)",
      category: "volunteer design 2nd",
      bio: "2nd Year Volunteer crafting publicity collaterals, organizing certificates, and managing participant hospitality.",
      skills: ["Creative Assets", "Event Documentation", "Community Engagement"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "NK",
      avatarBg: "linear-gradient(135deg, #3f3f46, #27272a)",
      isHighlight: false
    },
    {
      id: "khushi-srivastav",
      name: "Khushi Srivastav",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "8240744408",
      department: "Engineering (BBIT)",
      category: "volunteer outreach 2nd",
      bio: "2nd Year Volunteer leading stage communications, speaker introductions, and public relations for cell events.",
      skills: ["Anchoring", "Public Relations", "Stage Management"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "KS",
      avatarBg: "linear-gradient(135deg, #52525b, #27272a)",
      isHighlight: false
    },
    {
      id: "anushree-jana",
      name: "Anushree Jana",
      role: "Volunteer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "8670218593",
      department: "Engineering (BBIT)",
      category: "volunteer outreach 2nd",
      bio: "2nd Year Volunteer coordinating guest hospitality, student registrations, and event feedback collection.",
      skills: ["Hospitality & PR", "Documentation", "Event Management"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      initials: "AJ",
      avatarBg: "linear-gradient(135deg, #3f3f46, #18181b)",
      isHighlight: false
    },
    {
      id: "shruti-biswas",
      name: "Shruti Biswas",
      role: "Lead Developer & Organizer",
      designation: "Volunteer",
      year: "2nd Year",
      contact: "7044411911",
      department: "Computer Science & Engineering",
      category: "volunteer tech 2nd leadership",
      bio: "Developer & Organizer of the official EDC BBIT website and portal. Architecting web systems, student onboarding passes, and interactive member registries.",
      skills: ["Full Stack Development", "Web Architecture", "UI/UX Design", "Event Operations"],
      linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
      github: "https://github.com/shrutibiswas757-tech",
      email: "shrutibiswas757@gmail.com",
      photo: "assets/images/shruti-biswas.jpg",
      photoClass: "avatar-shruti",
      avatarBg: "linear-gradient(135deg, #18181b, #000000)",
      initials: "SB",
      isHighlight: true
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
