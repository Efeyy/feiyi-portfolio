import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TencentDashboard from './pages/TencentDashboard'
import DrugSideEffects from './pages/DrugSideEffects'
import GridStateFormer from './pages/GridStateFormer'
import IceDiscourse from './pages/IceDiscourse'
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
            <Route path="/projects/gridstateformer" element={<GridStateFormer />} />
            <Route path="/projects/ice-discourse" element={<IceDiscourse />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
