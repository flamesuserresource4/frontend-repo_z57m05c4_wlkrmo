export default function Skills() {
  const categories = [
    {
      title: 'Web Development & Core Languages',
      items: [
        { name: 'HTML', tag: 'Intermediate' },
        { name: 'CSS', tag: 'Intermediate' },
        { name: 'JavaScript', tag: 'Intermediate' },
        { name: 'C', tag: 'Intermediate' },
        { name: 'SQL', tag: 'Intermediate' },
      ],
    },
    {
      title: 'Deployment & Tooling',
      items: [
        { name: 'Hosting', tag: 'Intermediate' },
        { name: 'Code', tag: 'Intermediate' },
        { name: 'Code Checking', tag: 'Intermediate' },
        { name: 'Bash', tag: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A focused toolkit to ship production-ready sites and deploy them with confidence.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{cat.title}</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
