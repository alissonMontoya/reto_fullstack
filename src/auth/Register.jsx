import { useState } from "react"



export default function Register() {
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
    console.log(form)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Crear cuenta</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="input"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="input"
        />

        <button className="btn">Registrarse</button>
      </form>
    </div>
  )
}
<input
  type="password"
  name="confirmPassword"
  placeholder="Confirmar contraseña"
  className="input"
/>
const handleSubmit = (e) => {
  e.preventDefault()

  // 🔒 VALIDACIÓN
  if (form.password.length < 6) {
    alert("La contraseña debe tener mínimo 6 caracteres")
    return
  }

  // ✅ SI PASA VALIDACIÓN
  console.log(form)
}

if (!form.email.includes("@")) {
  alert("Correo inválido")
  return
}