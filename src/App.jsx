import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import FichaPropiedad from './pages/FichaPropiedad'


const App = () => {
  return (
    <div className="font-sans bg-boneWhite min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicar" element={<Publicar />} />
          <Route path="/propiedad/:id" element={<FichaPropiedad />} />

        {/* Podés agregar más rutas después */}
      </Routes>
    </div>
  )
}

export default App
