import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './assets/components/layout/header'
import MainContent from './assets/components/layout/maincontent'
import Footer from './assets/components/layout/footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

