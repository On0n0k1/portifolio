import { useEffect, useRef, useState, type ReactNode } from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import { FogBackground } from './components/FogBackground'

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
    period: 'Oct 2020 – Dec 2021',
    highlights: [
      'Built full-stack React features using Node.js and Rust for multiple clients; deployed Rust services on GCP and AWS.',
      'Implemented WebAssembly modules for browser-based processing of heavy data workloads.',
      'Resolved critical JavaScript bugs in client-side applications, improving user experience.',
    ],
  },
]

const skillGroups: Record<string, string[]> = {
  Blockchain: ['Solana', 'NEAR Protocol', 'Ethereum (EVM)', 'Solidity', 'WebAssembly (WASM)'],
  Cryptography: ['ZK-SNARKs', 'ZK-STARKs', 'PGP', 'RSA', 'AES', 'ECDH', 'Homomorphic Encryption (FHE, TFHE)'],
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
  Frameworks: ['Tokio', 'Axum', 'Actix', 'Rocket-rs', 'React'],
  AWS: [
    'Lambda',
    'SQS',
    'DynamoDB',
    'Aurora RDS',
    'S3',
    'EKS',
    'EventBridge',
    'Secrets Manager',
    'KMS',
    'CloudWatch',
    'CloudFront',
    'VPC',
    'EC2',
    'IAM',
  ],
  'Orchestration & CI/CD': ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Linux (production)'],
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
  'Auth & Security': ['OAuth 2.0', 'JWT', 'Public Key Cryptography'],
  Observability: ['Prometheus', 'Grafana', 'Metrics', 'Logging', 'Tracing'],
}

type ProjectEntry = {
  title: string
  repo: string
  tags: string[]
  description: string
  badge?: string
}

const projects: ProjectEntry[] = [
  {
    title: 'Generic Multi-threaded Worker Library',
    repo: 'kik_sync_service',
    tags: ['Rust', 'Concurrency', 'Multi-threading', 'Channels', 'Generics', 'Trait-based API'],
    description:
      'A published Rust crate that fans customized parallel computations out across configurable worker threads over channels — implement three small generic traits once (the input, the output, and how one becomes the other) and it handles the thread orchestration, letting the workload push the CPU as hard as it can.',
  },
  {
    title: 'Event-Driven Microservices Platform',
    repo: 'go-event-platform',
    tags: ['Go', 'gRPC', 'mTLS', 'Redis', 'NATS', 'OpenTelemetry', 'Prometheus', 'Grafana'],
    description:
      'An API gateway routes to an order service, which reserves stock from a Redis-cached inventory service over mutually-authenticated TLS gRPC and publishes an event that notification and analytics services consume asynchronously over NATS — traced end to end with OpenTelemetry into Jaeger, with Prometheus metrics on a provisioned Grafana dashboard.',
  },
  {
    title: 'NEAR Smart Contract Tutorial',
    repo: 'Tutorial_NEAR_Rust',
    tags: ['Rust', 'NEAR Protocol', 'WebAssembly', 'Smart Contracts', 'Technical Writing'],
    description:
      'A step-by-step tutorial for building NEAR smart contracts in Rust, published in Portuguese, English, and Spanish.',
    badge: '★ 18',
  },
  {
    title: 'On-Chain Chess for NEAR',
    repo: 'NCD.L1--Chess',
    tags: ['Rust', 'NEAR Protocol', 'WebAssembly', 'Smart Contracts'],
    description:
      "A chess game deployed to the NEAR network. It earned “Exceptional” level in the NEAR Certified Developer program in 2021.",
    badge: 'NCD: Exceptional',
  },
]

const heroReadouts = [
  { digits: '1M+', label: 'Events / day, zero data loss' },
  { digits: '2,000', label: 'Requests / second' },
  { digits: '−60%', label: 'Latency, after optimization' },
  { digits: '−25%', label: 'Release cycles, after CI/CD' },
]

const LANGUAGE_PIP_MAX = 3

const languages = [
  { name: 'English', level: 'Fluent', pips: 3 },
  { name: 'Portuguese', level: 'Fluent', pips: 3 },
  { name: 'Japanese', level: 'Beginner', pips: 1 },
]

const precepts = [
  'Do not think dishonestly.',
  'The way is in training.',
  'Become acquainted with every art.',
  'Know the ways of all professions.',
  'Distinguish between gain and loss in worldly matters.',
  'Develop intuitive judgement and understanding for everything.',
  'Perceive those things which cannot be seen.',
  'Pay attention even to trifles.',
  'Do nothing which is of no use.',
]

