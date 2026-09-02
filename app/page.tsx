import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { interests } from "@/data/interests";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import type { Project } from "@/data/schema";

function BlockHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="block-heading">
      <span>{index}</span>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="compact-project-row">
      <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
      <div className="compact-project-main">
        <div className="compact-project-title">
          <h3>{project.title}</h3>
          <span>{project.category}</span>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="compact-project-meta">
        <div className="compact-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top" className="portfolio-root">
      <div className="ambient-grid" aria-hidden="true" />

      <div className="portfolio-frame">
        <header className="dossier-nav">
          <nav aria-label="Primary navigation">
            <a href="#profile">Research</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="compact-hero">
          <Reveal className="compact-hero-copy" distance={18}>
            <div className="identity-status">
              <span />
              {profile.availability}
            </div>
            <p className="identity-role">AI Researcher & Engineer</p>
            <h1>
              <span>Abdul Rahman</span>
              <span>
                Alyoussef<span className="identity-period">.</span>
              </span>
            </h1>
            <p className="identity-intro">{profile.intro}</p>
            <div className="identity-actions">
              <Button asChild size="lg">
                <a href="#work">
                  Selected work <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={profile.links.email}>
                  Email <Mail className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="current-card" delay={0.1} distance={14}>
            <div className="current-card-top">
              <span>Research profile</span>
              <span>Active</span>
            </div>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>Research Assistant</dd>
              </div>
              <div>
                <dt>Institute</dt>
                <dd>Fraunhofer SCAI</dd>
              </div>
              <div>
                <dt>Areas</dt>
                <dd>Agentic AI, LLMs &amp; representation learning</dd>
              </div>
              <div>
                <dt>Methods</dt>
                <dd>Machine learning, deep learning &amp; RL</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{profile.contact.location}</dd>
              </div>
            </dl>
          </Reveal>
        </section>

        <section id="profile" className="dossier-sheet">
          <div className="sheet-main">
            <section className="sheet-block research-profile">
              <BlockHeading index="01" title="Research profile" />
              <p className="research-summary">{profile.about}</p>
              <ul className="research-areas" aria-label="Research areas">
                {profile.researchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>

            <section id="experience" className="sheet-block">
              <BlockHeading index="02" title="Experience" />
              <div className="compact-experience-list">
                {experience.map((entry) => (
                  <article className="compact-experience" key={`${entry.company}-${entry.period}`}>
                    <div>
                      <p>{entry.company}</p>
                      <h3>{entry.role}</h3>
                    </div>
                    <p>{entry.summary}</p>
                    <div className="compact-experience-meta">
                      <span>{entry.period}</span>
                      {entry.location ? <span>{entry.location}</span> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="work" className="sheet-block selected-work">
              <BlockHeading index="03" title="Selected work" />
              <div className="compact-project-list">
                {projects.map((project, index) => (
                  <ProjectRow key={project.title} project={project} index={index} />
                ))}
              </div>
            </section>
          </div>

          <aside className="sheet-rail">
            <section className="rail-block">
              <BlockHeading index="A" title="Education" />
              <div className="rail-education-list">
                {education.map((entry) => (
                  <article key={`${entry.institution}-${entry.degree}`}>
                    <div>
                      <span className="rail-mark">{entry.mark}</span>
                      <span>{entry.period}</span>
                    </div>
                    <h3>{entry.degree}</h3>
                    <p>{entry.institution}</p>
                    <p>{entry.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rail-block">
              <BlockHeading index="B" title="Languages" />
              <dl className="language-list">
                <div><dt>Arabic</dt><dd>Native</dd></div>
                <div><dt>English</dt><dd>IELTS 7.5</dd></div>
                <div><dt>German</dt><dd>Intermediate</dd></div>
              </dl>
            </section>

            <section className="rail-block">
              <BlockHeading index="C" title="Outside work" />
              <div className="hobby-list">
                {interests.map((interest) => (
                  <span key={interest.title}>{interest.title}</span>
                ))}
              </div>
            </section>

            <section id="contact" className="rail-block contact-block">
              <BlockHeading index="D" title="Contact" />
              <p>For research, engineering, or collaboration:</p>
              <a href={profile.links.email}>
                {profile.contact.email} <ArrowUpRight className="size-3.5" />
              </a>
            </section>
          </aside>
        </section>

        <footer className="compact-footer">
          <span>Abdul Rahman Alyoussef</span>
          <span>AI Researcher & Engineer · Bonn</span>
          <a href="#top">Back to top <ArrowUpRight className="size-3" /></a>
        </footer>
      </div>
    </main>
  );
}
