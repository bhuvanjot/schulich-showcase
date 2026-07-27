import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  FolderOpen,
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
          "Personal website of Bhuvanjot Arneja, a BBA candidate at the Schulich School of Business with experience in private equity and real estate.",
      },
      {
        property: "og:title",
        content: "Bhuvanjot Arneja — BBA Candidate | Schulich School of Business",
      },
      {
        property: "og:description",
        content:
          "Personal website of Bhuvanjot Arneja, a BBA candidate at the Schulich School of Business with experience in private equity and real estate.",
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
          "Personal website of Bhuvanjot Arneja, a BBA candidate at the Schulich School of Business with experience in private equity and real estate.",
      },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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
          className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-stretch justify-center gap-12 px-6 py-16 lg:flex-row lg:py-0"
        >
          <div className="order-2 flex h-full flex-col justify-center lg:order-1 lg:w-1/2">
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

          <div className="order-1 flex h-full items-center justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl lg:max-w-lg">
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
                I am a fourth-year BBA candidate at the{" "}
                <strong className="text-foreground">Schulich School of Business</strong> with a strong
                interest in finance, real estate, and investment strategy. My experience spans financial
                modeling, deal analysis, and market research, and I enjoy breaking down complex problems
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
                    Bachelor of Business Administration (BBA)
                  </p>
                </div>
                <span className="w-fit rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-muted-foreground">
                  2022 — 2026
                </span>
              </div>
              <p className="mt-6 text-muted-foreground">
                Pursuing a BBA in Toronto with coursework in finance, accounting, strategy, and
                investments. Active in student initiatives and case competitions.
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
              <div className="relative mb-10">
                <span className="absolute -left-[calc(0.5rem+1px)] top-2 block h-4 w-4 rounded-full border-2 border-background bg-secondary" />
                <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary">
                        Private Equity Summer Analyst
                      </h3>
                      <p className="mt-1 font-medium text-secondary">Billion Group</p>
                    </div>
                    <span className="w-fit rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      May 2026 — Present
                    </span>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>
                      Support real estate investment transactions through financial modeling, due
                      diligence, and market analysis.
                    </li>
                    <li>
                      Prepare investment memos and presentation materials for internal investment
                      committee review.
                    </li>
                    <li>
                      Collaborate with the finance and accounting team to evaluate deal economics and
                      capital structure.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-center gap-3">
              <FolderOpen className="h-6 w-6 text-secondary" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">Selected Work</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Real Estate Investment Memo",
                  description:
                    "A comprehensive analysis of a multifamily acquisition, including rent roll underwriting, exit scenarios, and IRR sensitivities.",
                  tags: ["Financial Modeling", "Real Estate", "Investment Analysis"],
                },
                {
                  title: "DCF Valuation Model",
                  description:
                    "A fully linked discounted cash flow model with scenario and sensitivity analysis for a publicly traded company.",
                  tags: ["DCF", "Valuation", "Excel"],
                },
                {
                  title: "Market Research Dashboard",
                  description:
                    "A data-driven study of Toronto real estate trends using public datasets, visualized for investment decision-making.",
                  tags: ["Python", "Data Analysis", "Visualization"],
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-xl font-bold text-primary">{project.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
