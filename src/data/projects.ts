export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  tech: string[]
  year: string
  role: string
  links: { label: string; href: string }[]
  note?: string
  image?: string
  featured?: boolean
  accent?: 'warm' | 'cool' | 'green' | 'rose'
}

export const projects: Project[] = [
  {
    slug: 'barbershop',
    name: 'All or Nothing Barbershop',
    tagline: 'Booking site + admin app for a real shop, end to end',
    description:
      "Full site for an Australian barbershop — services, a photo/reel gallery, hours and location, and a booking-request flow that replaces phone calls. Requests land in a Basic-Auth admin dashboard where the barber can confirm or cancel with one click, plus a companion mobile app (Expo) so he can check upcoming appointments from his phone without opening a laptop.",
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite', 'Zod', 'Expo / React Native'],
    year: '2026',
    role: 'Solo — design, build, client work',
    links: [],
    note: 'Private client repo',
    image: 'barbershop',
    featured: true,
    accent: 'warm',
  },
  {
    slug: 'kutubcart',
    name: 'KutubCart',
    tagline: 'Arabic / English bookstore with cash-on-delivery checkout',
    description:
      'A small bookstore storefront — catalog with covers, ratings and stock status, filtering by language and category, a persistent cart, and checkout that collects delivery details instead of a payment form. A password-protected admin panel lists every order with revenue stats, and can email a notification the moment one comes in.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Nodemailer'],
    year: '2026',
    role: 'Solo project',
    links: [],
    note: 'Private repo',
    accent: 'rose',
  },
  {
    slug: 'beyti',
    name: 'Beyti',
    tagline: 'Rental-housing listings for displaced families in Lebanon',
    description:
      'A web app and a matching React Native mobile app that let people post and browse rental homes during the crisis in Lebanon — a small, practical response to a real housing shortage, built as both a website and a phone app so it reaches as many people as possible.',
    tech: ['React', 'React Native', 'JavaScript'],
    year: '2024',
    role: 'Solo — web + mobile',
    links: [
      { label: 'Web repo', href: 'https://github.com/ahmed-alarab/web-beyti' },
      { label: 'Mobile repo', href: 'https://github.com/ahmed-alarab/mobile-beyti' },
    ],
    accent: 'green',
  },
  {
    slug: 'smart-meeting-room',
    name: 'Smart Meeting Room',
    tagline: 'Role-based room booking, built for a systems course',
    description:
      'A Laravel app for booking meeting rooms with three roles — admin, employee, guest — each with a different view. Employees book and reschedule rooms and log attendees for a meeting; admins manage the room inventory. Built for the "Integrated Digital Systems" course.',
    tech: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Tailwind CSS'],
    year: '2025',
    role: 'Solo project',
    links: [{ label: 'View code', href: 'https://github.com/ahmed-alarab/SMR' }],
    accent: 'cool',
  },
  {
    slug: 'sudoku',
    name: 'Sudoku Vision Solver',
    tagline: 'Point a photo at a sudoku, watch it read the grid',
    description:
      "A playable sudoku board with live validity checking, plus a computer-vision path: OpenCV.js locates the 9×9 grid in a photo, Tesseract OCR reads the printed digits, and the board fills itself in — all running client-side in the browser, no server round-trip.",
    tech: ['React', 'TypeScript', 'OpenCV.js', 'Tesseract.js'],
    year: '2025',
    role: 'Solo project',
    links: [{ label: 'View code', href: 'https://github.com/ahmed-alarab/sudoku' }],
    accent: 'cool',
  },
  {
    slug: 'memory-match',
    name: 'Memory Match',
    tagline: 'A clean, small memory-card game',
    description:
      'A memory-matching card game — kept intentionally small: flip logic, match detection, and win state, done cleanly in typed React rather than left tangled.',
    tech: ['React', 'TypeScript'],
    year: '2025',
    role: 'Solo project',
    links: [{ label: 'View code', href: 'https://github.com/ahmed-alarab/memory-card-game' }],
    accent: 'rose',
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'C', 'C++', 'Java'] },
  {
    label: 'Frontend',
    items: ['React', 'React Native / Expo', 'Next.js', 'Tailwind CSS', 'HTML & CSS'],
  },
  { label: 'Backend & data', items: ['Laravel', 'Prisma', 'MySQL', 'MongoDB', 'PL/SQL', 'Zod'],
  },
  { label: 'Tools', items: ['Git & GitHub', 'Vite', 'Vercel / Netlify', 'JavaFX'] },
]
