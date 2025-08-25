import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import FichaPropiedad from './pages/FichaPropiedad'
import Nosotros from "./pages/Nosotros"
import Contacto from './pages/Contacto';
import WhatsappButton from './components/WhatsappButton';





const App = () => {
  return (
    <div className="font-sans bg-boneWhite min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicar" element={<Publicar />} />
          <Route path="/propiedad/:id" element={<FichaPropiedad />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          



        {/* Podés agregar más rutas después */}
      </Routes>
            <WhatsappButton />

      <Footer />

    </div>
  )
}

export default App
