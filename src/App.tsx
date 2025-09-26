import type { JSX } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "@/App.css"
import Build from "@/pages/media/Build.tsx"
import Comps from "@/pages/media/Comps.tsx"
import Data from "@/pages/Data.tsx"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from "@/pages/Home.tsx"
import Poseidon from "@/pages/Poseidon.tsx"
import Media from "@/pages/Media.tsx"
import Other from "@/pages/media/Other.tsx"
import Team from "@/pages/Team.tsx"
import Videos from "@/pages/media/Videos.tsx"

const App = (): JSX.Element => {
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
  );
};

export default App;
