export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern single-page portfolio built with HTML, CSS, and JavaScript, deployed on cloud hosting with CI.',
      role: 'Website Development (HTML/CSS/JS) & Hosting/Deployment',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bash'],
      live: 'https://example.com/portfolio',
      repo: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Startup Landing Page',
      description: 'Responsive landing page with smooth animations and SEO, deployed via automated pipelines.',
      role: 'Website Development (HTML/CSS/JS) & Hosting/Deployment',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bash'],
      live: 'https://example.com/startup',
      repo: 'https://github.com/yourusername/startup-landing',
    },
    {
      title: 'Docs Microsite',
      description: 'Lightweight documentation site with custom search, shipped to a CDN for fast global delivery.',
      role: 'Website Development (HTML/CSS/JS) & Hosting/Deployment',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bash'],
      live: 'https://example.com/docs',
      repo: 'https://github.com/yourusername/docs-microsite',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Work that highlights both hands-on development and end-to-end deployment.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white px-4 py-2 text-sm font-medium">
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="p-5">
                <h3 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.description}</p>
                <p className="mt-3 text-xs text-white/60">{p.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded bg-white/10 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
              <div className="px-5 pb-5 flex items-center gap-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white px-3 py-1.5 text-xs font-medium">Live Demo</a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-xs font-medium border border-white/10">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