const navSections: { id: string; label: string; href?: string }[] = [
  { id: 'summary', label: 'Home', href: '#' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

// The first branch consumes "OAuth 2.0" (a version number, not a measured
// result) wholesale so its trailing ".0" can never be re-matched on its own
// as an orphan digit; the second branch is the real stat, guarded against
// starting mid-word (e.g. "S3", "K8s") — see DESIGN.md's "One Glow Rule".
const STAT_PATTERN = /(?:OAuth \d[\d.]*)|(?<![A-Za-z])(\d[\d,]*(?:\.\d+)?(?:[KM]\+?|%|\+)?)/g

function withStats(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let key = 0
  for (const match of text.matchAll(STAT_PATTERN)) {
    const [full, stat] = match
    const start = match.index
    if (start > lastIndex) nodes.push(text.slice(lastIndex, start))
    nodes.push(
      stat ? (
        <span className="stat" key={key++}>
          {stat}
        </span>
      ) : (
        full
      ),
    )
    lastIndex = start + full.length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
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

    // The shrunk rootMargin never intersects a short final section once the
    // page is scrolled to its max — force the last item active in that case.
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActiveId(ids[ids.length - 1])
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids])

  return activeId
}

function TalentTree({ groups }: { groups: Record<string, string[]> }) {
  return (
    <div className="talent-tree">
      {Object.entries(groups).map(([group, items]) => (
        <div className="talent-branch kit-frame" key={group}>
          <h3 className="talent-branch__title">{group}</h3>
          <ul className="talent-branch__list">
            {items.map((item) => (
              <li className="talent-node" key={item}>
                <span className="talent-node__diamond" aria-hidden="true" />
                <span className="talent-node__label">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
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
    <>
      <FogBackground />
      <div className="chassis">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
        <nav className="nav" aria-label="Primary">
          <span className="nav__mark">LUCAS LEMOS</span>
          <div className="nav-bar" role="group" aria-label="Section navigation">
            {navSections.map((section) => (
              <a
                key={section.id}
                className="nav-bar__item"
                href={section.href ?? `#${section.id}`}
                aria-current={activeId === section.id}
              >
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
                Senior Software Engineer — 6+ Years in Rust, Distributed Systems, Backend Infrastructure &amp;
                Blockchain
              </p>
              <p className="hero__location">Divinópolis, Minas Gerais, Brazil</p>
              <div className="hero__contact hero__contact--joined hero__contact--centered">
                <ContactLinks />
              </div>
            </div>

            <div className="readouts readouts--separated" role="group" aria-label="Career metrics">
              {heroReadouts.map((r, i) => (
                <div className="readout kit-frame readout--centered" key={r.label}>
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
          <section id="summary" className="bank" aria-label="Summary">
            <div className="bank__inner">
              <div className="prose prose--lead prose--centered">
                <p>
                  {withStats('I like to find the most optimal and effective ways for machines to solve our problems.')}
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
                <article className="job kit-frame" key={`${entry.org}-${entry.period}`}>
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
                <article className="job project kit-frame" key={project.repo}>
                  <div className="job__header">
                    <h3 className="job__role">{project.title}</h3>
                    {project.badge && <p className="project__badge stat">{project.badge}</p>}
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
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

          <section id="skills" className="bank bank--lit" aria-labelledby="skills-heading">
            <div className="bank__inner">
              <h2 className="bank__label" id="skills-heading">
                Skills
              </h2>
              <TalentTree groups={skillGroups} />
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
                  {languages.map((lang) => (
                    <div className="record" key={lang.name}>
                      <p className="record__title">{lang.name}</p>
                      <p className="record__level">
                        <span className="level-pips" aria-hidden="true">
                          {Array.from({ length: LANGUAGE_PIP_MAX }, (_, i) => (
                            <span
                              className={`level-pips__pip${i < lang.pips ? ' level-pips__pip--filled' : ''}`}
                              key={i}
                            />
                          ))}
                        </span>
                        {lang.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="quote" className="bank" aria-label="Quote">
            <div className="bank__inner">
              <blockquote className="quote">
                <p className="quote__intro">This is the way for those who want to learn my strategy:</p>
                <ul className="quote__precepts">
                  {precepts.map((precept) => (
                    <li key={precept}>{precept}</li>
                  ))}
                </ul>
                <cite className="quote__attribution">— Musashi Miyamoto</cite>
              </blockquote>
            </div>
          </section>

          <section id="contact" className="bank bank--lit" aria-labelledby="contact-heading">
            <div className="bank__inner">
              <h2 className="bank__label" id="contact-heading">
                Contact
              </h2>
              <p className="prose prose--lead">Feel free to reach out for more information.</p>
              <div className="hero__contact hero__contact--joined hero__contact--right" style={{ marginTop: '1.25rem' }}>
                <ContactLinks />
              </div>
            </div>
          </section>
        </main>

        <footer className="footer footer--centered-tight">
          <p className="footer__copy">© {new Date().getFullYear()} Lucas Lemos</p>
        </footer>
      </div>
    </>
  )
}

export default App
