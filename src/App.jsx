import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar1"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Interest from "./pages/Interest"
import Award from "./pages/Award"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/award" element={<Award />} />
      </Routes>
    </Router>
  )
}

export default App
