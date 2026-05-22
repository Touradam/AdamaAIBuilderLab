# AI Mastery Program — Website Overview

This document summarizes the content and structure of the **AI Mastery Program** website: a static, multi-page site that promotes a 2-weekend AI education program.

---

## Purpose

The website advertises an intensive AI education program designed to help people:

- Understand how AI works
- Think critically about AI capabilities and limitations
- Build real tools and applications
- Use AI intentionally without becoming dependent on it

The central message is **"Build tools that optimize your life — don't let AI use you."**

---

## Site Structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, value proposition, key stats, learning pillars, audience, philosophy, call to action |
| About | `about.html` | Mission, philosophy, differentiators, target audience, instructor bio |
| Program | `program.html` | Full 6-day curriculum with expandable day sections |
| Schedule | `schedule.html` | Format, timeline, preparation checklist, setup details |
| Contact | `contact.html` | Contact info, FAQ, enrollment steps |

Shared layout (header, footer, navigation) is injected via `js/layout.js`. Dynamic content is loaded from `js/data.js` and rendered by `js/main.js`.

---

## Program at a Glance

| Detail | Value |
|--------|-------|
| Duration | 2 weekends (6 full days) |
| Format | Friday, Saturday, Sunday × 2 consecutive weekends |
| Hours per day | ~8 hours |
| Prerequisites | None |
| Group size | Small (15–20 students max) |
| Delivery | 100% online via live video conference |
| Primary language | Python |

---

## Core Philosophy

The program is guided by four principles:

1. **AI is a tool, not a replacement for human thinking**
2. **Understanding principles matters more than memorizing tools**
3. **You should use AI deliberately, not passively**
4. **The goal is agency, clarity, and empowerment**

---

## What Participants Learn

Three learning pillars are highlighted on the home page:

- **Understanding AI** — What AI is, how it works, and how to evaluate its outputs critically
- **Practical Skills** — Hands-on building of web apps, Python applications, and AI agents using modern tools
- **AI Literacy & Ethics** — Agency, ethical awareness, and responsible use of AI

The learning approach follows three steps: **Understand → Build → Master**.

---

## Target Audience

The program is open to anyone who wants to use AI as a tool, not a crutch. Specific groups mentioned:

- **Students** — Build a competitive edge for future careers
- **Entrepreneurs** — Build AI-powered tools for their business
- **Creatives** — Enhance creative work with AI capabilities
- **Professionals** — Stay ahead in their field with AI skills
- **Non-technical people** — No programming experience required to get started

---

## Curriculum

### Week 1 — Bootcamp: Foundation + Hands-On Skills

**Day 1 — Friday: Understanding AI**
- What AI is vs. what it is not
- History and evolution of AI
- Machine learning fundamentals (data, training, inference)
- Neural networks explained intuitively
- Common myths, fears, and limitations
- Critical thinking about AI outputs

**Day 2 — Saturday: Programming Fundamentals**
- Python and programming basics
- How software applications are structured
- Introduction to Cursor (AI-assisted coding)
- Git and version control
- Project organization
- How developers work with AI today

**Day 3 — Sunday: Building & Deployment**
- Building a simple web app and Python application
- Connecting AI models to applications
- Prompt design basics
- Deployment fundamentals
- Best practices to avoid over-reliance on AI

### Week 2 — Workshop: Advanced Concepts + Personal Projects

**Day 4 — Friday: Agentic Workflows**
- Frontier and open-source LLM models
- Introduction to AI agents
- Jupyter Lab, CrewAI, and AutoGen
- Working with APIs
- Building a simple AI agent application
- Where agents help — and where they shouldn't be trusted

**Day 5 — Saturday: AI Agent Applications**
- Designing real-world AI agents
- Connecting tools, APIs, and data
- Agents for productivity, research, and personal automation
- Ethics, safety, and boundaries
- Staying in control of AI systems

**Day 6 — Sunday: Q&A + Integration**
- Live Q&A and concept review
- Common mistakes beginners make
- How to continue learning responsibly
- Building a long-term AI mindset

---

## What Sets the Program Apart

- **No prerequisites** — Starts from fundamentals and builds progressively
- **Principles over tools** — Teaches how to think about AI, not just specific platforms
- **Hands-on learning** — Every concept reinforced with practical exercises and deployed projects
- **Ethics and responsibility** — Emphasis on agency and avoiding over-dependence

---

## Schedule & Preparation

### What to Bring (Required)
- Laptop (Mac, Windows, or Linux)
- Charger and power adapter
- Curiosity and willingness to learn
- Open and critical mindset

### Optional
- Notebook and pen
- Water bottle and snacks
- Project ideas and questions
- External mouse

### Setup (Done Together on Day 1)
No prior setup is required. The program guides participants through installing:
- Python and development tools
- Cursor (AI-assisted coding editor)
- Git for version control
- Jupyter Lab
- Access to AI models and APIs

---

## Contact & Enrollment

| Channel | Details |
|---------|---------|
| Email | touradam3@gmail.com |
| Location | 100% online — join from anywhere |
| Social | Twitter and LinkedIn (placeholder links) |
| Response time | Within 24 hours, Monday–Friday, 9 AM–6 PM |

### Enrollment Steps
1. **Reach out** — Contact via email with questions or interest
2. **Learn more** — Receive details about upcoming cohorts and enrollment
3. **Get started** — Secure a spot and begin the program

---

## Frequently Asked Questions

| Question | Answer Summary |
|----------|----------------|
| Prior programming experience needed? | No — designed for complete beginners |
| What if I miss a day? | Materials and recordings provided; catch up between weekends |
| Certificate? | Yes, upon successful completion |
| Programming language? | Python |
| Own projects during the program? | Encouraged in Week 2 |
| Laptop requirements? | Any modern laptop from the last 5 years; cloud resources used |
| Class size? | Small groups, typically 15–20 students |
| Ongoing support? | Alumni community access after completion |

---

## Content That Still Needs Customization

The following placeholders remain in the site and should be filled in before launch:

- **Instructor name and bio** (`about.html`)
- **Twitter and LinkedIn URLs** (`contact.html`)
- **Footer email and SEO base URL** (`js/layout.js`, `robots.txt`, `sitemap.xml`)

---

## Technical Notes

- **Stack:** Static HTML, CSS, and vanilla JavaScript — no build step required
- **Content source:** `js/data.js` (curriculum, audience, philosophy, FAQs)
- **Styling:** `css/styles.css` with CSS variables for theming
- **Deployment:** Any static host (Netlify, GitHub Pages, S3, etc.)
