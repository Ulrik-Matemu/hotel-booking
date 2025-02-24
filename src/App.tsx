import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/my-components/header'
import { EmailSubmit } from './components/my-components/email-submit'
import { Home } from './pages/home'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<><Header /><EmailSubmit /></>} />
    </Routes>
  </Router>
  )
}

export default App
