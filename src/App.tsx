import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark text-brand-light">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
