import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { HashRouter, Routes, Route } from "react-router-dom"

import Login from "./auth/Login"
import Register from "./auth/Register"

import Navbar from "./components/Navbar"

function App() {
  return (
    <HashRouter>
      <Navbar />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App