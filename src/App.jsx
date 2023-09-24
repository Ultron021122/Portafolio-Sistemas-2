import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './HomePage';
import { Activity } from './Activity';
import { Developer } from './Developer';
import { NotFound } from './NotFound';
import { Unite } from './components/Unite1';

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
          <Route path="/actividades/unidad/1" element={<Unite />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}
