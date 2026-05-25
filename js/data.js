const SITE_NAME = 'AI Education Program';
const LOGO_SRC = 'assets/logo.svg';

const programTagline = 'Build tools that optimize your life — don\'t let AI use you.';

const programFocusAreas = [
  {
    title: 'Understand AI & Stay in Control',
    description:
      'Learn what AI is, how machines learn, and how to critically evaluate outputs so you stay in control of the technology—not the other way around.',
  },
  {
    title: 'Master Key AI Tools & Concepts',
    description:
      'Get hands-on with the most powerful AI tools and core concepts shaping today\'s world, and learn how to use them effectively.',
  },
  {
    title: 'Build with AI & Write Real Code',
    description:
      'Learn how to use AI to write code, build useful applications, and create your own tools and take control over your life.',
  },
  {
    title: 'Become a Builder, Not a Bystander',
    description:
      'Develop the skills and mindset to work with AI—so you\'re among those who shape and direct it, not those replaced by it.',
  },
];

const INTAKE_FORM_URL =
  'https://touradam.notion.site/3682b0c9b12980368964cb112ed1af0c?pvs=105';

// Notion blocks standard page URLs in iframes on external sites.
// To embed in-page, use Share → Publish → Embed this page in Notion and set INTAKE_FORM_EMBED_URL.
const INTAKE_FORM_EMBED_URL = '';

// Keep in sync with the Notion form page title, subtitle, and confirmation message.
// Notion update steps:
// 1. Open the form page in your Notion workspace (not the public link).
// 2. Set the page title to INTAKE_FORM_TITLE.
// 3. Add a text block below the title with INTAKE_FORM_SUBTITLE.
// 4. Form settings → Confirmation message → paste INTAKE_FORM_CONFIRMATION.
const INTAKE_FORM_TITLE = 'Apply to AI Education Program';
const INTAKE_FORM_SUBTITLE =
  "Takes about 2 minutes. Week 1 is free — we'll email you cohort details and next steps.";
const INTAKE_FORM_CONFIRMATION =
  "Thanks — we got your application!\n\nWe'll review your responses and email you within 24 hours with cohort details, schedule, and how to join Week 1 free.\n\nQuestions before then? Email touradam3@gmail.com.";

const cohortSchedule = {
  firstSessionDate: '2026-06-05',
  firstSessionDay: 'Friday, June 5, 2026',
  firstSessionTime: '7:00–8:00 PM PST',
  firstSessionLabel: 'Session 1 · AI Productivity & Cursor',
  timezone: 'Pacific Time (PST)',
  fridayTime: '7:00–8:00 PM PST',
  saturdayTime: '8:00–10:00 AM PST',
  sundayTime: '8:00–10:00 AM PST',
  weeklyScheduleSummary: 'Friday 7–8 PM · Saturday & Sunday 8–10 AM PST',
};

