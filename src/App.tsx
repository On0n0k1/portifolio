import { useEffect, useRef, useState, type ReactNode } from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

type ExperienceEntry = {
  role: string
  org: string
  location: string
  period: string
  highlights: string[]
}

const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    org: 'NDA Contract',
    location: 'Remote',
    period: 'Jan 2026 – May 2026',
    highlights: [
      'Built high-performance Rust APIs for automated digital asset trading on Solana, including real-time asset monitoring.',
      'Reduced system latency by 60% by optimizing concurrency, minimizing memory allocation, and implementing a caching layer.',
      'Built a Redis caching layer that reduced peak-time system load by 40%.',
      'Set up an observability stack (Prometheus, Grafana) for real-time performance and load tracking.',
      'Implemented OAuth 2.0 authentication and payment gateway integrations.',
      'Established Rust development best practices and mentored junior developers.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'Deckers Brands',
    location: 'Goleta, CA (Remote)',
    period: 'Aug 2024 – Dec 2025',
    highlights: [
      'Architected an event-driven, multi-region data processing platform in Rust (AWS Lambda, API Gateway, SQS, DynamoDB Streams, S3), processing 1M+ events/day with automated dead-letter recovery and zero data loss across four global regions.',
      'Built a high-throughput ingestion and data access layer (Rust, DynamoDB, PostgreSQL/Aurora, SeaORM) handling 2,000 requests/second with atomic real-time updates and strong consistency.',
      'Designed an end-to-end secure file delivery pipeline (Lambda, S3, Secrets Manager, AWS Transfer Family/SFTP, PGP encryption), delivering authenticated partner transfers in under 30 seconds.',
      'Developed async Rust integrations (Tokio, Reqwest) with third-party APIs, including automatic token refresh and retry/backoff handling for transient failures.',
    ],
  },
  {
    role: 'Lead Developer',
    org: 'PrivID',
    location: 'Toronto, Canada (Remote)',
    period: 'Jan 2023 – Jul 2024',
    highlights: [
      'Built high-performance, low-latency Rust APIs for critical, scalability-sensitive services.',
      'Implemented Zero-Knowledge systems (ZK-SNARKs/ZK-STARKs) for secure, verifiable computation.',
      'Developed Rust-based WebAssembly (WASM) modules for efficient client-side processing.',
      'Deployed and operated containerized services (Docker, Kubernetes) on Linux-based AWS production environments.',
      'Designed GitLab CI/CD pipelines that cut release cycles by 25%.',
      'Mentored junior developers and contributed to a patent-backed system design.',
    ],
  },
  {
    role: 'Blockchain Developer',
    org: 'NEAR Foundation',
    location: 'Remote',
    period: 'Jan 2022 – Aug 2022',
    highlights: [
      'Assisted companies launching NFTs and other services in Web3, navigating new technological landscapes.',
      'Delivered training courses and workshops on Rust development with an emphasis on blockchain, and authored tutorials on smart contract development and deployment.',
      'Contributed feedback and code to the NEAR Protocol SDK, enhancing platform functionality and developer experience.',
      'Implemented real-time blockchain event listeners, ensuring data consistency and responsiveness.',
      "Built an Aurora (NEAR's EVM-compatible layer) integration connecting NEAR with Ethereum, including Solidity smart contracts.",
    ],
  },
  {
    role: 'Web Developer (Freelance)',
    org: 'IT Services & Consulting',
    location: 'Divinópolis, Brazil (Remote)',
    period: 'Jan 2020 – Dec 2021',
    highlights: [
      'Built full-stack React features using Node.js and Rust for multiple clients; deployed Rust services on GCP and AWS.',
      'Implemented WebAssembly modules for browser-based processing of heavy data workloads.',
      'Resolved critical JavaScript bugs in client-side applications, improving user experience.',
    ],
  },
]

