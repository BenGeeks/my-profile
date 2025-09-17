import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { IoMdPin } from "react-icons/io";

// ====================================================================
// ======================== NAVIGATION LINKS ==========================
// ====================================================================

export const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Certificates", href: "/certificates" },
  // { name: "Education", href: "/education" },
  // { name: "Portfolio", href: "/portfolio" },
  // { name: "Contact", href: "/contact" },
];

// ====================================================================
// ============================ SKILLS DATA ===========================
// ====================================================================

export const skillData = [
  {
    category: "Core Web & Full-Stack",
    skills: [
      { name: "JavaScript", value: "92%" },
      { name: "TypeScript", value: "88%" },
      { name: "React.js", value: "90%" },
      { name: "Next.js", value: "85%" },
      { name: "Node.js", value: "82%" },
      { name: "Express.js", value: "78%" },
      { name: "NestJS", value: "75%" },
      { name: "MongoDB", value: "75%" },
      { name: "PostgreSQL", value: "72%" },
    ],
  },
  {
    category: "Frontend & Styling",
    skills: [
      { name: "HTML5", value: "92%" },
      { name: "CSS3", value: "90%" },
      { name: "Tailwind CSS", value: "85%" },
      { name: "Material UI / Shadcn", value: "80%" },
      { name: "Styled Component / CSS Module", value: "90%" },
    ],
  },
  {
    category: "AI & LLM Integration",
    skills: [
      { name: "LangChain", value: "88%" },
      { name: "OpenAI API", value: "90%" },
      { name: "Vector Databases (Pinecone)", value: "82%" },
      { name: "RAG Pipelines", value: "85%" },
      { name: "AI Agents & Orchestration", value: "83%" },
      { name: "Embeddings & Context Packs", value: "80%" },
      { name: "Prompt Engineering", value: "85%" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "API Development & Integrations", value: "87%" },
      { name: "SEO & Performance Optimization", value: "80%" },
      { name: "Docker & Cloud Deployment", value: "75%" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "English (Fluent)", value: "95%" },
      { name: "Technical Support", value: "100%" },
      { name: "Customer Service", value: "100%" },
      { name: "Team Management", value: "85%" },
    ],
  },
];

// ====================================================================
// ==================== CONTACT INFORMATION ===========================
// ====================================================================

export const ContactInfo = [
  { icon: <MdOutlineEmail />, data: <a href="mailto:b3nhur77@gmail.com">b3nhur77@gmail.com</a> },
  { icon: <MdLocalPhone />, data: <a href="tel:+639999957176">+63 999 995 7176</a> },
  { icon: <IoMdPin />, data: "B19 L23 Sta. Rosa Hills, Puting Kahoy, Silang Cavite Philippines 4118" },
  {
    icon: <FaLinkedinIn />,
    data: (
      <a href="https://www.linkedin.com/in/benhurvergaragicanii" target="_blank">
        https://www.linkedin.com/in/benhurvergaragicanii
      </a>
    ),
  },
  {
    icon: <SiUpwork />,
    data: (
      <a href="https://www.upwork.com/freelancers/~0145a04c4a590d7cc0" target="_blank">
        https://www.upwork.com/freelancers/~0145a04c4a590d7cc0
      </a>
    ),
  },
  {
    icon: <FaGithub />,
    data: (
      <a href="https://github.com/BenGeeks" target="_blank">
        https://github.com/BenGeeks
      </a>
    ),
  },
];

// ====================================================================
// ======================== WORK EXPERIENCE ===========================
// ====================================================================

