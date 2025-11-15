export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Let’s connect about internships, freelance work, or collaborations.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a
            href="mailto:albincl128@gmail.com"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Send an email to albincl128@gmail.com"
          >
            albincl128@gmail.com
          </a>
          <a
            href="https://github.com/albinlazar"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Open GitHub profile in a new tab"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/albin-c-l-95004b360/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Open LinkedIn profile in a new tab"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
