import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlantProfile from './pages/PlantProfile';
import Compounds from './pages/compounds';
import Families from './pages/Families';
import About from './pages/About';
import Contacts from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* 1. Rendered here so every page click resets scroll position to top */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plant/:id" element={<PlantProfile />} />
          <Route path="compounds" element={<Compounds />} />
          <Route path="families" element={<Families />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}