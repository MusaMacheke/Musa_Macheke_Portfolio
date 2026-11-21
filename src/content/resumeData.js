/**
 * Single source of truth for Musa Macheke's résumé and website copy.
 *
 * CommonJS on purpose: the browser bundle imports it through webpack and the
 * PDF generator requires it directly from Node, so the two never drift.
 *
 * Only publicly shareable certification details are stored and rendered.
 */

const profile = {
  name: 'Musa Macheke',
  title: 'Software Developer | Mobile · Full-Stack · Java · Cloud',
  location: 'Pretoria, South Africa',
  phones: ['+27 64 066 8708', '+27 81 606 3417'],
  phoneHrefs: ['tel:+27640668708', 'tel:+27816063417'],
  email: 'musamacheke.01@gmail.com',
  github: 'https://github.com/MusaMacheke',
  portfolio: 'https://musa-macheke-portfolio.onrender.com',
};

const summary = [
  'Software Developer based in Pretoria with 3+ years of professional experience across mobile, full-stack and cloud-adjacent engineering. I build cross-platform products with Flutter and React Native, back them with Node.js, Express.js, ASP.NET Core and CodeIgniter services, and model their data in MySQL, SQLite, MariaDB and MongoDB.',
  'I am an Oracle Certified Professional: Java SE 17 Developer and a MongoDB Certified Associate Developer, with Microsoft Azure Fundamentals (AZ-900), GitHub Foundations, Meta React Native, Professional Scrum Master I and LinkedIn Learning Azure AZ-204 certification-prep credentials behind me. Employer-funded professional training in mobile architecture, API integration, Node.js server-side development and relational database management complements those certifications with hands-on practice.',
  'Across FamilyXchange and HBROS Mobile Landlord I have owned work from schema design and REST contracts through to typed mobile clients and published releases, solving problems that only surface when a real device, a flaky connection and a relational database meet. I care about typed interfaces, maintainable architecture and clear collaboration — PSM I training and daily sprint practice shape how I turn ambiguous requirements into shipped increments. I am looking for a software developer role where mobile, backend and Java/cloud engineering overlap, in Gauteng or remote within South Africa.',
];

const certifications = [
  {
    name: 'MongoDB Certified Associate Developer',
    issuer: 'MongoDB',
    date: 'May 2025',
    tag: 'Databases',
    detail: 'Certified associate-level developer across MongoDB document modeling, querying and aggregation.',
  },
  {
    name: 'Microsoft Azure Developer Associate (AZ-204) Cert Prep by Microsoft Press',
    issuer: 'LinkedIn Learning',
    date: 'December 2024',
    tag: 'Cloud',
    detail: 'Course completed 28 December 2024 · 9 hours 18 minutes · Top skills: Microsoft Azure. Certification preparation course, not the AZ-204 certification.',
  },
  {
    name: 'Meta React Native Course Certificate',
    issuer: 'Meta',
    date: 'November 2024',
    tag: 'Mobile',
    detail: 'React Native development training covering component architecture and cross-platform mobile delivery.',
  },
  {
    name: 'Oracle Certified Professional: Java SE 17 Developer',
    issuer: 'Oracle',
    date: 'August 2024',
    tag: 'Java',
    detail: 'Professional-level certification for Java SE 17 application development.',
  },
  {
    name: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    date: 'August 2024',
    tag: 'Tooling',
    detail: 'Foundational certification in Git and GitHub workflows, collaboration and repository management.',
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: 'September 2023',
    tag: 'Delivery',
    detail: 'Scrum framework certification covering accountabilities, events, artifacts and empirical process control.',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'September 2022',
    tag: 'Cloud',
    detail: 'Fundamental certification in cloud concepts, Azure services, workloads, security and pricing.',
  },
];

