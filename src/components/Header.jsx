import React, { useState } from 'react'
import logo from '../assets/logo_tu_inmobiliaria_PNG.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-emeraldDark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Tu Inmobiliaria Online" className="h-20 w-auto" />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gold transition">Comprar</Link>
          <Link to="/" className="hover:text-gold transition">Alquilar</Link>
          <Link to="/publicar" className="hover:text-gold transition">Vender</Link>
          <Link to="/" className="hover:text-gold transition">Nosotros</Link>
          <Link to="/" className="hover:text-gold transition">Contacto</Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-emeraldDark px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gold transition">Comprar</Link>
            <Link to="/" className="hover:text-gold transition">Alquilar</Link>
            <Link to="/publicar" className="hover:text-gold transition">Vender</Link>
            <Link to="/" className="hover:text-gold transition">Nosotros</Link>
            <Link to="/" className="hover:text-gold transition">Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