const programData = [
  {
    id: 'week1',
    title: 'Week 1 — FREE',
    subtitle: 'AI Foundations + Build Your First Website',
    days: [
      {
        id: 'w1s1',
        title: 'Session 1: AI Productivity & Cursor',
        subtitle: 'Mini exercise: Generate a personal bio page with AI',
        schedule: 'Friday, June 5, 2026 · 7:00–8:00 PM PST',
        duration: '1 hour',
        dayOfWeek: 'friday',
        topics: [
          'What AI coding is',
          'How developers use AI',
          'Prompt engineering basics',
          'Using ChatGPT effectively',
          'Installing Cursor',
          'Understanding projects and files',
        ],
      },
      {
        id: 'w1s2',
        title: 'Session 2: Build a Website with AI',
        subtitle: 'Project: Personal portfolio website',
        dayOfWeek: 'saturday',
        duration: '2 hours',
        topics: [
          'HTML basics',
          'CSS basics',
          'Website structure',
          'Editing AI-generated code',
          'Improving design using prompts',
        ],
      },
      {
        id: 'w1s3',
        title: 'Session 3: Deploy Your Website',
        subtitle: 'Project: Publish your first live website',
        dayOfWeek: 'sunday',
        duration: '2 hours',
        topics: [
          'Git basics',
          'GitHub introduction',
          'Deploying online',
          'Sharing projects publicly',
        ],
      },
    ],
  },
  {
    id: 'week2',
    title: 'Week 2 — Chrome Extensions + Professional Workflow',
    subtitle: '$300 · Build tools you use daily',
    days: [
      {
        id: 'w2s1',
        title: 'Session 1: Git & GitHub Workflow',
        subtitle: 'Professional version control workflow',
        dayOfWeek: 'friday',
        duration: '1 hour',
        topics: [
          'Repositories',
          'Commits',
          'Branches',
          'Push/pull',
          'Collaboration workflow',
        ],
      },
      {
        id: 'w2s2',
        title: 'Session 2: Chrome Extension Fundamentals',
        subtitle: 'Project: Productivity Chrome extension',
        dayOfWeek: 'saturday',
        duration: '2 hours',
        topics: [
          'manifest.json',
          'Browser APIs',
          'DOM manipulation',
          'Injecting scripts',
        ],
      },
      {
        id: 'w2s3',
        title: 'Session 3: AI-Powered Chrome Tools',
        subtitle: 'Projects: AI summarizer, LinkedIn helper, or email assistant',
        dayOfWeek: 'sunday',
        duration: '2 hours',
        topics: [
          'AI text summarizer extension',
          'LinkedIn helper extension',
          'AI email assistant extension',
          'Building tools you actually use daily',
        ],
      },
    ],
  },
  {
    id: 'week3',
    title: 'Week 3 — Build AI Web Apps',
    subtitle: '$300 · From APIs to working AI tools',
    days: [
      {
        id: 'w3s1',
        title: 'Session 1: APIs & AI Integration',
        subtitle: 'Project: AI chatbot',
        dayOfWeek: 'friday',
        duration: '1 hour',
        topics: [
          'APIs explained simply',
          'OpenAI API',
          'Fetch requests',
          'AI responses',
        ],
      },
      {
        id: 'w3s2',
        title: 'Session 2: Frontend + Backend Basics',
        subtitle: 'Project: AI note summarizer',
        dayOfWeek: 'saturday',
        duration: '2 hours',
        topics: [
          'Simple backend concepts',
          'Forms',
          'User interaction',
          'Data flow',
        ],
      },
      {
        id: 'w3s3',
        title: 'Session 3: Build a Real AI Tool',
        subtitle: 'Choose: business assistant, study helper, or content generator',
        dayOfWeek: 'sunday',
        duration: '2 hours',
        topics: [
          'AI business assistant',
          'AI study helper',
          'AI content generator',
          'Customizing your AI tool with Cursor',
        ],
      },
    ],
  },
  {
    id: 'week4',
    title: 'Week 4 — Launch & Capstone',
    subtitle: '$300 · Deploy, polish, and present',
    days: [
      {
        id: 'w4s1',
        title: 'Session 1: Deployment & Hosting',
        subtitle: 'Go live with Hostinger, Vercel, or GitHub Pages',
        dayOfWeek: 'friday',
        duration: '1 hour',
        topics: [
          'Domains',
          'Hosting',
          'Environment variables',
          'Deployment workflow',
          'Platforms: Hostinger, Vercel, GitHub Pages',
        ],
      },
      {
        id: 'w4s2',
        title: 'Session 2: Capstone Build Session',
        subtitle: 'Live coaching on your chosen final project',
        dayOfWeek: 'saturday',
        duration: '2 hours',
        topics: [
          'Choose: AI web app, Chrome extension, startup website, or productivity tool',
          'Build and polish with live instructor support',
          'Prepare GitHub repo and deployment',
        ],
      },
      {
        id: 'w4s3',
        title: 'Session 3: Demo Day',
        subtitle: 'Present your live app, repo, website, and extension',
        dayOfWeek: 'sunday',
        duration: '2 hours',
        topics: [
          'Present your capstone project to the cohort',
          'Share your GitHub repository and live deployment',
          'Portfolio credibility, community, and next steps',
        ],
      },
    ],
  },
];

