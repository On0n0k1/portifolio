# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript, static build (Vite), deployed to GitHub Pages.

## Users

Recruiters and hiring managers evaluating Lucas for a job. They are time-constrained and scanning for proof of skill, relevant experience, and a fast way to reach out or view work samples.

## Product Purpose

A personal portfolio site that presents Lucas's projects and background to convince a hiring manager he is worth interviewing, and gives them a clear path to contact him or view his work in more depth.

## Positioning

Senior software engineer with 6+ years specializing in Rust and distributed systems: low-latency, high-throughput backend infrastructure on AWS (event-driven platforms processing 1M+ events/day, data layers at 2,000 req/s), plus unusually broad depth in cryptography (ZK-SNARKs/STARKs, PGP, homomorphic encryption) and blockchain (Solana, NEAR, Ethereum/EVM). The combination of production distributed-systems rigor with applied cryptography/blockchain expertise is the differentiator versus a generic backend engineer.

## Operating Context

Recruiters typically view this on desktop during a screening pass, and may also open it on mobile from a resume link or LinkedIn. Expect short attention spans and skimming behavior.

## Capabilities and Constraints

- Static site only — no backend, no server-rendered or dynamic content.
- Real bio/experience content comes from the CV (see Evidence below). Project case studies are not yet available and will ship as clearly-marked placeholders until supplied.
- Deploy target is GitHub Pages, which constrains routing (no server-side rewrites — use hash routing or a single-page layout) and asset base paths.

## Evidence on Hand

Real CV on file at `Lucas_Lemos_CV.pdf`:

- **Name/title:** Lucas Lemos — Senior Software Engineer, Rust / Distributed Systems / Backend Infrastructure. Based in Divinópolis, Minas Gerais, Brazil.
- **Contact:** lucas.lemos.kaihatsusha@gmail.com · linkedin.com/in/lucas-alessandro-do-carmo-lemos · github.com/On0n0k1
- **Summary:** 6+ years experience, Rust and distributed systems specialist. Low-latency/high-throughput backend services on AWS, event-driven platforms (1M+ events/day), data layers (2,000 req/s). Cryptography (ZK-SNARKs/STARKs, PGP, homomorphic encryption), blockchain (Solana, NEAR, Ethereum/EVM), auth (OAuth 2.0, JWT), CI/CD automation, mentoring/technical leadership.
- **Experience** (reverse chronological):
  1. Senior Software Engineer — NDA Contract, Remote (Jan 2026–May 2026): Rust APIs for automated Solana asset trading; 60% latency reduction; Redis caching layer (-40% peak load); Prometheus/Grafana observability; OAuth 2.0 + payment gateway integration; mentoring.
  2. Software Engineer — Deckers Brands, Goleta CA (Remote) (Aug 2024–Dec 2025): Event-driven multi-region data platform in Rust (Lambda, API Gateway, SQS, DynamoDB Streams, S3), 1M+ events/day, zero data loss across 4 regions; high-throughput ingestion/data layer (DynamoDB, Aurora/PostgreSQL, SeaORM) at 2,000 req/s; secure file delivery pipeline (Lambda, S3, Secrets Manager, AWS Transfer Family/SFTP, PGP), sub-30s partner transfers; async Rust (Tokio, Reqwest) third-party integrations.
  3. Lead Developer — PrivID, Toronto, Canada (Remote) (Jan 2023–Jul 2024): Low-latency Rust APIs; ZK-SNARK/STARK systems; Rust/WASM modules; Docker/Kubernetes on AWS Linux; GitLab CI/CD (-25% release cycle time); mentoring; patent-backed system design.
  4. Blockchain Developer — NEAR Foundation, Remote (Jan 2022–Aug 2022): Helped companies launch NFTs/Web3 services; training/workshops on Rust + blockchain dev; tutorials on smart contracts; contributions to NEAR Protocol SDK; real-time blockchain event listeners; Aurora (NEAR EVM layer) ↔ Ethereum integration with Solidity contracts.
  5. Web Developer (Freelance) — IT Services & Consulting, Divinópolis, Brazil (Remote) (Oct 2020–Dec 2021): Full-stack React/Node.js/Rust features for multiple clients; Rust services on GCP/AWS; WebAssembly for browser data processing; client-side JS bug fixes.
- **Skills:** Languages — Rust, Python, TypeScript, Node.js, C, Java, Go. Backend/Architecture — distributed systems, event-driven architecture, microservices, REST, gRPC, WebSockets, TDD, async/parallel programming, clean architecture. Cloud/Infra — AWS (Lambda, SQS, DynamoDB, Aurora RDS, S3, EKS, EventBridge, Secrets Manager, KMS, CloudWatch, CloudFront, VPC, EC2, IAM), Docker, Kubernetes, Terraform, Linux (production). Blockchain/Crypto — Solana, NEAR, Ethereum/EVM, Solidity, WASM, ZK-SNARKs/STARKs, PGP, RSA, AES, ECDH, homomorphic encryption (FHE, TFHE). Auth/Security — OAuth 2.0, JWT, public key cryptography. Frameworks — Tokio, Axum, Actix, Rocket-rs, React. Databases/Messaging — PostgreSQL, MySQL, DynamoDB, MongoDB, Redis, Kafka, Redis Streams, SQL/NoSQL. Observability — Prometheus, Grafana, metrics/logging/tracing. Other — Git, GitHub Actions, GitLab CI/CD, Jira, Confluence, Agile.
- **Education:** B.Sc. Computer Science, Faculdade Anhanguera, Divinópolis (2018–2022). Associate's, Industrial Electronics Technology, SENAI Aniello Greco, Divinópolis (2013–2014).
- **Languages spoken:** English (fluent), Portuguese (fluent), Japanese (beginner).

Project case studies: none supplied yet — user confirmed projects will be added later. Placeholder project cards must be visibly marked as such so they are not mistaken for real claims. No headshot/photo supplied yet.

## Product Principles

1. Optimize for a recruiter skimming in under a minute: lead with what Lucas does and the strongest proof points.
2. Every placeholder must be obviously a placeholder — never fabricate specific claims, employers, metrics, or testimonials.
3. Keep the stack static and GitHub Pages-compatible; no assumptions that require a server.
4. Provide a clear, low-friction path to contact/reach out from any page.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility practice.
