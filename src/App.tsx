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

function App() {
  return (
    <div>
      <header>
        <h1>Lucas Lemos</h1>
        <p>Senior Software Engineer — Rust, Distributed Systems &amp; Backend Infrastructure</p>
        <p>Divinópolis, Minas Gerais, Brazil</p>
        <nav aria-label="Contact">
          <ul>
            <li>
              <a href="mailto:lucas.lemos.kaihatsusha@gmail.com">lucas.lemos.kaihatsusha@gmail.com</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/lucas-alessandro-do-carmo-lemos">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/On0n0k1">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading">Summary</h2>
          <p>
            Software Engineer with 6+ years of experience specializing in Rust and distributed systems. Proven
            track record designing and building low-latency, high-throughput backend services on AWS, including
            event-driven platforms processing 1M+ events/day and data layers handling 2,000 requests/second. Broad
            experience spanning cryptography (ZK-SNARKs/STARKs, PGP, homomorphic encryption), blockchain (Solana,
            NEAR, Ethereum/EVM), authentication (OAuth 2.0, JWT), CI/CD automation, and technical leadership —
            including mentoring junior engineers and driving architecture decisions.
          </p>
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <p>
            <em>Placeholder — project case studies have not been added yet.</em>
          </p>
        </section>

        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          {experience.map((entry) => (
            <article key={`${entry.org}-${entry.period}`}>
              <h3>{entry.role}</h3>
              <p>
                {entry.org} — {entry.location}
              </p>
              <p>{entry.period}</p>
              <ul>
                {entry.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul>
            <li>Bachelor&apos;s in Computer Science — Faculdade Anhanguera, Divinópolis (2018–2022)</li>
            <li>Associate&apos;s Degree, Industrial Electronics Technology — SENAI Aniello Greco, Divinópolis (2013–2014)</li>
          </ul>
        </section>

        <section aria-labelledby="languages-heading">
          <h2 id="languages-heading">Languages</h2>
          <ul>
            <li>English: Fluent</li>
            <li>Portuguese: Fluent</li>
            <li>Japanese: Beginner</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Lucas Lemos</p>
      </footer>
    </div>
  )
}

export default App