const targetAudience = [
  {
    title: 'Students & Recent Graduates',
    description:
      'Gain practical AI skills that give you a real edge in the job market. Learn how to use AI to optimize studying and job hunting, and stand out as a strong candidate.',
  },
  {
    title: 'Entrepreneurs & Builders',
    description:
      'Turn ideas into real products. Learn how to use AI to create tools, automate work, and build online businesses.',
  },
  {
    title: 'Creatives',
    description:
      'Expand your creativity with AI tools while maintaining your unique voice and creative control.',
  },
  {
    title: 'Professionals',
    description:
      'Stay competitive in your field by learning how to use AI tools effectively and think critically about their outputs.',
  },
  {
    title: 'Non-Technical Learners Curious About AI',
    description:
      'Start from the fundamentals. No coding or AI background is required—just curiosity and a desire to stay relevant.',
  },
];

const programStats = [
  { label: 'Duration', value: '4 Weeks' },
  { label: 'Live Sessions', value: '12' },
  { label: 'Week 1', value: 'Free' },
  { label: 'Full Program', value: '$900' },
];

const pricingTiers = [
  { week: 'Week 1', access: 'Free Trial Week', price: 'Free' },
  { week: 'Week 2', access: 'Paid', price: '$300' },
  { week: 'Week 3', access: 'Paid', price: '$300' },
  { week: 'Week 4', access: 'Paid', price: '$300' },
];

const faqs = [
  {
    question: 'Do I need any prior programming experience?',
    answer:
      'No! This program is designed for complete beginners. We teach you how to build software with AI using Cursor — no computer science background required. Week 1 is free so you can try it with zero risk.',
  },
  {
    question: 'How does the free Week 1 work?',
    answer:
      'Week 1 is completely free. You attend all 3 live sessions, build a portfolio website, set up GitHub, and deploy your first live site. After experiencing real results, you can decide whether to continue with Weeks 2–4 ($300 each).',
  },
  {
    question: 'What is the total cost of the program?',
    answer:
      'Week 1 is free. Weeks 2, 3, and 4 are $300 each. The full program is $900 after your free trial week. You only pay for weeks you choose to continue.',
  },
  {
    question: 'What is the schedule?',
    answer:
      'The next cohort starts Friday, June 5, 2026 at 7:00 PM PST with Session 1. Live sessions run Friday 7–8 PM and Saturday & Sunday 8–10 AM (Pacific Time). The program runs 4 weeks with 3 live sessions per week (12 sessions total).',
  },
  {
    question: 'When does the next cohort start?',
    answer:
      'The first live session is Friday, June 5, 2026 from 7:00–8:00 PM Pacific Time (PST). Ongoing sessions are Friday 7–8 PM and Saturday & Sunday 8–10 AM PST. Apply now to reserve your spot in Week 1 — it is completely free.',
  },
  {
    question: 'What if I miss a session?',
    answer:
      'We recommend attending all live sessions for the best experience. Recordings and materials are provided so you can catch up between sessions.',
  },
  {
    question: 'What technologies will we use?',
    answer:
      'Cursor, ChatGPT, Git, GitHub, HTML/CSS, Chrome extensions, OpenAI APIs, and deployment platforms like Hostinger, Vercel, and GitHub Pages.',
  },
  {
    question: 'What will I have by the end of the program?',
    answer:
      'A deployed website, GitHub profile, Chrome extension, AI-powered web app, and a capstone project you present at Demo Day — plus confidence using AI for software creation.',
  },
  {
    question: 'What bonus resources are included?',
    answer:
      'Students receive prompt templates, Cursor rules/templates, Git cheat sheets, a deployment checklist, and Chrome extension starter templates.',
  },
  {
    question: 'Will there be ongoing support after the program?',
    answer:
      "Yes! You'll get access to our alumni community where you can continue learning, ask questions, and share projects with fellow graduates.",
  },
];
