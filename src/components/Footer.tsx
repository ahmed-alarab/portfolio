import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between lg:px-8">
        <p className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