export const workExperienceData = [
  {
    company: "Pivot Point",
    duration: "1Y 6M",
    position: [
      {
        title: "Senior Full-Stack JavaScript & AI Integration Developer",
        date: "Mar 2024 – Aug 2025",
        description: [
          "Built an AI-powered chat widget using React.js, OpenAI, LangChain, and PineconeDB",
          "Developed data pipelines, context packs, and embeddings for improved chatbot accuracy",
          "Integrated Podium, TrueDesk, Gmail, and Microsoft 365 into communication workflows",
          "Built an admin dashboard with Next.js and NestJS for managing AI workflows",
          "Maintained and updated the WordPress marketing site",
          "Stack: Vercel, Next.js, Tailwind CSS, NestJS, Prisma, DigitalOcean, OpenAI, PineconeDB, LangChain, Podium API, TrueDesk, Gmail API, Microsoft Graph",
        ],
      },
    ],
  },
  {
    company: "Website Advice",
    duration: "5M",
    position: [
      {
        title: "Full Stack Next.js Developer",
        date: "Sept 2024 – Jan 2025",
        description: [
          "Built the website from scratch to launch independently",
          "Designed architecture and implemented both frontend and backend systems",
          "Stack: Vercel, Next.js, Tailwind CSS, Prisma, PostgreSQL, NeonDB, EdgeStore",
        ],
      },
    ],
  },
  {
    company: "Bebeng’s Kitchen",
    duration: "1Y",
    position: [
      {
        title: "Full Stack Web Developer",
        date: "Sept 2023 – Aug 2024",
        description: [
          "Developed and deployed a PWA to streamline business transactions and reporting",
          "Managed app updates and bug fixes",
          "Stack: Vercel, Next.js, CSS Modules, Mongoose, MongoDB, EdgeStore",
        ],
      },
    ],
  },
  {
    company: "ClinicApp Online",
    duration: "1Y 7M",
    position: [
      {
        title: "Full Stack Web Developer",
        date: "Jul 2022 – Feb 2024",
        description: [
          "Created a full-stack medical management app using the MERN stack",
          "Deployed the app on Google Cloud Run with Docker for scalability",
          "Implemented PWA features for offline support and improved UX",
          "Stack: Google Cloud, React.js, Express.js, Docker, Styled Components, MongoDB",
        ],
      },
    ],
  },
  {
    company: "LeadsHook",
    duration: "2Y 10M",
    position: [
      {
        title: "Developer / Product Lead",
        date: "Jun 2021 – Apr 2024",
        description: [
          "Managed bug resolution workflows across multiple products",
          "Improved development efficiency via test automation (Mocha, Selenium)",
          "Integrated analytics tools like GTM and GA",
          "Handled frontend development for custom projects and product updates",
        ],
      },
    ],
  },
  {
    company: "BeeHaz",
    duration: "7M",
    position: [
      {
        title: "Frontend Developer",
        date: "Feb 2021 – Sept 2021",
        description: ["Built a house-rental PWA from scratch", "Collaborated with an international team in an agile environment", "Stack: React.js, Styled Components, Redux"],
      },
    ],
  },
  {
    company: "Technical Support (Concentrix, Webinato, ActivePipe, Penndac)",
    duration: "14Y",
    position: [
      {
        title: "Technical Support Representative / Engineer / SME",
        date: "Apr 2007 – Jun 2021",
        description: [
          "14 years of BPO experience, 4 of which were remote",
          "Provided technical support for SaaS platforms and VR/IoT products",
          "Handled escalations, QA testing, automated testing (Mocha, Selenium)",
          "Wrote technical documentation, KBs, and training material",
          "Delivered high CSAT scores across multiple accounts",
        ],
      },
    ],
  },
  {
    company: "ElectroPro Marketing",
    duration: "4Y 2M",
    position: [
      {
        title: "Lead Electronic Technician",
        date: "Jun 2001 – Aug 2005",
        description: ["Promoted from technician to lead in 2 years", "Managed and trained junior technicians", "Handled repair/maintenance of radios, computers, and cell phones"],
      },
    ],
  },
];

// ====================================================================
// ================ COURSES AND CERTIFICATE ===========================
// ====================================================================

