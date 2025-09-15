import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Publicar from './pages/Publicar'
import FichaPropiedad from './pages/FichaPropiedad'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import WhatsappButton from './components/WhatsappButton'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import CreateUser from './pages/CreateUser'   // 👈 nuevo import
import MisPropiedades from './pages/MisPropiedades';
import Propiedades from "./pages/Propiedades";



const App = () => {
  return (
    <div className="h-full flex flex-col font-sans">
      <Header />

      {/* Contenido principal que se expande */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/propiedad/:id" element={<FichaPropiedad />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Podés agregar más rutas después */}

          {/* Rutas de Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <ProtectedRoute>
                <CreateUser />
              </ProtectedRoute>
            }
          />
          <Route
  path="/mis-propiedades"
  element={
    <ProtectedRoute>
      <MisPropiedades />
    </ProtectedRoute>
  }
/>
        </Routes>
      </main>

      <WhatsappButton />
      <Footer />
    </div>
  )
}

export default App