const training = [
  {
    name: 'API Integration & Systems Interoperability',
    provider: 'HBROS Meter Solutions',
    date: 'December 2025',
    detail: 'Applied integration patterns and system interoperability concepts to production API work.',
  },
  {
    name: 'React Native with TypeScript Mobile Architecture',
    provider: 'HBROS Meter Solutions',
    date: 'June 2025',
    detail: 'Type-safe mobile architecture, component boundaries and structured client data layers.',
  },
  {
    name: 'Node.js Server-Side Development',
    provider: 'Apptechnics Mobile and Web Solutions',
    date: 'June 2024',
    detail: 'Server-side JavaScript, REST service design and integration with mobile clients.',
  },
  {
    name: 'MySQL Relational Database Management',
    provider: 'Apptechnics Mobile and Web Solutions',
    date: 'December 2023',
    detail: 'Relational design, schema management and query work in MySQL.',
  },
  {
    name: 'Flutter & Dart Mobile Application Development',
    provider: 'Apptechnics Mobile and Web Solutions',
    date: 'June 2023',
    detail: 'Cross-platform UI development, widget composition and Dart fundamentals.',
  },
];

const technicalSkills = [
  {
    category: 'Languages',
    items: ['Java (SE 17)', 'C#', 'Dart', 'TypeScript', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'React Native', 'Dart', 'Android SDK', 'iOS', 'Expo', 'Redux', 'Android Studio'],
  },
  {
    category: 'Frontend / Web',
    items: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Web3'],
  },
  {
    category: 'Backend / APIs',
    items: ['Node.js', 'Express.js', 'ASP.NET Core (.NET Core)', 'CodeIgniter', 'REST API design', 'API integration', 'Server-side development'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQLite', 'MariaDB', 'MongoDB', 'Firebase', 'Schema design', 'Query optimisation'],
  },
  {
    category: 'Tools / Cloud',
    items: ['Microsoft Azure (AZ-900)', 'Google Cloud', 'Git', 'GitHub', 'npm', 'Postman', 'Visual Studio', 'VS Code', 'Gradle', 'Jest', 'FileZilla'],
  },
  {
    category: 'Practices',
    items: ['Agile / Scrum (PSM I)', 'State management', 'Testing with Jest', 'Debugging and root-cause analysis', 'Code review', 'Requirements analysis', 'Solution design'],
  },
];

const softSkills = [
  { name: 'Communication', detail: 'Explaining technical trade-offs clearly to technical and non-technical stakeholders.' },
  { name: 'Collaboration', detail: 'Working across design, backend and product contributors to ship coherent features.' },
  { name: 'Teamwork', detail: 'Contributing reliably in small teams and shared-code environments.' },
  { name: 'Problem-solving', detail: 'Tracing failures across device, API and database layers to their real cause.' },
  { name: 'Adaptability', detail: 'Switching stacks, platforms and domains without losing delivery momentum.' },
  { name: 'Time management', detail: 'Prioritising scoped increments across concurrent sprint commitments.' },
  { name: 'Attention to detail', detail: 'Catching type, schema and contract mismatches before they reach production.' },
  { name: 'Critical thinking', detail: 'Questioning requirements and choosing tools for the actual constraint.' },
  { name: 'Ownership', detail: 'Carrying features from design through implementation, release and feedback.' },
  { name: 'Continuous learning', detail: 'Turning certifications and training into applied, shipped practice.' },
  { name: 'Facilitation', detail: 'Running focused refinement, planning and review sessions as a PSM I practitioner.' },
  { name: 'Stakeholder empathy', detail: 'Translating business needs into software decisions people can validate.' },
];

const experience = [
  {
    role: 'Junior Front-End Developer',
    company: 'HBROS Meter Solutions',
    companyUrl: 'https://hbros.co.za/',
    period: 'January 2025 – October 2026',
    location: 'Pretoria, South Africa',
    project: 'HBROS Mobile Landlord',
    overview:
      'Owned front-end delivery for HBROS Mobile Landlord, a production React Native application built for HBROS — a utility metering provider with over 16 years of experience in smart prepaid electricity metering for property management. The app streamlines operations for landlords and supports reliable power management for tenants. Worked across the typed client layer, API integration and MySQL data access, turning stakeholder requirements into shipped increments through Agile sprints.',
    bullets: [
      'Designed and built the React Native client for HBROS Mobile Landlord, translating MySQL-backed property and maintenance records into typed, cross-platform screens that behave consistently on iOS and Android.',
      'Translated the metering domain into field-ready screens: landlord cost-recovery views, token-access guidance, reimbursement status, installation records and issue-ticket logging.',
      'Introduced TypeScript interfaces and typed API contracts across the client, making the shape of every request and response explicit and removing a class of runtime errors that had previously surfaced only on-device.',
      'Reworked the MySQL queries behind the busiest landlord screens and validated them in MySQL Workbench, cutting unnecessary data transfer and keeping list views responsive under realistic data volumes.',
      'Implemented centralised error handling, loading states and readable offline feedback so unreliable field connectivity produced clear information instead of silent failures.',
      'Partnered with stakeholders in PSM I-led sprint ceremonies — backlog refinement, planning, reviews and retrospectives — converting vague requests into clear, testable increments.',
      'Applied the React Native with TypeScript Mobile Architecture and API Integration & Systems Interoperability training on the job, feeding what I learned back into component structure and integration patterns.',
      'Supported the published Google Play release, coordinating builds and release notes and responding to field feedback with targeted, scoped fixes.',
    ],
    tech: ['React Native', 'TypeScript', 'MySQL', 'MySQL Workbench', 'Git', 'GitHub', 'Postman', 'Android Studio', 'VS Code', 'Agile / Scrum'],
  },
  {
    role: 'Intern Software Engineer',
    company: 'Apptechnics Mobile and Web Solutions',
    companyUrl: 'https://apptechnix.co.za/',
    period: 'January 2023 – December 2024',
    location: 'Pretoria, South Africa',
    project: 'FamilyXchange',
    overview:
      'Contributed to FamilyXchange, a dual-purpose family platform that manages household routines and encourages family connection under one account. It pairs “In the House” chore tracking with “Round the Table” app-assisted board gaming, and was built as a Flutter mobile app with a Node.js service layer. Worked across the client, the API and the database boundary while learning production engineering practices in a small, collaborative team.',
    bullets: [
      'Built Flutter screens and reusable Dart widgets for FamilyXchange, delivering a consistent experience on iOS and Android from a single codebase.',
      'Modelled the dual-purpose product in the client and API: age-based chore checklists, point balances and parent-approved rewards alongside age-tiered game content for the shared-screen board game.',
      'Connected on-device SQLite storage with MySQL records, designing the synchronisation path so families could keep working when connectivity dropped and reconcile changes when it returned.',
      'Implemented Node.js and Express.js REST endpoints that exposed MySQL data to the mobile client, shaping JSON contracts that mapped cleanly to Dart models.',
      'Validated endpoints with Postman and traced defects across the device → API → database path, fixing issues at the layer where they originated rather than patching symptoms.',
      'Used MySQL Workbench to design and inspect schemas and queries, applying the MySQL Relational Database Management training to keep relations and indexes coherent as features grew.',
      'Applied Flutter & Dart Mobile Application Development and Node.js Server-Side Development training directly to shipped features.',
      'Participated in code reviews and daily collaboration with senior developers, turning feedback into cleaner component boundaries and more predictable state handling.',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'SQLite', 'MySQL Workbench', 'TypeScript', 'FileZilla', 'Git', 'GitHub', 'Postman'],
  },
];

const projects = [
  {
    id: 'familyxchange',
    index: '01',
    name: 'FamilyXchange',
    stack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'SQLite', 'TypeScript', 'MySQL Workbench', 'FileZilla'],
    overview:
      'FamilyXchange is a dual-purpose family platform built during my internship at Apptechnics. One account brings two products together: “In the House” for daily routines and responsibilities, and “Round the Table” for app-assisted family game nights. Children work through age-appropriate chore checklists, earn points and redeem parent-approved rewards, while the whole family can sit around a real board game that adapts to every player from age 3 to 99. The Flutter client works with a Node.js service layer, with essential data on-device and a central MySQL store.',
    features: [
      {
        name: 'Family Xchange Chores — “In the House”',
        detail:
          'A routine and responsibility management system where children receive age-appropriate checklists for morning, afterschool and bedtime tasks. Completed chores earn points that can be redeemed for parent-approved rewards. Parents monitor progress from their phones while tracking long-term goals and challenges.',
      },
      {
        name: 'Family Xchange Games — “Round the Table”',
        detail:
          'An app-assisted physical board game designed for players aged 3 to 99 to play together. Families use a real board, physical pieces and one shared device screen; the app tailors questions and challenges to each player’s age and uses three tiers of cards to vary the depth of conversation.',
      },
    ],
    challenge:
      'Households coordinate two very different kinds of time: the everyday logistics of who does what, and the rarer moments when everyone is actually together. Existing chore apps treated routines as isolated to-dos, while games assumed everyone could read at the same level. The brief was one family account that could carry both — structured morning, afterschool and bedtime checklists with rewards parents approve, plus a shared-screen board game that tailors questions and challenges to each player’s age and uses three tiers of cards to control how deep the conversation goes. It also had to keep working when the home network did not.',
    architecture:
      'Flutter and Dart let one codebase serve iOS and Android with a consistent UI and fast iteration, which mattered for a small team shipping a product people would use daily. Node.js and Express.js handle the REST layer because their async model fits I/O-heavy mobile traffic and their JSON contracts map cleanly to Dart models. MySQL holds the relational core — members, households, chores, points, rewards and game sessions — where referential integrity matters. SQLite keeps essential records on-device so the app remains useful offline and can reconcile local edits with the server later. MySQL Workbench was used to design and inspect the schema; FileZilla supported deployment of the web-facing side of the project.',
    contributions: [
      'Built the Flutter client and reusable Dart widgets, owning the implementation from layout and state management through to API consumption.',
      'Modelled the two product domains inside the shared account: morning, afterschool and bedtime checklists, point balances and parent-approved rewards, plus age-tiered game content driven by each player’s age.',
      'Designed the SQLite-to-MySQL boundary: which records belong on-device, how local edits are queued, and how they reconcile with the central store when connectivity returns.',
      'Implemented Node.js and Express.js REST endpoints, defining request and response contracts that mapped cleanly to typed Dart models.',
      'Validated endpoints with Postman and traced defects across the device → API → database path, fixing the root cause instead of masking symptoms.',
      'Used MySQL Workbench to design tables, relations and queries as the data model grew with new features.',
      'Supported deployment and asset updates through FileZilla, and collaborated in code reviews that improved component boundaries and state handling.',
    ],
    impact:
      'Delivered one cross-platform product where routines and connection live under the same family account. Parents can monitor progress and long-term goals from their phones, children can work through checklists and see the rewards they are earning, and the family can move from chores to a physical board game without switching products. The game supports players aged 3 to 99 by adapting questions to each player’s age and offering three tiers of cards for conversation depth. Local persistence and remote data work together, so the app keeps working between syncs; the single Flutter codebase meant improvements reached both platforms at once.',
    lesson: 'Consistency between local and remote state is a design problem before it is a sync problem.',
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/MusaMacheke/FX' },
      { label: 'View project', href: 'https://familyxchange.com/wp/' },
    ],
  },
  {
    id: 'hbros-mobile-landlord',
    index: '02',
    name: 'HBROS Mobile Landlord',
    stack: ['React Native', 'TypeScript', 'MySQL', 'MySQL Workbench', 'Postman', 'Google Play'],
    overview:
      'HBROS is a utility metering provider with over 16 years of experience in smart prepaid electricity metering for property management. HBROS Mobile Landlord is the published React Native app I worked on at HBROS Meter Solutions: it streamlines operations for landlords and supports reliable power management for tenants. I owned the typed mobile client and its data integration layer.',
    features: [
      {
        name: 'Landlord & Tenant Solutions',
        detail:
          'Helps landlords recover electricity costs and manage property usage efficiently, while tenants get 24/7 access to prepaid electricity tokens through outlets and online platforms.',
      },
      {
        name: 'Payment Management & Support',
        detail:
          'Includes automated reimbursement systems for landlords, professional meter installations, issue-ticket logging and dedicated support assistance.',
      },
    ],
    challenge:
      'Landlords need to recover electricity costs, manage property usage and keep reimbursements flowing without chasing paperwork, while tenants expect 24/7 access to prepaid electricity tokens through outlets and online platforms. Field staff need current records while moving between sites — not after they get back to a desk. Manual, fragmented reporting slowed decisions and left records out of step with reality, and mobile connections on site are unreliable, so a client that assumed a perfect network would fail exactly where it was needed most. The product had to present relational metering and property data clearly, support installation and ticket workflows, survive intermittent connectivity and stay maintainable as requirements changed sprint by sprint.',
    architecture:
      'React Native extended an existing JavaScript skill set into a cross-platform field app without the cost of maintaining two native codebases. TypeScript was the non-negotiable layer: strict interfaces and typed API contracts catch structural bugs before they reach a device in someone’s pocket. MySQL backs the operational data — property records, meter information, reimbursement and ticket data — where transactions and relational queries protect integrity; MySQL Workbench was used to inspect and tune the queries behind the busiest screens. Postman supported contract validation during API integration, and the result ships as a Google Play release.',
    contributions: [
      'Owned the typed mobile client and its API integration layer across the core landlord screens, from screen structure through to data binding.',
      'Translated metering-domain workflows into field-ready screens: landlord cost-recovery views, token-access guidance for tenants, reimbursement status, installation records and issue-ticket logging.',
      'Introduced strict TypeScript interfaces and centralised error handling, removing a class of runtime surprises and making failures legible when they did occur.',
      'Optimised the MySQL queries behind high-traffic screens and validated them against realistic data volumes in MySQL Workbench.',
      'Designed loading, empty and offline states so field staff always knew whether they were looking at current data or a cached view.',
      'Translated stakeholder requirements into shipped increments using PSM I practices — refinement, planning, review and retrospective — keeping scope explicit.',
      'Supported the published Google Play release, coordinating builds, release notes and feedback-driven fixes.',
    ],
    impact:
      'Shipped a published Google Play app that supports a utility metering business with more than 16 years of experience. Landlords can recover electricity costs, manage usage and follow automated reimbursements; tenants retain 24/7 access to prepaid tokens through the provider’s outlets and online platforms; field staff get professional installation, ticket logging and dedicated support workflows in their pocket. Typed contracts and centralised error handling made changes safer to ship, and the query work kept the busiest screens responsive under realistic data volumes. Field feedback could be turned into scoped fixes rather than broad rewrites.',
    lesson: 'A typed client is not extra ceremony — it is how a mobile team keeps moving fast without breaking what already works.',
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/MusaMacheke/HBROS-landlord-app' },
      { label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.musa_hbros09.HBROSmobile&hl=en' },
    ],
  },
];

