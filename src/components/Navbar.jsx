import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      background: "white",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ margin: 0 }}>Almons</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/"><button className="btn">Inicio</button></Link>
        <Link to="/cart"><button className="btn">Carrito</button></Link>
        <Link to="/login"><button className="btn">iniciar sesión</button></Link>
         <Link to="/login"><button className="btn">Registrarse</button></Link>
      </div>
    </nav>
  )
}