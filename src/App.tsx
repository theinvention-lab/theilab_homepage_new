import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import VentureStudio from './pages/capabilities/VentureStudio'
import NewBizDesign from './pages/capabilities/NewBizDesign'
import VentureBuilding from './pages/capabilities/VentureBuilding'
import StrategicPartnership from './pages/capabilities/StrategicPartnership'
import GlobalExpansion from './pages/capabilities/GlobalExpansion'
import Cases from './pages/Cases'
import ProjectDetail from './pages/ProjectDetail'
import PortfolioDetail from './pages/PortfolioDetail'
import Insights from './pages/Insights'
import PressDetail from './pages/PressDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Concepts from './pages/Concepts'
import ConceptBar from './concepts/ConceptBar'
import './concepts/concept-bar.css'
const EditorialConcept = lazy(() => import('./concepts/editorial'))
const TerminalConcept = lazy(() => import('./concepts/terminal'))
const BentoConcept = lazy(() => import('./concepts/bento'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/c/')) {
    return (
      <>
        <ScrollToTop />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/c/editorial" element={<EditorialConcept />} />
          <Route path="/c/terminal" element={<TerminalConcept />} />
          <Route path="/c/bento" element={<BentoConcept />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <ConceptBar />
      </>
    )
  }
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities/venture-studio" element={<VentureStudio />} />
          <Route path="/capabilities/new-biz-design" element={<NewBizDesign />} />
          <Route path="/capabilities/venture-building" element={<VentureBuilding />} />
          <Route path="/capabilities/strategic-partnership" element={<StrategicPartnership />} />
          <Route path="/capabilities/global-expansion" element={<GlobalExpansion />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/project/:id" element={<ProjectDetail />} />
          <Route path="/cases/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/press/:id" element={<PressDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
