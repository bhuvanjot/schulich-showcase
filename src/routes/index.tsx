import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
  User,
  Mail,
  Linkedin,
  Menu,
  X,
  MapPin,
  ExternalLink,
} from "lucide-react";

import heroVisual from "@/assets/hero-visual.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Bhuvanjot Arneja — BBA Candidate | Schulich School of Business",
      },
      {
        name: "description",
        content:
          "Personal website of Bhuvanjot Arneja, a third-year BBA candidate at the Schulich School of Business with experience across private equity, investment banking, and equity research.",
      },
      {
        property: "og:title",
        content: "Bhuvanjot Arneja — BBA Candidate | Schulich School of Business",
      },
      {
        property: "og:description",
        content:
          "Personal website of Bhuvanjot Arneja, a third-year BBA candidate at the Schulich School of Business with experience across private equity, investment banking, and equity research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bhuvanjot Arneja — BBA Candidate | Schulich School of Business",
      },
      {
        name: "twitter:description",
        content:
          "Personal website of Bhuvanjot Arneja, a third-year BBA candidate at the Schulich School of Business with experience across private equity, investment banking, and equity research.",
      },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Involvement", href: "#involvement" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-heading text-lg font-bold text-primary">
            Bhuvanjot Arneja
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:bhuvan@schulich.yorku.ca"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary md:inline-flex"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:bhuvan@schulich.yorku.ca"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 content-center items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-0"
        >
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <span className="mb-4 inline-block w-fit rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              Schulich BBA Candidate
            </span>
            <h1 className="font-heading text-5xl font-bold leading-[1.1] text-primary md:text-6xl lg:text-7xl">
              Bhuvanjot Arneja
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Aspiring investor focused on private equity, real estate, and value creation. Currently a
              Summer Analyst at Billion Group in Toronto.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
              >
                Work with me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvanjot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Toronto, Ontario, Canada
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl lg:max-w-xl">
              <img
                src={heroVisual}
                alt="Abstract illustration of real estate and finance"
                width={1024}
                height={1280}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <User className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">About</h2>
            </div>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a third-year BBA candidate at the{" "}
                <strong className="text-foreground">Schulich School of Business</strong> with a strong
                interest in finance and investment strategy. My experience spans financial
                modelling, deal analysis, and market research, and I enjoy breaking down complex problems
                into clear, actionable insights.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Most recently, I joined <strong className="text-foreground">Billion Group</strong> as a
                Private Equity Summer Analyst, where I support real estate transactions through due
                diligence, valuation, and investment memo preparation. I am always open to connecting with
                professionals who share a passion for value-driven investing.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Education</h2>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Schulich School of Business — York University
                  </h3>
                  <p className="mt-1 text-base font-medium text-secondary">
                    Bachelor of Business Administration (BBA), Finance Specialization
                  </p>
                </div>
                <span className="w-fit rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-muted-foreground">
                  Class of 2028
                </span>
              </div>
              <p className="mt-6 text-muted-foreground">
                CGPA 3.8/4.0. Dean&apos;s Honours List (top 15% of class, all semesters) and Schulich
                Entrance Scholarship recipient. Coursework includes Finance (A+), Financial Accounting
                (A), and Micro/Macroeconomics (A).
              </p>

            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Experience</h2>
            </div>
            <div className="relative border-l border-border pl-8">
              {[
                {
                  role: "Incoming Internal Audit Summer Analyst",
                  company: "Citi",
                  location: "Toronto, Canada",
                  period: "May 2027 — Aug 2027",
                  points: [
                    "Scheduled to complete a 16-week internship focused on risk assessment, controls evaluation, and business process reviews.",
                  ],
                },
                {
                  role: "Private Equity Summer Analyst",
                  company: "Billion Group",
                  location: "Toronto, Canada",
                  period: "May 2026 — Aug 2026",
                  points: [
                    "Conducting commercial real estate investment analysis, market research, and capital markets advisory for institutional clients.",
                    "Assisting on a live sell-side disposition of a 4-unit fitness franchise portfolio by building DCF and comparable company valuation models and analyzing revenue, EBITDA, and margin trends.",
                    "Participated in 5+ client valuation calls reviewing location-level financial performance for the live sell-side mandate.",
                  ],
                },
                {
                  role: "Private Equity Fall Analyst",
                  company: "Define Capital",
                  location: "Toronto, Canada",
                  period: "Sep 2025 — Dec 2025",
                  points: [
                    "Screened and evaluated 30+ lower-middle-market software acquisition targets by analyzing CIMs and summarizing key financial metrics.",
                    "Built a 5-year pro forma operating model for a vertical SaaS buyout ($7.5M ARR | $2.0M EBITDA) reflecting pricing optimization, churn reduction, and module upsell.",
                    "Valued the target using precedent transactions and an LBO framework; base case showed EBITDA margin expansion from 27% to 35% and 2.4x–2.7x MOIC.",
                  ],
                },
                {
                  role: "Business Strategy & Monetization Summer Analyst",
                  company: "EVDrop",
                  location: "Toronto, Canada",
                  period: "May 2025 — Aug 2025",
                  points: [
                    "Designed pricing and monetization frameworks for consumer and SaaS operator platforms at a pre-launch EV charging startup.",
                    "Built 3+ integrated models and forecasts to test revenue structures, partner incentives, and market-entry profitability scenarios.",
                    "Benchmarked 10+ charging platforms to evaluate pricing levers, feature asymmetries, and market positioning.",
                  ],
                },
                {
                  role: "Merchant Banking Winter Analyst",
                  company: "Notre-Dame Capital",
                  location: "Montreal, Canada",
                  period: "Jan 2025 — Apr 2025",
                  points: [
                    "Provided capital markets advisory to 10–15 high-growth private companies raising equity or hybrid financing across sectors.",
                    "Analyzed compliance gaps across 20+ global neobanks to inform a $30M tokenized asset equity financing.",
                    "Prepared diligence and investor materials supporting transaction execution and cross-functional deal delivery.",
                  ],
                },
                {
                  role: "Equity Research Fall Analyst",
                  company: "Green Portfolio",
                  location: "Toronto, Canada",
                  period: "Sep 2024 — Dec 2024",
                  points: [
                    "Conducted equity research across public companies, building financial models and valuation analyses to support investment views.",
                  ],
                },
                {
                  role: "Private Capital Summer Analyst",
                  company: "Unlisted Assets",
                  location: "Toronto, Canada",
                  period: "May 2024 — Aug 2024",
                  points: [
                    "Supported private capital coverage through company screening, market research, and preparation of client-facing materials.",
                  ],
                },
              ].map((job) => (
                <div key={`${job.company}-${job.period}`} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[calc(2rem+9px)] top-8 block h-4 w-4 rounded-full border-2 border-background bg-secondary" />
                  <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">{job.role}</h3>
                        <p className="mt-1 font-medium text-secondary">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="involvement" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <Users className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                Leadership &amp; Involvement
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Alternatives Analyst",
                  org: "Global Macro Strategy Group (GMSG)",
                  period: "May 2026 — Present",
                  description:
                    "Cover alternatives for monthly macro strategy publications across private equity, private credit, real estate, venture capital, and hedge funds, focusing on liquidity, valuation, and capital flow trends.",
                },
                {
                  title: "Senior Advisor (Former Finance Director)",
                  org: "Finance Student Association (FSA)",
                  period: "May 2025 — Present",
                  description:
                    "Advise the executive team on financial strategy and resource allocation for 10+ key initiatives and mentorship programs.",
                },
                {
                  title: "Finance Director",
                  org: "The Insider Media Group",
                  period: "May 2025 — Apr 2026",
                  description:
                    "Managed budgeting and financial planning for a student-run media organization, overseeing spend across content and events.",
                },
                {
                  title: "Research Analyst",
                  org: "York Finance Club (YFC)",
                  period: "Jan 2025 — Apr 2025",
                  description:
                    "Conducted fundamental research on automotive suppliers; pitched BorgWarner (NYSE: BWA) as a buy on electrification strategy and the PHINIA spin-off, with DCF and comps supporting ~35% upside.",
                },
                {
                  title: "Finance Delegate",
                  org: "DECA Inc.",
                  period: "Sep 2023 — Jun 2024",
                  description:
                    "Competed in finance case events, building analysis and presentation skills against national-level participants.",
                },
                {
                  title: "Team Captain & Coach",
                  org: "Schulich Cricket Team · Kickboxing",
                  period: "Ongoing",
                  description:
                    "Captain of the Schulich cricket team and kickboxing coach; Taekwondo black belt and 3x international gold medalist.",
                },
              ].map((item) => (
                <div
                  key={`${item.org}-${item.title}`}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 font-medium text-secondary">{item.org}</p>
                  <span className="mt-3 w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.period}
                  </span>
                  <p className="mt-4 flex-1 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="skills" className="border-t border-border bg-card py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Skills</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: "Finance",
                  skills: ["Financial Modeling", "DCF Valuation", "LBO Analysis", "Real Estate"],
                },
                {
                  category: "Data & Tools",
                  skills: ["Microsoft Excel", "Python", "PowerPoint", "Bloomberg (basic)"],
                },
                {
                  category: "Strategy",
                  skills: ["Market Research", "Due Diligence", "Investment Memos", "Pitch Decks"],
                },
                {
                  category: "Soft Skills",
                  skills: ["Communication", "Teamwork", "Time Management", "Attention to Detail"],
                },
              ].map((group) => (
                <div key={group.category} className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="font-heading text-lg font-bold text-primary">{group.category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Let&apos;s connect</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I am open to opportunities in private equity, real estate, and investment roles. Reach out
              via email or LinkedIn.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:bhuvan@schulich.yorku.ca"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-secondary sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                bhuvan@schulich.yorku.ca
              </a>
              <a
                href="https://www.linkedin.com/in/bhuvanjot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-muted sm:w-auto"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/bhuvanjot
                <ExternalLink className="h-4 w-4 opacity-60" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bhuvanjot Arneja. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:bhuvan@schulich.yorku.ca"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/bhuvanjot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
