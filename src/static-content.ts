import { formatMonthYear } from './lib/time';
import type { CardText } from './types/card';
import type { Experience } from './types/experience';

const experiences = [
  {
    title: 'Frontend Engineer',
    name: 'AzeriMed',
    companyLogo: '/logos/aptekonline.png',
    startDate: formatMonthYear(new Date('2024-02-01')),
    endDate: undefined,
    description: `Independently built Vue SPA applications using Vite, including a server-side rendered (SSR) Nuxt.js application.`,
    children: [
      {
        title: 'Frontend Developer Intern',
        name: 'AzeriMed',
        startDate: formatMonthYear(new Date('2023-10-01')),
        endDate: formatMonthYear(new Date('2024-02-01')),
        description: `Maintained and optimized critical legacy frontend applications (AngularJS and jQuery), with key
        refactoring efforts on e-commerce basket functionality.`,
      },
    ],
  },
] satisfies Experience[];

const educations = [
  {
    title: `Bachelor's degree in Information Security`,
    name: 'ASOIU',
    startDate: '2022',
    endDate: '2026',
    description:
      'Program curriculum included cybersecurity fundamentals, network and system security, cryptography, and risk management principles.',
  },
] satisfies CardText[];

const certifications = [
  {
    title: 'Front End Web Development',
    name: 'Tech Academy',
    startDate: formatMonthYear(new Date('2023-03-30')),
    endDate: formatMonthYear(new Date('2023-12-11')),
    description:
      'Completed a comprehensive 112-hour Front End Web Development program covering HTML, CSS, JavaScript, and modern frontend fundamentals. Achieved an overall score of 97.3/100 with an Excellence certificate, including a full final project, weekly technical tasks, and a technical interview.',
  },
] satisfies CardText[];

const languages: { name: string; level: string }[] = [
  {
    name: 'Azerbaijani',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'Fluent',
  },
  {
    name: 'Russian',
    level: 'Fluent',
  },
];

const contacts: { name: string; value: string; link: string }[] = [
  {
    name: 'Email',
    value: 'dmirciyevfuad@gmail.com',
    link: 'mailto:dmirciyevfuad@gmail.com',
  },
  {
    name: 'Linkedin',
    value: '/in/fuaddm/',
    link: 'https://www.linkedin.com/in/fuaddm/',
  },
];

export const content = {
  location: 'Azerbaijan, Baku',
  fullName: 'Fuad Damirchiyev',
  currentPosition: 'Frontend Developer at AzeriMed',
  aboutTitle: 'About',
  aboutDescription: `I’m a Frontend Engineer focused on building scalable, maintainable, and pixel-perfect interfaces, with strong attention to detail and clean architecture. I’m also interested in functional programming and enjoy applying its principles.`,
  experienceTitle: 'Experience',

  experiences,

  educationTitle: 'Education',
  educations,

  certificationsTitle: 'Certifications',
  certifications,

  languagesTitle: 'Languages',
  languages,

  contactsTitle: 'Contacts',
  contacts,
};
