import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">
        ALMONS
      </Link>

      {/* MENÚ */}
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    </nav>
  )
}

export default Navbar