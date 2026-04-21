import type { Profile } from '../types'

type ProfileHeaderProps = {
  profile: Profile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--color-ink)]/10 bg-[var(--color-card)] p-8 shadow-[0_24px_80px_rgba(18,18,18,0.08)] sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.52),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(23,23,23,0.06),_transparent_30%)]" />
      <div className="relative flex flex-col gap-8">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">Profile</p>
          <div className="space-y-4">
            <h1 className="font-display text-6xl leading-none sm:text-7xl">{profile.name}</h1>
            <p className="max-w-3xl whitespace-pre-line text-lg leading-8 text-[var(--color-muted)]">
              {profile.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="rounded-full border border-[var(--color-ink)]/10 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="rounded-full border border-[var(--color-ink)]/10 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                className="rounded-full border border-[var(--color-ink)]/10 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
