import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id)

      let updatedCart

      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }]
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      return { cart: updatedCart }
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id)

      localStorage.setItem("cart", JSON.stringify(updatedCart))

      return { cart: updatedCart }
    }),
}))