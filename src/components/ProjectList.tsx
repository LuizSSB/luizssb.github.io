import { useState } from "react";
import type { Project } from "../types";

type ProjectListProps = {
  projects: Project[];
};

function formatDate(date: Project["date"]) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function sortProjectsByDate(projects: Project[]) {
  return [...projects].sort((left, right) => {
    return new Date(right.date).getTime() - new Date(left.date).getTime();
  });
}

function collectTags(
  projects: Project[],
  pickTags: (project: Project) => string[],
) {
  const tagStats = new Map<string, { count: number; mostRecentDate: number }>();

  for (const project of projects) {
    const projectDate = new Date(project.date).getTime();

    for (const tag of pickTags(project)) {
      const current = tagStats.get(tag);

      if (!current) {
        tagStats.set(tag, { count: 1, mostRecentDate: projectDate });
        continue;
      }

      current.count += 1;
      current.mostRecentDate = Math.max(current.mostRecentDate, projectDate);
    }
  }

  return [...tagStats.entries()]
    .sort((left, right) => {
      if (right[1].count !== left[1].count) {
        return right[1].count - left[1].count;
      }

      if (right[1].mostRecentDate !== left[1].mostRecentDate) {
        return right[1].mostRecentDate - left[1].mostRecentDate;
      }

      return left[0].localeCompare(right[0]);
    })
    .map(([tag, stats]) => ({ tag, ...stats }));
}

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const sortedProjects = sortProjectsByDate(projects);
  const languageTags = collectTags(sortedProjects, (project) => project.languages);
  const typeTags = collectTags(sortedProjects, (project) => project.types);
  const filteredProjects = selectedTag
    ? sortedProjects.filter((project) =>
        [...project.languages, ...project.types].includes(selectedTag),
      )
    : sortedProjects;

  return (
    <section className="rounded-[2rem] border border-[var(--color-ink)]/10 bg-white/70 p-4 backdrop-blur sm:p-8">
      <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-4xl">
            Technical evidence (coding assessments)
          </h2>
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          {filteredProjects.length} projects
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <button
          type="button"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            selectedTag === null
              ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
              : "border-[var(--color-ink)]/10 bg-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          }`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Languages
          </p>
          <div className="flex flex-wrap gap-3">
            {languageTags.map((tag) => (
              <button
                key={tag.tag}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedTag === tag.tag
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "border-[var(--color-ink)]/10 bg-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                onClick={() => setSelectedTag(tag.tag)}
              >
                {tag.tag} ({tag.count})
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Project types
          </p>
          <div className="flex flex-wrap gap-3">
            {typeTags.map((tag) => (
              <button
                key={tag.tag}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedTag === tag.tag
                    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "border-[var(--color-ink)]/10 bg-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                onClick={() => setSelectedTag(tag.tag)}
              >
                {tag.tag} ({tag.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <article
            key={project.name}
            className="rounded-[1.6rem] border border-[var(--color-ink)]/10 bg-[var(--color-card)] p-4 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(18,18,18,0.08)] sm:p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              {project.types.map((type) => (
                <span
                  key={type}
                  className="rounded-full bg-[var(--color-ink)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--color-paper)]"
                >
                  {type}
                </span>
              ))}
              <span className="text-sm text-[var(--color-muted)]">
                {formatDate(project.date)}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold">{project.name}</h3>
            <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[...project.languages, ...project.frameworks].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-ink)]/10 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.urls.map((url) => (
                <a
                  key={url.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/8 px-4 py-2 text-sm font-medium text-[var(--color-accent)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/14"
                  href={url.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{url.label}</span>
                  <span className="text-base transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
