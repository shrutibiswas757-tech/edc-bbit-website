/**
 * EDC BBIT - Official Initial Core Members & Organizers Data
 * Budge Budge Institute of Technology (BBIT), Kolkata
 * 
 * Note: Core members registered through the website portal are stored
 * dynamically in localStorage and merged with this seed list.
 */

const INITIAL_CORE_MEMBERS = [
  {
    id: "shruti-biswas",
    name: "Shruti Biswas",
    designation: "Developer & Organizer",
    category: "tech",
    department: "Computer Science & Engineering",
    year: "Core Team",
    bio: "Frontend Developer and Core Organizer at EDC BBIT. Leading web architecture, digital platforms, and orchestrating flagship innovation initiatives for campus founders.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "https://github.com/",
    email: "shruti.edc@bbit.edu.in",
    badge: "Core Developer & Organizer",
    isLeader: true,
    avatar: "" // Empty will render high-definition monogram avatar with warm gradient
  },
  {
    id: "lead-organizer",
    name: "Lead Student Organizer",
    designation: "Convener & Head of Cell",
    category: "leadership",
    department: "Electronics & Communication Engg.",
    year: "Final Year",
    bio: "Spearheading overall strategy, strategic institutional partnerships, and venture creation ecosystems across BBIT departments.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "",
    email: "president.edc@bbit.edu.in",
    badge: "Cell Convener",
    isLeader: true,
    avatar: ""
  },
  {
    id: "faculty-advisor",
    name: "Dr. Faculty Coordinator",
    designation: "Chief Faculty Advisor",
    category: "advisors",
    department: "Institution's Innovation Council (IIC)",
    year: "Faculty Mentor",
    bio: "Guiding EDC initiatives, academic curriculum alignment, government grant proposals, and industry incubation tie-ups.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "",
    email: "faculty.edc@bbit.edu.in",
    badge: "Faculty Advisor",
    isLeader: false,
    avatar: ""
  },
  {
    id: "pr-outreach-lead",
    name: "Head of Corporate Relations",
    designation: "PR & Sponsorship Lead",
    category: "pr",
    department: "Information Technology",
    year: "Core Team",
    bio: "Managing venture capitalist relationships, angel investor networks, industry guest speakers, and media partnerships for EDC summits.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "",
    email: "pr.edc@bbit.edu.in",
    badge: "Corporate Relations",
    isLeader: false,
    avatar: ""
  },
  {
    id: "events-operations-lead",
    name: "Head of Event Operations",
    designation: "Event & Hackathon Lead",
    category: "events",
    department: "Electrical Engineering",
    year: "Core Team",
    bio: "Executing flagship campus hackathons (Innov8), Shark Tank pitch showcases, bootcamps, and cross-college entrepreneurial challenges.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "",
    email: "events.edc@bbit.edu.in",
    badge: "Operations Lead",
    isLeader: false,
    avatar: ""
  },
  {
    id: "creative-lead",
    name: "Creative & Brand Lead",
    designation: "UI/UX & Media Designer",
    category: "tech",
    department: "Computer Science & Engineering",
    year: "Core Team",
    bio: "Crafting visual brand guidelines, pitch deck designs, marketing collaterals, and digital engagement assets for EDC BBIT.",
    linkedin: "https://www.linkedin.com/company/ed-cell-bbit/",
    github: "",
    email: "design.edc@bbit.edu.in",
    badge: "Creative Lead",
    isLeader: false,
    avatar: ""
  }
];

const EDC_INITIATIVES = [
  {
    title: "Innov8 Hackathon & PitchFest",
    tag: "Flagship Annual Event",
    desc: "BBIT's premier 36-hour prototyping and venture pitching competition connecting student innovators with angel investors and industry mentors.",
    icon: "award"
  },
  {
    title: "Founder's Spotlight & Fireside Talks",
    tag: "Monthly Series",
    desc: "Interactive masterclasses with startup founders, YC alumni, and venture capitalists sharing real playbooks from 0 to 1.",
    icon: "users"
  },
  {
    title: "Pre-Incubation & Seed Lab",
    tag: "Campus Incubation",
    desc: "Dedicated co-working space, legal guidance, intellectual property (IP/Patent) advisory, and cloud credits for vetted student startups.",
    icon: "rocket"
  },
  {
    title: "Design Thinking & Prototyping Bootcamps",
    tag: "Skill Acceleration",
    desc: "Intensive hands-on bootcamps in full-stack MVP building, financial modeling, market validation, and pitch deck storytelling.",
    icon: "code"
  }
];

const EDC_FAQS = [
  {
    q: "What is the Entrepreneurship Development Cell (EDC) at BBIT?",
    a: "EDC BBIT is the official student-led entrepreneurship incubation cell at Budge Budge Institute of Technology, Kolkata. Our mandate is to cultivate an entrepreneurial mindset, provide mentorship, incubate viable technology startups, and bridge the gap between campus talent and the global startup ecosystem."
  },
  {
    q: "Who can join EDC BBIT as a student member?",
    a: "Any enrolled student at BBIT across all departments (CSE, IT, ECE, EE, ME, CE, MBA, Diploma) regardless of year of study can join. Whether you have an existing startup idea or simply wish to learn how companies are built, you are welcome!"
  },
  {
    q: "How can Core Members and Organizers register on this website?",
    a: "Core members and organizers can click the '+ Register as Core Member' button in the navigation or Team section. Enter your designation, department, contact info, bio, and LinkedIn URL. Your profile will be instantly saved and displayed in the Core Team roster."
  },
  {
    q: "Do I need a business idea or coding skills to join EDC?",
    a: "No prior business or coding experience is required! EDC needs passionate students with diverse skillsets: operations, writing, public relations, design, management, and technical development. We conduct beginner-friendly training bootcamps."
  },
  {
    q: "How does EDC support student startups at BBIT?",
    a: "We offer end-to-end guidance including problem validation, technical prototyping, mentor matching, seed grant application assistance through government schemes (like Startup India, MSME, AICTE IIC), and direct investor pitching."
  }
];
