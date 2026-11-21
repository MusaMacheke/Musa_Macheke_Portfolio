import FX from '../images/FX.jpg';
import HBROS from '../images/HBROS.png';

const data = require('./resumeData');

export const profile = data.profile;
export const summary = data.summary;
export const certifications = data.certifications;
export const training = data.training;
export const technicalSkills = data.technicalSkills;
export const softSkills = data.softSkills;
export const experience = data.experience;
export const education = data.education;
export const hero = data.hero;
export const contact = data.contact;
export const projectsIntro = data.projectsIntro;
export const aboutHeading = data.aboutHeading;
export const aboutParagraphs = data.aboutParagraphs;
export const RESUME_TEXT = data.buildResumeText();

const imageByProject = {
  familyxchange: { image: FX, imageAlt: 'FamilyXchange mobile application screens' },
  'hbros-mobile-landlord': { image: HBROS, imageAlt: 'HBROS Mobile Landlord application interface' },
};

export const caseStudies = data.projects.map((project) => ({
  ...project,
  ...imageByProject[project.id],
}));

export const contactEmail = `mailto:${profile.email}?subject=${encodeURIComponent(
  'Software Development Opportunity'
)}&body=${encodeURIComponent(
  'Hello Musa,\n\nI reviewed your portfolio and would like to discuss a software development opportunity.\n\nRole / project details:\n\n\n\nThank you,\n[Your name]'
)}`;

// Icons rendered in the visual skill grid on the About page.
export const skillIcons = [
  'Java', 'Dotnet', 'Csharp', 'Flutter', 'Dart', 'React', 'Javascript', 'Typescript',
  'Node', 'Express', 'Codeigniter', 'MongoDb', 'MySQL', 'SQLite', 'MariaDB', 'Firebase',
  'AndroidSDK', 'IOS', 'Expo', 'Redux', 'Bootstrap', 'Tailwind', 'Html', 'Css',
  'Git', 'Github', 'Npm', 'Postman', 'Visualstudio', 'VSCode', 'AndroidStudio', 'Gradle',
  'Jest', 'Web3', 'GoogleCloud', 'Filezilla', 'Zoom', 'Zoho', 'Stackoverflow',
];

