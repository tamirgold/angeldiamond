import Header from './components/Header'
import Hero from './components/Hero'
import PillarGrid from './components/PillarGrid'
import Ecosystem from './components/Ecosystem'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PillarGrid />
        <Ecosystem />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
