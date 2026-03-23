import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TencentDashboard from './pages/TencentDashboard'
import DrugSideEffects from './pages/DrugSideEffects'
import CampusAdvisory from './pages/CampusAdvisory'
import Resume from './pages/Resume'

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/tencent-dashboard" element={<TencentDashboard />} />
            <Route path="/projects/drug-side-effects" element={<DrugSideEffects />} />
            <Route path="/projects/campus-advisory" element={<CampusAdvisory />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