export const certificateData = [
  {
    id: "UC-6ad2fa5d-7e74-488d-bb05-95f1e3f8c1e1",
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    date: "09-18-2025",
    source: "udemy",
  },
  {
    id: "UC-220f770b-62d6-4047-9b51-51172d66b233",
    title: "LangChain: Develop AI web-apps with JavaScript and LangChain",
    date: "09-16-2025",
    source: "udemy",
  },
  {
    id: "UC-c4e7febc-f822-4721-8f7b-02a3171482b5",
    title: "The Complete Agile Scrum Fundamentals Course + Certification",
    date: "09-10-2025",
    source: "udemy",
  },
  {
    id: "UC-3cf0a9a3-5cec-4f21-95e1-44e5ef9e60eb",
    title: "Blockchain and Bitcoin Fundamentals",
    date: "01-11-2024",
    source: "udemy",
  },
  {
    id: "UC-ea603582-2dd1-47c4-809b-0b9144380c09",
    title: "Next JS: The Complete Developers Guide",
    date: "12-27-2023",
    source: "udemy",
  },
  {
    id: "UC-81770fc6-1f4b-43dc-99fa-b662c7eaedeb",
    title: "React For The Rest Of Us",
    date: "01-12-2021",
    source: "udemy",
  },
  {
    id: "UC-815f3511-7e25-4cd3-98cf-d16e5c31aa1f",
    title: "Deploying Node.js on GCP",
    date: "09-22-2022",
    source: "udemy",
  },
  {
    id: "UC-fc8a27d7-07fe-4523-9dde-3c6637501e36",
    title: "GCP for Beginners - Become a Google Cloud Digital Leader",
    date: "01-22-2023",
    source: "udemy",
  },
  {
    id: "UC-6c9af6e4-198f-48d1-8c64-e9736946bbb3",
    title: "Progressive Web Apps (PWA) - The Complete Guide",
    date: "08-29-2021",
    source: "udemy",
  },
  {
    id: "UC-48e2cd3a-4940-4d45-be70-68227038c9b8",
    title: "Docker & Kubernetes: The Practical Guide [2024 Edition]",
    date: "09-16-2022",
    source: "udemy",
  },
  {
    id: "UC-b9be7e27-7acc-40c1-9d4d-50625590536a",
    title: "The Complete 2020 Fullstack Web Developer Course",
    date: "08-04-2020",
    source: "udemy",
  },
  {
    id: "UC-0c246894-c78f-4f2e-9c37-6e82aade0a34",
    title: "Git a Web Developer Job: Mastering the Modern Workflow",
    date: "03-13-2021",
    source: "udemy",
  },
  {
    id: "UC-71820bab-34cc-4ca5-bd95-90078b0cb90e",
    title: "JavaScript: The Advanced Concepts",
    date: "05-27-2023",
    source: "udemy",
  },
  {
    id: "UC-c0e90caa-031d-4810-9222-4e7961576f99",
    title: "Complete NodeJS Developer (GraphQL, MongoDB, + more)",
    date: "11-24-2023",
    source: "udemy",
  },
  {
    id: "UC-3663ddcc-c7fa-442c-831f-847ecc5102c7",
    title: "Next.js 14 & React - The Complete Guide",
    date: "12-09-2023",
    source: "udemy",
  },
  {
    id: "UC-6fcffad9-01c1-4f8c-805a-3dfdc459470e",
    title: "Become a WordPress Developer: Unlocking Power With Code",
    date: "12-25-2020",
    source: "udemy",
  },
  {
    id: "UC-0e2769ee-8580-4a69-8f83-b141381249b7",
    title: "Learn JavaScript: Full-Stack from Scratch",
    date: "12-30-2020",
    source: "udemy",
  },
  {
    id: "UC-047e3797-bf91-47b2-811c-0fba13334395",
    title: "Clean Code",
    date: "04-20-2023",
    source: "udemy",
  },
  {
    id: "UC-a8a0b45f-fb96-4a91-918d-bb7046643c8f",
    title: "Meteor and React for Realtime Apps",
    date: "04-01-2023",
    source: "udemy",
  },
  {
    id: "UC-fa0803ef-526a-4b26-bb0f-5e7631789b96",
    title: "MongoDB - The Complete Developers Guide 2024",
    date: "08-02-2022",
    source: "udemy",
  },
  {
    id: "UC-c1f4bf6a-54e8-4dd8-b5d5-d01f6d61ef08",
    title: "Learn to Code with Ruby",
    date: "11-30-2020",
    source: "udemy",
  },
  {
    id: "UC-AB1SAQND",
    title: "Complete Linux Training Course to Get Your Dream IT Job 2024",
    date: "04-17-2019",
    source: "udemy",
  },
  {
    id: "custom-img-only",
    title: "Network and Application Security",
    date: "02-15-2025",
    source: "custom",
    imageUrl: "/images/certificates/network_and_application_security.png",
    link: "/images/certificates/network_and_application_security.png",
  },
];
