import {AcademicCapIcon, BuildingOffice2Icon, CalendarIcon, MapIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import caroImage from '../images/portfolio/caro.webp';
import myDojoImage from '../images/portfolio/mydojo.webp';
import partsTrackerImage from '../images/portfolio/parts-tracker.webp';
import portlandOregonTrailImage from '../images/portfolio/portland-oregon-trail.webp';
import raccoopackImage from '../images/portfolio/raccoopack.webp';
import todoItImage from '../images/portfolio/todoit.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Maxwell Ahn`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Calgary</strong>, Alberta based{' '}
        <strong className="text-stone-100">Full Stack Developer</strong> previously at{' '}
        <strong className="text-stone-100">Raccoopack Media</strong> helping to build web and mobile apps for a wide
        range of clients.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time, you can find me trying out <strong className="text-stone-100">viral cooking recipes</strong>,
        keeping up my <strong className="text-stone-100">running streak</strong>, or{' '}
        <strong className="text-stone-100">working</strong> on side projects.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I've worked with React, Typescript, Expo, `,
  aboutItems: [
    {label: 'Location', text: 'Calgary, AB', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of British Columbia', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Raccoopack Media', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Korean',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Just Todo It',
    description: 'A mobile app to combat planning fallacy. ',
    url: 'https://github.com/maxahn/just-todo-it',
    image: todoItImage,
  },
  {
    title: 'Customer and Staff Portal for Order Management',
    description:
      'A web app to manage complicated form submission and integrate it with the existing client database and unique infrastructure.',
    url: 'https://raccoopack.media/client-and-staff-portal-for-order-management',
    image: caroImage,
  },
  {
    title: 'My Dojo',
    description:
      'An app that instructors use to schedule classes, take attendance, track belt progress.\n A companion parent app allows them to assign Challenges (tasks) to kids for digital bonuses for the companion game.',
    url: 'https://raccoopack.media/our-works/my-dojo-world',
    image: myDojoImage,
  },
  {
    title: 'Raccoopack Media Website',
    description: 'Raccoopack Media site built with Nextjs and Strapi, a headless CMS.',
    url: 'https://raccoopack.media/',
    image: raccoopackImage,
  },
  {
    title: 'Parts Tracker',
    description:
      'Tracks the movement of parts through a manufactoring factory. Employees can scan a location QR code and add the the codes for the parts they are dropping off.',
    url: 'https://raccoopack.media/our-works/speeding-up-production-using-a-web-app',
    image: partsTrackerImage,
  },
  {
    title: 'Portland Oregon Trail game',
    description: 'Oregon Trail parody game for ComedyHacks Vancouver 2016. Javascript, HTML, CSS',
    url: 'https://pot.robertdall.com/',
    image: portlandOregonTrailImage,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'I am always looking for new opportunities to learn and grow. If you have any questions, please feel free to reach out.',
  items: [
    {
      type: ContactType.Email,
      text: 'ahnmaxwell@gmail.com',
      href: 'mailto:ahnmaxwell@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Calgary AB, Canada',
      href: 'https://maps.app.goo.gl/QbUffoPEHffTi8Vc6',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'maxahn',
      href: 'https://github.com/maxahn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/maxahn'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/maxahn/'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
