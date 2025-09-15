import React, { useState, useEffect } from 'react'
import logo from '../assets/logosinfondosmart.png'
import { Link } from 'react-router-dom'
import { supabase } from "../lib/supabase"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [session, setSession] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setRole(data.session?.user?.user_metadata?.role || null)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setRole(session?.user?.user_metadata?.role || null)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setRole(null)
  }

  const panelLink = role === "admin" ? "/admin" : "/mis-propiedades"

  return (
    <header className="bg-emeraldDark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img 
            src={logo} 
            alt="Inmobiliaria Smart" 
            className="h-[9rem] md:h-[10rem] w-auto" 
          />
        </Link>

        {/* Botón menú mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6 text-lg items-center">
          <Link to="/propiedades" className="hover:text-gold transition">Propiedades</Link>
          <Link to="/publicar" className="hover:text-gold transition">Tengo una propiedad</Link>
          <Link to="/nosotros" className="hover:text-gold transition">Nosotros</Link>
          <Link to="/contacto" className="hover:text-gold transition">Contacto</Link>

          {session ? (
            <>
              <Link
                to={panelLink}
                className="bg-gold text-emeraldDark px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Mi Panel
              </Link>
              <button
                onClick={handleLogout}
                className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="bg-gold text-emeraldDark px-3 py-1 rounded hover:bg-yellow-500 transition"
            >
              Iniciar sesión
            </Link>
          )}
        </nav>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-emeraldDark px-4 pb-4">
          <nav className="flex flex-col space-y-2 text-lg">
            <Link to="/propiedades" className="hover:text-gold transition">Propiedades</Link>
            <Link to="/publicar" className="hover:text-gold transition">Tengo una propiedad</Link>
            <Link to="/nosotros" className="hover:text-gold transition">Nosotros</Link>
            <Link to="/contacto" className="hover:text-gold transition">Contacto</Link>

            {session ? (
              <>
                <Link
                  to={panelLink}
                  className="bg-gold text-emeraldDark px-3 py-1 rounded hover:bg-yellow-500 transition"
                >
                  Mi Panel
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-left"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="bg-gold text-emeraldDark px-3 py-1 rounded hover:bg-yellow-500 transition"
              >
                Iniciar sesión
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
