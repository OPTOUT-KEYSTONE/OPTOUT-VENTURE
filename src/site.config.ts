// Site-wide content and navigation
export const SITE = {
  name: 'OPTOUT KEYSTONE',
  role: 'Product Studio & Technology Venture',
  email: 'info@aftermeet.io',
  location: 'Bangalore, India',
  tagline: 'We design and build products that hold up under real use.',
  description:
    'Optout Keystone — building thoughtful digital products out of Bangalore with an emphasis on speed, clarity, and real-world utility.',
  status: 'Currently building new products · open to new opportunities',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/expodiary/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
] as const;