const education = [
  {
    qualification: 'Diploma in Systems Development',
    institution: 'Boston City Campus',
    period: 'February 2020 – December 2022',
    detail: 'Formal training in systems development — analysis, design, programming and databases — which became the foundation for my move into professional mobile and full-stack engineering.',
  },
  {
    qualification: 'National Senior Certificate',
    institution: 'Lekamoso Secondary School',
    period: 'January 2015 – December 2019',
    detail: 'Completed secondary education before specialising in software development.',
  },
];

const hero = {
  kicker: 'Pretoria-based · Mobile, full-stack and Java engineering',
  headline: ['Mobile and full-stack systems,', 'engineered for production.'],
  subheadline:
    "I'm Musa Macheke, a Java SE 17–certified developer with 3+ years building Flutter and React Native apps backed by Node.js, Express.js, .NET Core and MySQL/MongoDB. From FamilyXchange's dual-purpose routines-and-games platform to a typed React Native client for a 16-year smart prepaid metering provider, I own problems end to end — and I bring MongoDB, Azure AZ-900, GitHub Foundations and PSM I credentials to every team I join.",
  primaryCta: { label: 'Explore My Case Studies', href: '/Project' },
  secondaryCta: { label: 'Download Résumé', href: '/Resume' },
  note: 'Available for software developer roles across Gauteng and remote teams in South Africa',
};

