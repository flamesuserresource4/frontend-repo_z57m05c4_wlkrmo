import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-6xl h-full px-4 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">CS Student • Web Developer • Hosting Specialist</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building and Deploying <span className="text-indigo-300">Seamless</span> Digital Experiences
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            I focus on modern front-end development and the full deployment lifecycle — from coding to cloud hosting.
          </p>
          <div className="mt-6">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-3 text-sm font-medium transition-colors">
              View My Projects
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
    </section>
  );
}
