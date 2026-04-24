import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px"
    }}>
      <h2>Tienda</h2>

      <div>
        <Link to="/"><button>Inicio</button></Link>
        <Link to="/cart"><button>Carrito</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </nav>
  )
}