const skillGroups: Record<string, string[]> = {
  Languages: ['Rust', 'Python', 'TypeScript', 'Node.js', 'C', 'Java', 'Go'],
  'Backend & Architecture': [
    'Distributed Systems',
    'Event-Driven Architecture',
    'Microservices',
    'REST APIs',
    'gRPC',
    'WebSockets',
    'TDD',
    'Async & Parallel Programming',
    'Clean Architecture',
  ],
  'Cloud & Infra': [
    'AWS (Lambda, SQS, DynamoDB, Aurora RDS, S3, EKS, EventBridge, Secrets Manager, KMS, CloudWatch, CloudFront, VPC, EC2, IAM)',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Linux (production)',
  ],
  'Blockchain & Cryptography': [
    'Solana',
    'NEAR Protocol',
    'Ethereum (EVM)',
    'Solidity',
    'WebAssembly (WASM)',
    'ZK-SNARKs',
    'ZK-STARKs',
    'PGP',
    'RSA',
    'AES',
    'ECDH',
    'Homomorphic Encryption (FHE, TFHE)',
  ],
  'Auth & Security': ['OAuth 2.0', 'JWT', 'Public Key Cryptography'],
  Frameworks: ['Tokio', 'Axum', 'Actix', 'Rocket-rs', 'React'],
  'Databases & Messaging': [
    'PostgreSQL',
    'MySQL',
    'DynamoDB',
    'MongoDB',
    'Redis',
    'Kafka',
    'Redis Streams',
    'SQL',
    'NoSQL',
  ],
  Observability: ['Prometheus', 'Grafana', 'Metrics', 'Logging', 'Tracing'],
}

type ProjectEntry = {
  title: string
  repo: string
  stack: string
  description: string
  badge?: string
}

const projects: ProjectEntry[] = [
  {
    title: 'Event-Driven Microservices Platform',
    repo: 'go-event-platform',
    stack: 'Go',
    description:
      'An API gateway routes to an order service, which reserves stock from a Redis-cached inventory service over mutually-authenticated TLS gRPC and publishes an event that notification and analytics services consume asynchronously over NATS — traced end to end with OpenTelemetry into Jaeger, with Prometheus metrics on a provisioned Grafana dashboard.',
  },
  {
    title: 'NEAR Smart Contract Tutorial',
    repo: 'Tutorial_NEAR_Rust',
    stack: 'Rust',
    description:
      'A step-by-step tutorial for building NEAR smart contracts in Rust, published in Portuguese, English, and Spanish.',
    badge: '★ 18',
  },
  {
    title: 'On-Chain Chess for NEAR',
    repo: 'NCD.L1--Chess',
    stack: 'Rust',
    description:
      "A chess game deployed to the NEAR network. It earned “Exceptional” level in the NEAR Certified Developer program in 2021.",
    badge: 'NCD: Exceptional',
  },
]

const heroReadouts = [
  { digits: '1M+', label: 'Events / day, zero data loss' },
  { digits: '2,000', label: 'Requests / second' },
  { digits: '−60%', label: 'Latency, after optimization' },
]

const navSections = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// Excludes "OAuth 2.0" — a version number, not a measured result the amber
// readout styling is meant to signal (see DESIGN.md's "One Glow Rule").
const STAT_PATTERN = /(?<!OAuth )\d[\d,]*(?:\.\d+)?(?:[KM]\+?|%|\+)?/g

