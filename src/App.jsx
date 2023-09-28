import Navbar from '@/components/public/Navbar'
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </Router>
    </>
  )
}

export default App
