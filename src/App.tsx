import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Brand from './pages/Brand'
import Collections from './pages/Collection'
import Content from './pages/Content'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function RedirectHandler() {
  const { pathname } = useLocation()
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect && redirect !== pathname) {
      sessionStorage.removeItem('redirect')
      window.history.replaceState(null, '', redirect)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RedirectHandler />
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/content" element={<Content />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
