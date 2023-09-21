import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './HomePage';
import { Activity } from './Activity';
import { Developer } from './Developer';
import { NotFound } from './NotFound';

export function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/actividades" element={<Activity />} />
          <Route path="/desarrollador" element={<Developer/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}
