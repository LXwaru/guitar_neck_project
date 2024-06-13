import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Nav'
import HomePage from './HomePage'
import Footer from './Footer'
import GuitarNeckNotes from './GuitarNeckNotes'  
import GuitarNeckIntervals from './GuitarNeckIntervals'
import GuitarNeckTriads from './GuitarNeckTriads'


function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GuitarNeckNotes" element={<GuitarNeckNotes />} />
          <Route path="/GuitarNeckIntervals" element={<GuitarNeckIntervals />} />
          <Route path="/GuitarNeckTriads" element={<GuitarNeckTriads />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App