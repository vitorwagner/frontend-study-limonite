import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Team from './pages/Team'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  )
}

export default App
