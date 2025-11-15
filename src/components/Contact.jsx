export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Let’s connect about internships, freelance work, or collaborations.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a href="mailto:youremail@example.com" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">youremail@example.com</a>
          <a href="https://github.com/albinlazar" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
