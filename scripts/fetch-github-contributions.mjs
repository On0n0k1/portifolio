#!/usr/bin/env node
// Refreshes src/data/github-contributions.json from the real GitHub GraphQL
// API via the authenticated `gh` CLI. Run manually with `npm run fetch:github`
// whenever you want an updated snapshot — the build itself just reads the
// committed JSON, so it never depends on `gh` auth being available.
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const GITHUB_USERNAME = 'On0n0k1'
const OUT_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'github-contributions.json')

const query = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      totalCommitContributions
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}`

const raw = execFileSync(
  'gh',
  ['api', 'graphql', '-f', `query=${query}`, '-f', `login=${GITHUB_USERNAME}`],
  { encoding: 'utf8' },
)

const { data } = JSON.parse(raw)
const collection = data.user.contributionsCollection
const calendar = collection.contributionCalendar

const output = {
  fetchedAt: new Date().toISOString(),
  username: GITHUB_USERNAME,
  totalContributions: calendar.totalContributions,
  totalCommitContributions: collection.totalCommitContributions,
  weeks: calendar.weeks.map((week) =>
    week.contributionDays.map((day) => ({ date: day.date, count: day.contributionCount })),
  ),
}

writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + '\n')
console.log(`Wrote ${OUT_PATH}`)
console.log(`${output.totalContributions} contributions, ${output.totalCommitContributions} commits, ${output.weeks.length} weeks`)