const contact = {
  closing:
    "If you're building a team that cares about clean architecture, typed interfaces and software that behaves the same way at 2 a.m. as it does in a demo, I'd like to hear what you're working on. I'm open to roles where mobile, backend and Java/cloud engineering overlap, and I'm happy to walk through either project in detail.",
  cta: "Let's talk about what you're building",
};

const projectsIntro = {
  kicker: 'Selected work · 02 detailed case studies',
  heading: ['Products built for', 'people.'],
  lede: 'Two mobile product projects — a dual-purpose family platform for routines and board-game nights, and a field app for a utility metering provider with over 16 years of experience — with the problem, the architecture, my contribution and what each one taught me.',
};

const aboutHeading = ['Software development with', 'purpose.'];

const aboutParagraphs = [
  'I started with a Diploma in Systems Development — and a habit of taking things apart to understand how they work. That curiosity turned into three years of building mobile and full-stack systems that real people rely on: Flutter and React Native apps on the front end, Node.js, Express.js and .NET Core services behind them, and MySQL, SQLite, MariaDB and MongoDB underneath. Along the way I made a deliberate choice to certify what I know, earning Oracle Java SE 17, MongoDB, Azure AZ-900, GitHub Foundations, Meta React Native and PSM I credentials, plus a LinkedIn Learning Azure AZ-204 preparation course.',
  'My first professional role was at Apptechnics Mobile and Web Solutions, where I worked on FamilyXchange — a dual-purpose family platform with a Flutter client, a Node.js service layer and both SQLite and MySQL in play. One family account carries age-appropriate chore checklists that earn points for parent-approved rewards, and “Round the Table”, a physical board game whose questions adapt to players aged 3 to 99. That project taught me that keeping local and remote data consistent is a design decision, not a sync bug to patch later. At HBROS Meter Solutions I moved to React Native and TypeScript on HBROS Mobile Landlord, a published Google Play app for a utility metering provider with over 16 years of smart prepaid electricity experience. There, typed contracts and careful query design became the difference between a screen that works and one that fails exactly when connectivity drops.',
  'The work I enjoy most is the messy middle: an unclear requirement, a data model that does not fit, a failure that only appears on a real device. I like finding out why something breaks, then designing the simplest structure that makes it stop. Whether I am typing a React Native data layer, tuning a MySQL query, or shaping the REST contract between a mobile client and a backend, my approach stays the same: understand the actual problem, choose tools for the constraint in front of me, and ship something someone else can maintain.',
  'I also care about how software gets built, not just what gets built. PSM I training and daily sprint practice — refinement, planning, reviews and retrospectives — shape how I turn vague requests into clear, testable increments. Communication, adaptability, ownership and attention to detail are not decorative words on this page; they are what let me move between stacks, platforms and teams without losing sight of the person on the other side of the screen.',
];

