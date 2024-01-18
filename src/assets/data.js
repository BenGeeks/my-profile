import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import { IoMdPin } from 'react-icons/io';
import { AiOutlineSkype } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// ====================================================================
// ============================ SKILLS DATA ===========================
// ====================================================================

export const skillData = [
  { name: 'JavaScript', value: '90%' },
  { name: 'ReactJs', value: '90%' },
  { name: 'NodeJs', value: '80%' },
  { name: 'MongoDB', value: '75%' },
  { name: 'ExpressJs', value: '75%' },
  { name: 'NextJs', value: '60%' },
  { name: 'HTML5', value: '92%' },
  { name: 'CSS3', value: '90%' },
  { name: 'English', value: '95%' },
  { name: 'Technical Support', value: '100%' },
  { name: 'Customer Service', value: '100%' },
  { name: 'Team Management', value: '85%' },
];

// ====================================================================
// ==================== CONTACT INFORMATION ===========================
// ====================================================================

export const ContactInfo = [
  { icon: <MdOutlineEmail />, data: 'b3nhur77@gmail.com' },
  { icon: <MdLocalPhone />, data: '+63 999 995 7176' },
  { icon: <IoMdPin />, data: 'B19 L23 Sta. Rosa Hills, Puting Kahoy, Silang Cavite Philippines 4118' },
  { icon: <AiOutlineSkype />, data: 'b3nhur77' },
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
    company: 'ClinicApp Online',
    duration: '1Y 5M',
    position: [
      {
        title: 'Full Stack Web developer',
        date: 'Jul 2022 - Present',
        description: [
          'Built the backend and the frontend all by myself',
          'Built using the MERN stack',
          'Created the app as a Progressive Web App (PWA)',
          'Deployed in Google Cloud Run in a Docker Container',
          'Maintenance and bug fixes',
        ],
      },
    ],
  },
  {
    company: 'LeadsHook (Upwork)',
    duration: '2Y 6M',
    position: [
      {
        title: 'Product Lead',
        date: 'Oct 2022 - Dec 2023',
        description: [
          'Manages all the bugs collected from tech support',
          'Checks and verifies product bugs',
          'Assign bug issues to dev with priority status',
          'Check bug fixes before deploying to production',
          'Frontend web development for custom project',
        ],
      },
      {
        title: 'Front-end Developer | Technical Support',
        date: 'Jun 2021 - Oct 2022',
        description: [
          'Handles frontend web development for custom projects',
          'Handles frontend development for product updates',
          'Handles customers’ technical issues',
          'Vanilla JS, HTML, CSS',
        ],
      },
    ],
  },
  {
    company: 'Beehaz (Upwork)',
    duration: '7M',
    position: [
      {
        title: 'Junior Front-end Developer',
        date: 'Feb 2021 - Sep 2021',
        description: ['Built a house renting app from ground up', 'Create the app as a Progressive Web App (PWA)', 'ReactJS, Redux, Hooks'],
      },
    ],
  },
  {
    company: 'Yongyi Xu (Upwork)',
    duration: '3M',
    position: [
      {
        title: 'React.js Developer + Customer Support (Shopify)',
        date: 'Feb 2021 - Apr 2021',
        description: [
          'Refactor existing Shopify App',
          'Fix bugs reported by users',
          'Create custom codes from customers’ request',
          'Handle customers’ technical concerns',
        ],
      },
    ],
  },
  {
    company: 'ActivePipe (Upwork)',
    duration: '7M',
    position: [
      {
        title: 'Technical Support Representative',
        date: 'May 2020 - Dec 2020',
        description: ['Email support', 'NA, ANZ and UK coverage'],
      },
    ],
  },
  {
    company: 'Webinato',
    duration: '3Y 11M',
    position: [
      {
        title: 'Technical Support Representative',
        date: 'Aug 2017 - Jul 2021',
        description: [
          'Phone, email and chat support from home',
          'New product testing (Flowapp.com)',
          'Automated test developer using Mocha and Selenium',
          'Manual QA Tester',
          'API Testing and Documentation',
          'Article writer, editor, and publisher for both Webinato and Flowapp',
        ],
      },
    ],
  },
  {
    company: 'Concentrix',
    duration: '10Y 2M',
    position: [
      {
        title: 'Subject Matter Expert',
        date: 'Nov 2016 - Jun 2017',
        description: [
          'HTC Vive Support',
          'Tech Lead for Tier 1 and Tier 2 support',
          'QA monitoring and coaching',
          'Generate team data and reporting',
          'Client interaction',
          'Team supervision',
        ],
      },
      {
        title: 'Technical Support Engineer (Tier 2)',
        date: 'Nov 2015 - Nov 2016',
        description: [
          'HTC Vive Support',
          'Virtual Reality Start-up support team',
          'Virtual Reality QA tester',
          'Knowledge Base creation',
          'Virtual Reality chat/voice/email support',
          'Team data report and analytics',
          'Team management in the absense of a team captain',
        ],
      },
      {
        title: 'Technical Support Engineer (Tier 2)',
        date: 'Apr 2014 - October 2015',
        description: [
          'HTC Phone Support',
          'Technical escalation and callbacks',
          'RMA escalation, process and negotiation',
          'Android and Windows smart phones support',
          'Caters US and Canada',
          'Handle second level support',
          'Track down new android issue',
          'Research and investigate emerging issue',
          'Monitor android FOTA issue',
          'Monitor and report team performance',
          'Monitor and report team payroll discrepancies',
          'Manage team Vacation Leaves',
        ],
      },

      {
        title: 'Technical Support Engineer',
        date: 'Feb 2010 - Apr 2014',
        description: [
          'Point Person for more than 2 years',
          'Handles and manages the team in the absence of the Team Captain',
          'Handles complicated and escalated cases',
          'Takes supervisor call in the absence of Team Captain',
          'Generates report for team’s visibility on performance',
          'Multiple sales training',
          'High sales conversion and revenue',
          'All out support for all computer and networking issues (all brands, all products, all computer and network devices)',
          'Support for Supportrix, Rokucare, Belkin Premium Support, Synnex OnDemand IT, Linksys ANZ/UK, Dlink Business Class',
        ],
      },

      {
        title: 'Senior Product Support Specialist',
        date: 'Jan 2009 - Jan 2010',
        description: [
          'Technical support for all IOGEAR products: KVM Switches, Bluetooth Devices, Network USB, Powerline, Routers and Adapters, Print servers, Card Readers, External Display (extenders and accessories)',
          'Voice, Chat and Email Support',
          'Simultaneous Voice and multiple chat support',
          'Point Person in the absense of the team captain',
          'Best KPI for the year 2009',
        ],
      },

      {
        title: 'Product Support Specialist',
        date: 'Jun 2008 - Jan 2009',
        description: [
          'Technical support for Linksys advance networking devices: Network Storage, IP Camera, Print Server, IP Phone, Music Bridge',
          'Top CSAT (Customer Satisfaction) agent',
          'Phone Support covering US and Canada',
          'Flexible work schedule',
          'Excellent in oral English',
          'Helped in creating Cheat Sheets and work tools for second level support',
          'Helped Team Captain in Generating team performance report',
        ],
      },

      {
        title: 'Product Support Representative',
        date: 'Apr 2007 - Jun 2008',
        description: [
          'Technical support for Linksys basic products: Routers, Switches, Wired and Wireless Adapter, Bridge, Game Adapters, Wireless Extender',
          'Top CSAT (Customer Satisfaction) agent',
          'Phone Support covering US and Canada',
          'Flexible work schedule',
          'Excellent in oral English',
        ],
      },
    ],
  },
  {
    company: 'Penndac',
    duration: '7M',
    position: [
      {
        title: 'Transcriptionist',
        date: 'Jun 2005 - Dec 2005',
        description: [
          'Transcribed reports from field agents (US English)',
          'Worked-from-home (Online)',
          'Average typing skill with high accuracy',
          'Flexible work schedule',
        ],
      },
    ],
  },
  {
    company: 'Electro Pro Marketing',
    duration: '4Y 2M',
    position: [
      {
        title: 'Electronic Technician',
        date: 'Jun 2001 - Aug 2005',
        description: [
          'Lead technician for more than 2 years',
          'Managed 3-member team for project assembly',
          'Computer and cell phone repair',
          'Repair and maintenance of 2-way radio (HF, VHF, UHF)',
          'Antenna repair and assembly for VHF and UHF',
          'Customer service and product sales',
        ],
      },
    ],
  },
];

