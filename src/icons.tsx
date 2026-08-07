type IconProps = {
  className?: string
}

const shared = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...shared} {...props} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...shared} {...props} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <line x1="7.5" y1="10" x2="7.5" y2="17" />
      <circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-4.5c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5V17" />
      <line x1="11.5" y1="10" x2="11.5" y2="17" />
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...shared} {...props} aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.2-3.03-1.2-.41-1.05-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.62.75.08-.58.32-.98.57-1.2-2-.23-4.1-1-4.1-4.44 0-.98.35-1.78.92-2.4-.09-.23-.4-1.15.09-2.4 0 0 .75-.24 2.47.92a8.5 8.5 0 0 1 4.5 0c1.72-1.16 2.47-.92 2.47-.92.5 1.25.18 2.17.1 2.4.57.62.91 1.42.91 2.4 0 3.45-2.11 4.2-4.12 4.42.33.29.62.85.62 1.72v2.55c0 .24.14.52.61.43A9 9 0 0 0 12 3z" />
    </svg>
  )
}
