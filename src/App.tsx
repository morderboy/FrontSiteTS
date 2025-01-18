import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { SkillsPage } from './pages/SkillsPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
