/**
 * Regenerates the résumé PDF served by the portfolio from src/content/resumeData.js.
 * Run with: node scripts/generate-resume.js
 */
const React = require('react');
const { Document, Page, Text, Link, View, StyleSheet, renderToFile } = require('@react-pdf/renderer');
const data = require('../src/content/resumeData');

const e = React.createElement;
const { profile } = data;

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingHorizontal: 38,
    paddingBottom: 54,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.4,
    color: '#20303a',
    backgroundColor: '#ffffff',
  },
  header: {
    position: 'relative',
    marginHorizontal: -38,
    marginTop: -28,
    marginBottom: 22,
    paddingTop: 34,
    paddingBottom: 22,
    paddingHorizontal: 38,
    backgroundColor: '#17352d',
    borderBottomWidth: 4,
    borderBottomColor: '#b7df5b',
  },
  headerEyebrow: {
    marginBottom: 7,
    color: '#c8d5cf',
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.8,
  },
  name: { color: '#ffffff', fontSize: 27, fontFamily: 'Helvetica-Bold', letterSpacing: 0.3 },
  title: { fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: '#c7e779', marginTop: 5 },
  contact: { fontSize: 8, color: '#e0e8e3', marginTop: 12, lineHeight: 1.65 },
  section: { marginBottom: 15 },
  sectionTitle: {
    fontSize: 10.2,
    fontFamily: 'Helvetica-Bold',
    color: '#315b35',
    paddingBottom: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d7e2d0',
    letterSpacing: 1.1,
    minPresenceAhead: 56,
  },
  summaryCard: {
    padding: 11,
    borderLeftWidth: 3,
    borderLeftColor: '#83a947',
    backgroundColor: '#f3f6ef',
  },
  subTitle: { fontSize: 9.4, fontFamily: 'Helvetica-Bold', marginTop: 7, marginBottom: 3, color: '#1c3036' },
  body: { fontSize: 8.9, marginBottom: 4, textAlign: 'left', lineHeight: 1.4 },
  bullet: { fontSize: 8.7, marginBottom: 2.6, paddingLeft: 11, textIndent: -10, lineHeight: 1.36 },
  label: { fontFamily: 'Helvetica-Bold' },
  meta: { fontSize: 8.4, color: '#59706a', marginBottom: 5 },
  tech: { fontSize: 8.2, color: '#52675e', marginTop: 5, lineHeight: 1.45 },
  projectLinks: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 },
  link: { fontSize: 8.2, color: '#416a11', textDecoration: 'none', marginRight: 10 },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  role: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: '#1c3036', maxWidth: '63%' },
  period: { fontSize: 8.1, color: '#52675e', textAlign: 'right', maxWidth: '35%' },
  divider: { height: 0.7, backgroundColor: '#dce4df', marginVertical: 9 },
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 38,
    right: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: '#687a72',
    borderTopWidth: 0.6,
    borderTopColor: '#dce4df',
    paddingTop: 6,
  },
});

const section = (title, children, key) =>
  e(View, { key, style: styles.section }, e(Text, { style: styles.sectionTitle }, title), children);

const paragraphs = (items, prefix) =>
  items.map((item, i) => e(Text, { key: `${prefix}-${i}`, style: styles.body }, item));

const bullets = (items, prefix) =>
  items.map((item, i) => e(Text, { key: `${prefix}-${i}`, style: styles.bullet }, `- ${item}`));

const contactLine = [profile.location, ...profile.phones, profile.email].join('  |  ');
const linksLine = [profile.github, profile.portfolio].join('  |  ');

const document = e(
  Document,
  null,
  e(
    Page,
    { size: 'A4', style: styles.page },
    e(View, { style: styles.header },
      e(Text, { style: styles.headerEyebrow }, 'SOFTWARE DEVELOPER  /  PRETORIA, SOUTH AFRICA'),
      e(Text, { style: styles.name }, profile.name),
      e(Text, { style: styles.title }, profile.title),
      e(Text, { style: styles.contact }, contactLine, '\n', linksLine)),

    section('PROFILE', e(View, { style: styles.summaryCard }, paragraphs(data.summary, 'summary')), 'summary'),

    section(
      'CORE TECHNICAL SKILLS',
      data.technicalSkills.map((group) =>
        e(Text, { key: group.category, style: styles.body },
          e(Text, { style: styles.label }, `${group.category}: `), group.items.join(', '))
      ),
      'skills'
    ),

    section(
      'SOFT SKILLS',
      e(Text, { style: styles.body }, data.softSkills.map((skill) => skill.name).join(' · ')),
      'soft'
    ),

    section(
      'CERTIFICATIONS',
      data.certifications.map((cert) =>
        e(View, { key: cert.name, wrap: false, style: { marginBottom: 6 } },
          e(Text, { style: styles.subTitle }, cert.name, ` — ${cert.issuer}, ${cert.date}`),
          e(Text, { style: styles.body }, cert.detail))
      ),
      'certs'
    ),

    section(
      'PROFESSIONAL TRAINING',
      data.training.map((item) =>
        e(Text, { key: item.name, style: styles.bullet },
          `- ${item.name} — ${item.provider}, ${item.date}`)
      ),
      'training'
    ),

    section(
      'PROFESSIONAL EXPERIENCE',
      data.experience.map((job, index) =>
        e(View, { key: job.company, break: index === 1, wrap: false },
          e(View, { style: styles.jobHeader },
            e(Text, { style: styles.role }, `${job.role} — ${job.company}`),
            e(Text, { style: styles.period }, `${job.period} | ${job.location}`)),
          e(Text, { style: styles.meta }, `Project: ${job.project}`),
          e(Text, { style: styles.body }, job.overview),
          bullets(job.bullets.slice(0, 5), `b-${job.company}`),
          e(Text, { style: styles.tech },
            e(Text, { style: styles.label }, 'Technologies: '), job.tech.join(', ')),
          e(View, { style: styles.divider }))
      ),
      'experience'
    ),

    section(
      'PROJECTS',
      data.projects.map((project) =>
        e(View, { key: project.id, style: { marginBottom: 10 } },
          e(Text, { style: styles.subTitle }, `${project.name} — ${project.stack.join(', ')}`),
          e(View, { style: styles.projectLinks }, project.links.map((link) =>
            e(Link, { key: link.href, src: link.href, style: styles.link }, link.label)))
        )
      ),
      'projects'
    ),

    section(
      'EDUCATION',
      data.education.map((item) =>
        e(View, { key: item.qualification, style: { marginBottom: 6 } },
          e(Text, { style: styles.subTitle },
            `${item.qualification} — ${item.institution}, ${item.period}`),
          e(Text, { style: styles.body }, item.detail))
      ),
      'education'
    ),

    e(Text, { style: styles.body },
      'Open to software developer roles across Gauteng, including Pretoria and Johannesburg, and remote opportunities in South Africa.'),

    e(
      View,
      { style: styles.footer, fixed: true },
      e(Text, null, `${profile.name} | ${profile.title.split('|')[0].trim()}`),
      e(Text, null, `Page `, e(Text, { render: ({ pageNumber, totalPages }) => `${pageNumber} of ${totalPages}` }))
    )
  )
);

renderToFile(document, 'src/Resume_Current.pdf')
  .then(() => console.log('Generated src/Resume_Current.pdf'))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
