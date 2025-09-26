import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import Home from "./pages/Home.tsx"
import Poseidon from "./pages/Poseidon.tsx"
import Team from "./pages/Team.tsx"
import Media from "./pages/Media.tsx"
import Comps from "./pages/media/Comps.tsx"
import Build from "./pages/media/Build.tsx"
import Other from "./pages/media/Other.tsx"
import Videos from "./pages/media/Videos.tsx"
import Data from "./pages/Data.tsx"

function App() {

  return (
    <Router>
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/comps" element={<Comps />} />
          <Route path="/media/build" element={<Build />} />
          <Route path="/media/other" element={<Other />} />
          <Route path="/media/videos" element={<Videos />} />
          <Route path="/poseidon" element={<Poseidon />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App
