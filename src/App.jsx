import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">{/* offset for fixed navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} CS Student — Web Developer & Hosting Specialist</span>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