function withStats(text: string): ReactNode[] {
  const parts = text.split(STAT_PATTERN)
  const matches = text.match(STAT_PATTERN) ?? []
  const nodes: ReactNode[] = []
  parts.forEach((part, i) => {
    if (part) nodes.push(part)
    if (matches[i]) {
      nodes.push(
        <span className="stat" key={i}>
          {matches[i]}
        </span>,
      )
    }
  })
  return nodes
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

function ContactLinks() {
  return (
    <>
      <a className="contact-link" href="mailto:lucas.lemos.kaihatsusha@gmail.com">
        <MailIcon /> Email
      </a>
      <a
        className="contact-link"
        href="https://linkedin.com/in/lucas-alessandro-do-carmo-lemos"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon /> LinkedIn
      </a>
      <a className="contact-link" href="https://github.com/On0n0k1" target="_blank" rel="noreferrer">
        <GitHubIcon /> GitHub
      </a>
    </>
  )
}

function App() {
  const sectionIds = useRef(navSections.map((s) => s.id)).current
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="chassis">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav className="nav" aria-label="Primary">
        <span className="nav__mark">LUCAS LEMOS</span>
        <div className="nav__switches">
          {navSections.map((section) => (
            <a
              key={section.id}
              className="switch"
              href={`#${section.id}`}
              aria-current={activeId === section.id}
            >
              <span className="switch__throw" />
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="bank hero">
        <div className="bank__inner">
          <div className="hero__identity">
            <h1>Lucas Lemos</h1>
            <p className="hero__title">
              Senior Software Engineer — Rust, Distributed Systems &amp; Backend Infrastructure
            </p>
            <p className="hero__location">Divinópolis, Minas Gerais, Brazil</p>
            <div className="hero__contact">
              <ContactLinks />
            </div>
          </div>

          <div className="readouts readouts--separated" role="group" aria-label="Career metrics">
            {heroReadouts.map((r, i) => (
              <div className="readout" key={r.label}>
                <p className="readout__digits" data-delay={String(i)}>
                  {r.digits}
                </p>
                <p className="readout__label">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="summary" className="bank" aria-labelledby="summary-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="summary-heading">
              Summary
            </h2>
            <div className="prose">
              <p>
                {withStats(
                  'Senior software engineer with 6+ years specializing in Rust and distributed systems — building low-latency backend services that process 1M+ events/day at 2,000 requests/second, plus cryptography, blockchain, and technical leadership experience.',
                )}
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="bank bank--lit" aria-labelledby="experience-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="experience-heading">
              Experience
            </h2>
            {experience.map((entry) => (
              <article className="job" key={`${entry.org}-${entry.period}`}>
                <div className="job__header">
                  <div>
                    <h3 className="job__role">{entry.role}</h3>
                    <p className="job__org">
                      {entry.org} — {entry.location}
                    </p>
                  </div>
                  <p className="job__period">{entry.period}</p>
                </div>
                <ul className="job__highlights">
                  {entry.highlights.map((point) => (
                    <li key={point}>{withStats(point)}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="bank bank--lit" aria-labelledby="projects-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="projects-heading">
              Projects
            </h2>
            {projects.map((project) => (
              <article className="job project" key={project.repo}>
                <div className="job__header">
                  <div>
                    <h3 className="job__role">{project.title}</h3>
                    <p className="job__org">{project.stack}</p>
                  </div>
                  {project.badge && <p className="project__badge stat">{project.badge}</p>}
                </div>
                <p className="prose project__description">{project.description}</p>
                <a
                  className="contact-link project__link"
                  href={`https://github.com/On0n0k1/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon /> View source
                </a>
              </article>
            ))}
            <div className="placeholder">
              <p className="placeholder__label">More banks coming online</p>
              <p>Additional case studies are being written up. Reach out for a walkthrough of recent work.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="bank" aria-labelledby="skills-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="skills-heading">
              Skills
            </h2>
            {Object.entries(skillGroups).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <h3 className="skill-group__title">{group}</h3>
                <div className="skill-chips">
                  {items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="bank" aria-labelledby="education-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="education-heading">
              Education &amp; Languages
            </h2>
            <div className="dual">
              <div>
                <div className="record">
                  <p className="record__title">Bachelor&apos;s in Computer Science</p>
                  <p className="record__meta">Faculdade Anhanguera, Divinópolis — 2018–2022</p>
                </div>
                <div className="record">
                  <p className="record__title">Associate&apos;s Degree, Industrial Electronics Technology</p>
                  <p className="record__meta">SENAI Aniello Greco, Divinópolis — 2013–2014</p>
                </div>
              </div>
              <div>
                <div className="record">
                  <p className="record__title">English</p>
                  <p className="record__level">Fluent</p>
                </div>
                <div className="record">
                  <p className="record__title">Portuguese</p>
                  <p className="record__level">Fluent</p>
                </div>
                <div className="record">
                  <p className="record__title">Japanese</p>
                  <p className="record__level">Beginner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bank bank--lit" aria-labelledby="contact-heading">
          <div className="bank__inner">
            <h2 className="bank__label" id="contact-heading">
              Contact
            </h2>
            <p className="prose">Open to senior Rust, distributed-systems, and backend infrastructure roles.</p>
            <div className="hero__contact" style={{ marginTop: '1.25rem' }}>
              <ContactLinks />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copy">© {new Date().getFullYear()} Lucas Lemos</p>
        <div className="footer__links hero__contact">
          <ContactLinks />
        </div>
      </footer>
    </div>
  )
}

export default App
