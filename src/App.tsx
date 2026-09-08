import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
