import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Galeria from './pages/Galeria';
import Reservar from './pages/Reservar';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Tienda from './pages/Tienda';
import Nosotros from './pages/Nosotros';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashDone = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      {splashDone && (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="servicios" element={<Servicios />} />
              <Route path="galeria" element={<Galeria />} />
              <Route path="reservar" element={<Reservar />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogPost />} />
              <Route path="tienda" element={<Tienda />} />
              <Route path="nosotros" element={<Nosotros />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
