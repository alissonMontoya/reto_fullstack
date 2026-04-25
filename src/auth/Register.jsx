import { useState } from "react"
import "./auth.css"

const Register = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.nombre || !form.apellido || !form.email || !form.password) {
      alert("Todos los campos son obligatorios")
      return
    }

    if (form.password.length < 6) {
      alert("La contraseña debe tener mínimo 6 caracteres")
      return
    }

    // guardar usuario (SIMULADO para el taller)
    localStorage.setItem("user", JSON.stringify(form))

    alert("Usuario registrado correctamente 🎉")
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Crear cuenta</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input name="nombre" placeholder="Nombre" onChange={handleChange} />
          <input name="apellido" placeholder="Apellido" onChange={handleChange} />
          <input name="email" placeholder="Correo" onChange={handleChange} />
          <input name="password" placeholder="Contraseña" onChange={handleChange} />

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  )
}

export default Register