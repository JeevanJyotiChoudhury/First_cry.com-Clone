import React, { useState } from 'react'

const Cart = () => {

  let cartProduct=JSON.parse(localStorage.getItem("cartItem"))
  console.log(cartProduct)

  const[cartProd,setCartProd] = useState(cartProduct)

  return (
    <div>Cart</div>
  )
}

export default Cart