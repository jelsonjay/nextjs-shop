import React from 'react'
import CartItems from './CartItems'

export const metadata = {
  title: "Shopping Cart",
}


const CartPage = () => {
  return (
    <section>
      <CartItems />
    </section>
  )
}

export default CartPage