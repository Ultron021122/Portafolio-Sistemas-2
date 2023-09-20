import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './HomePage';
import { Unite } from './Unite';
import { Developer } from './Developer';

export function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/unidad" element={<Unite />} />
          <Route path="/desarrollador" element={<Developer/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}
