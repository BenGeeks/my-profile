import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import { IoMdPin } from 'react-icons/io';
import { AiOutlineSkype } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
