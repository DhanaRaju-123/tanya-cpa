import {
  Calculator, FileText, ShieldCheck, Building2, GraduationCap, ClipboardCheck,
} from 'lucide-react'
import moneyExcel from '../images/billie-dollar-money-background.jpg';
import bank from '../images/bank.jpg';
import global from '../images/global.jpg';
import estimatedTaxes from '../images/estimatedtaxes.jpg';
import irsAudit from '../images/irsaudit.jpg';
import estatePlanning from '../images/estateplanning.jpg';
import tanya from '../images/tanya.jpg';
import Thomas from '../images/thomas.jpg';
import calculator from '../images/services/calculator.jpg';
import ii from '../images/services/i.jpg';
import tax from '../images/services/tax-payment-business.jpg';
import women from '../images/services/women-working-together.jpg';
import income from '../images/services/income-charts-graphs.jpg';
import advisory from '../images/services/advisory-training.jpg';


  

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Services', to: '/services' },
  { label: 'Our Team', to: '/our-team' },
  { label: 'Contact Us', to: '/contact' },
]

export const services = [
  {
    image: calculator,
    title: 'Tax Preparation',
    blurb: 'Our firm specializes in small business and individual tax preparation and planning.',
    body: [
      'Our firm specializes in small business and individual tax preparation and planning. We prepare all types of returns, 1040, 1065, 1120, 1120S as well as non-profit returns and gift tax returns.',
      "Do you need help determining what you can deduct and what you can't? We will discuss each expense category and explain the rules.",
      'Do you want to ensure you are paying the least amount that you owe legally? Give us a call!',
    ],
  },
  {
    image: ii,
    title: 'Tax Planning and Consultation',
    blurb: 'Are you new to self-employment and need a comprehensive plan regarding your tax compliance responsibilities? We can help!',
    body: [
      'Are you new to self-employment and need a comprehensive plan regarding your tax compliance responsibilities? We can help!',
      'We work with you throughout the year, not just at filing time, so there are no surprises come April.',
    ],
  },
  {
    image: tax,
    title: 'Tax Resolution',
    blurb: 'Opening a letter from the IRS sometimes invokes feelings of fear and anxiety. You can rest at ease when you partner with us.',
    body: [
      'Opening a letter from the IRS sometimes invokes feelings of fear and anxiety. You can rest at ease when you partner with us.',
      'With decades of experience inside the IRS, we know exactly how collections and audits work — and how to resolve them in your favor.',
    ],
  },
  {
    image: women,
    title: 'Business Establishment',
    blurb: "Did you start an LLC but don't really know what that means with respect to your taxes? We can help!",
    body: [
      "Did you start an LLC but don't really know what that means with respect to your taxes? We can help!",
      'We walk new business owners through entity structure, recordkeeping, and quarterly obligations from day one.',
    ],
  },
  {
    image: income,
    title: 'Guardianship of the Estate, Texas Probate Court',
    blurb: 'Tanya Brewer is certified as a Private Professional Guardian by the Judicial Branch Certification Commission.',
    body: [
      'Tanya Brewer is certified as a Private Professional Guardian by the Judicial Branch Certification Commission.',
      'She provides accountable, compassionate financial guardianship services under Texas Probate Court oversight.',
    ],
  },
  {
    image: advisory,
    title: 'Advisory and Training',
    blurb: 'Tanya Brewer has been a guest speaker at various businesses and networking groups, providing guidance.',
    body: [
      'Tanya Brewer has been a guest speaker at various businesses and networking groups, providing guidance.',
      'Ask about bringing tax and financial literacy training to your team or organization.',
    ],
  },
]




export const blogPosts = [
  {
    title: 'Money Excel',
    tag: 'MONEY EXCEL',
    image: moneyExcel,
  },
  {
    title: 'Difference Between Online Savings Accounts and Regular Savings Accounts',
    tag: 'BANKING',
    image: bank,
  },
  {
    title: "Banks' Physical Footprint and Financial Technology Adoption",
    tag: 'FINTECH',
    image: global,
  },
  {
    title: 'Understanding Quarterly Estimated Taxes',
    tag: 'TAX TIPS',
    image: estimatedTaxes,
  },
  {
    title: 'What the IRS Actually Looks at in an Audit',
    tag: 'IRS',
    image: irsAudit,
  },
  {
    title: 'Estate Planning Basics for Texas Families',
    tag: 'ESTATE',
    image: estatePlanning,
  },
];

export const testimonials = [
  { name: 'Jane B.', quote: 'Tanya made a stressful IRS notice feel completely manageable. She explained every step and handled the rest.' },
  { name: 'Mark R.', quote: 'Professional, prompt, and incredibly knowledgeable. My small business taxes have never been in better hands.' },
  { name: 'Denise K.', quote: 'Her background with the IRS gives real peace of mind — she knows exactly how to navigate any issue.' },
]

export const team = [
  {
    name: 'Tanya Brewer',
    role: 'CPA',
    image: tanya,
    bio: [
      'Tanya Brewer has been a licensed CPA since 1990. She retired from Federal Law Enforcement in 2016. She spent 28+ years working for the Internal Revenue Service as a Special Agent and a Revenue Agent.',
      'She retired as the Assistant Special Agent in Charge, and received many awards throughout her career for her outstanding leadership and dedication.',
    ],
  },
  {
    name: 'Thomas Brewer',
    role: 'Associate',
    image: Thomas,
    bio: [
      'The firm has grown to include Tom Brewer, who also retired from the IRS after 20+ years. He has experience in IRS Collections as a Revenue Officer, and Criminal Investigation. He also received many performance awards and leadership awards throughout his career.',
      'Together they have helped over 200 clients navigate their tax obligations, collection challenges and financial operations.',
    ],
  },
]

export const contactInfo = {
  email: 'tanya@cpatanya.com',
  phone: '(618) 558-3351',
  location: 'New Braunfels, TX 78132',
}
