import { useState } from "react"

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

    console.log("Registro:", form)
    alert("Usuario registrado correctamente 🎉")
  }

  return (
    <div>
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={form.apellido}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}

        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          
        />


        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Register