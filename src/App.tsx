import { profile, projects } from "./data";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProjectList } from "./components/ProjectList";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-10 sm:py-6 lg:px-12">
        <header className="mb-8 flex items-center justify-between border-b border-[var(--color-ink)]/10 pb-4 sm:mb-10 sm:pb-5">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--color-muted)]">
            Portfolio
          </p>
        </header>

        <main className="flex flex-1 flex-col gap-8">
          <ProfileHeader profile={profile} />
          <ProjectList projects={projects} />
        </main>
      </div>
    </div>
  );
}