// ====================================================================
// ================ COURSES AND CERTIFICATE ===========================
// ====================================================================

export const certificateData = [
  {
    id: 'UC-3cf0a9a3-5cec-4f21-95e1-44e5ef9e60eb',
    title: 'Blockchain and Bitcoin Fundamentals',
    date: '01-11-2024',
  },
  {
    id: 'UC-ea603582-2dd1-47c4-809b-0b9144380c09',
    title: 'Next JS: The Complete Developers Guide',
    date: '12-27-2023',
  },
  {
    id: 'UC-81770fc6-1f4b-43dc-99fa-b662c7eaedeb',
    title: 'React For The Rest Of Us',
    date: '01-12-2021',
  },
  {
    id: 'UC-815f3511-7e25-4cd3-98cf-d16e5c31aa1f',
    title: 'Deploying Node.js on GCP',
    date: '09-22-2022',
  },
  {
    id: 'UC-fc8a27d7-07fe-4523-9dde-3c6637501e36',
    title: 'GCP for Beginners - Become a Google Cloud Digital Leader',
    date: '01-22-2023',
  },
  {
    id: 'UC-6c9af6e4-198f-48d1-8c64-e9736946bbb3',
    title: 'Progressive Web Apps (PWA) - The Complete Guide',
    date: '08-29-2021',
  },
  {
    id: 'UC-48e2cd3a-4940-4d45-be70-68227038c9b8',
    title: 'Docker & Kubernetes: The Practical Guide [2024 Edition]',
    date: '09-16-2022',
  },
  {
    id: 'UC-b9be7e27-7acc-40c1-9d4d-50625590536a',
    title: 'The Complete 2020 Fullstack Web Developer Course',
    date: '08-04-2020',
  },
  {
    id: 'UC-0c246894-c78f-4f2e-9c37-6e82aade0a34',
    title: 'Git a Web Developer Job: Mastering the Modern Workflow',
    date: '03-13-2021',
  },
  {
    id: 'UC-71820bab-34cc-4ca5-bd95-90078b0cb90e',
    title: 'JavaScript: The Advanced Concepts',
    date: '05-27-2023',
  },
  {
    id: 'UC-c0e90caa-031d-4810-9222-4e7961576f99',
    title: 'Complete NodeJS Developer (GraphQL, MongoDB, + more)',
    date: '11-24-2023',
  },
  {
    id: 'UC-3663ddcc-c7fa-442c-831f-847ecc5102c7',
    title: 'Next.js 14 & React - The Complete Guide',
    date: '12-09-2023',
  },
  {
    id: 'UC-6fcffad9-01c1-4f8c-805a-3dfdc459470e',
    title: 'Become a WordPress Developer: Unlocking Power With Code',
    date: '12-25-2020',
  },
  {
    id: 'UC-0e2769ee-8580-4a69-8f83-b141381249b7',
    title: 'Learn JavaScript: Full-Stack from Scratch',
    date: '12-30-2020',
  },
  {
    id: 'UC-047e3797-bf91-47b2-811c-0fba13334395',
    title: 'Clean Code',
    date: '04-20-2023',
  },
  {
    id: 'UC-a8a0b45f-fb96-4a91-918d-bb7046643c8f',
    title: 'Meteor and React for Realtime Apps',
    date: '04-01-2023',
  },
  {
    id: 'UC-fa0803ef-526a-4b26-bb0f-5e7631789b96',
    title: 'MongoDB - The Complete Developers Guide 2024',
    date: '08-02-2022',
  },
  {
    id: 'UC-c1f4bf6a-54e8-4dd8-b5d5-d01f6d61ef08',
    title: 'Learn to Code with Ruby',
    date: '11-30-2020',
  },
  {
    id: 'UC-AB1SAQND',
    title: 'Complete Linux Training Course to Get Your Dream IT Job 2024',
    date: '04-17-2019',
  },
];