function buildResumeText() {
  const line = (label, value) => `${label}: ${value}`;

  return [
    profile.name.toUpperCase(),
    profile.title,
    [profile.location, ...profile.phones, profile.email].join(' | '),
    [profile.github, profile.portfolio].join(' | '),
    '',
    'PROFESSIONAL SUMMARY',
    ...summary,
    '',
    'CORE TECHNICAL SKILLS',
    ...technicalSkills.map((group) => line(group.category, group.items.join(', '))),
    '',
    'SOFT SKILLS',
    softSkills.map((skill) => `${skill.name} — ${skill.detail}`).join('\n'),
    '',
    'CERTIFICATIONS',
    ...certifications.map((cert) => `${cert.name} — ${cert.issuer}, ${cert.date}. ${cert.detail}`),
    '',
    'PROFESSIONAL TRAINING',
    ...training.map((item) => `${item.name} — ${item.provider}, ${item.date}. ${item.detail}`),
    '',
    'PROFESSIONAL EXPERIENCE',
    ...experience.flatMap((job) => [
      `${job.role} — ${job.company} | ${job.period} | ${job.location}`,
      `Project: ${job.project}`,
      job.overview,
      ...job.bullets.map((bullet) => `- ${bullet}`),
      `Technologies: ${job.tech.join(', ')}`,
      '',
    ]),
    'PROJECTS',
    ...projects.flatMap((project) => [
      `${project.name} — ${project.stack.join(', ')}`,
      project.overview,
      ...(project.features || []).map((feature) => `Feature: ${feature.name} — ${feature.detail}`),
      `Challenge: ${project.challenge}`,
      `Architecture: ${project.architecture}`,
      ...project.contributions.map((item) => `- ${item}`),
      `Impact: ${project.impact}`,
      `Lesson: ${project.lesson}`,
      `Links: ${project.links.map((link) => link.href).join(' | ')}`,
      '',
    ]),
    'EDUCATION',
    ...education.map((item) => `${item.qualification} — ${item.institution}, ${item.period}. ${item.detail}`),
    '',
    'Open to software developer roles across Gauteng, including Pretoria and Johannesburg, and remote opportunities in South Africa.',
  ].join('\n');
}

module.exports = {
  profile,
  summary,
  certifications,
  training,
  technicalSkills,
  softSkills,
  experience,
  projects,
  education,
  hero,
  contact,
  projectsIntro,
  aboutHeading,
  aboutParagraphs,
  buildResumeText,
};
