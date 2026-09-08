export type Role = {
  title: string
  org?: string
  period: string
  summary: string
  tech: string[]
}

export const roles: Role[] = [
  {
    title: 'Coding & Robotics Instructor',
    org: 'Part-time',
    period: 'Feb 2026 — Present',
    summary:
      'Teaching coding and robotics to students aged 5–17, pitching each lesson to the age in the room — block-based programming and app building for the younger ones, real HTML, CSS and JavaScript for the older ones. Less about syntax than about problem-solving and logical thinking.',
    tech: ['Scratch / ScratchJr', 'MIT App Inventor', 'HTML, CSS & JS', 'Bitsbox', 'mBot / Python'],
  },
  {
    title: 'Power Platform Developer Intern',
    org: 'VN3XT Technologies',
    period: 'Dec 2025 — Feb 2026',
    summary:
      'A three-month internship across Microsoft’s Power Platform. Designed and built a model-driven CRM application — a simplified version of a full CRM — with authentication and authorization handling secure, role-based access to records.',
    tech: ['Power Apps', 'Power Pages', 'Power BI', 'Copilot Studio', 'Dataverse'],
  },
  {
    title: 'Full-Stack Web Developer Intern',
    org: 'Integrated Digital Systems (IDS)',
    period: 'Jul 2025 — Sep 2025',
    summary:
      'Took full ownership of a Smart Meeting Room web app over two months — system design through implementation. Secure authentication, several user roles, and a distinct set of features tailored to each one.',
    tech: ['Laravel', 'Vue.js', 'PHP'],
  },
]

export const education: { title: string; org: string; period: string }[] = [
  {
    title: 'BS, Computer Science',
    org: 'Antonine University, Baabda',
    period: 'Nov 2022 — Apr 2026',
  },
  {
    title: 'Core Curriculum',
    org: '42 Beirut',
    period: 'Oct 2025 — Present',
  },
  {
    title: 'Piscine',
    org: '42 Beirut',
    period: 'Jul — Aug 2025',
  },
]
