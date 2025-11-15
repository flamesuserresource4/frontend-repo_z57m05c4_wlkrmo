export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-980 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <p className="text-white/80 leading-relaxed">
            I’m a CS student focused on crafting fast, accessible web interfaces and shipping them to production. I love the full path from writing clean code to configuring domains, SSL, and CI for reliable deployments.
          </p>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Front-end development with semantic HTML, modern CSS, and JavaScript</li>
              <li>• Hosting on modern platforms with automated builds</li>
              <li>• Monitoring performance and optimizing delivery</li>
              <li>• Writing Bash scripts to streamline setup and checks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
