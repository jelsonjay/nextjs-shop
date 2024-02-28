import { create } from "zustand"
import { round2 } from "../utilis"
import { OrderItem } from "../models/orderModel"
import { persist } from "zustand/middleware"

type Cart = {
  items:OrderItem[]
  itemsPrice: number
  taxPrice: number
  shippingPrice:number
  totalPrice: number
}
const initialState: Cart ={
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
}

export const cartStore = create<Cart>()(
  persist(() => initialState, {
  name: "cartStore"
  })
  )



export default function useCartService(){

  const {items, itemsPrice, taxPrice, shippingPrice, totalPrice} = cartStore()
  return{
  items,
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice, 


  //---INCREASE FUNC-----
  increase: (item: OrderItem) => {
  const exist = items.find((itemCart) => itemCart.slug === item.slug)
  const updatedCartItems = exist ? items && items.map((cartItem) => cartItem.slug === item.slug ? {...exist, qty: exist.qty + 1} : cartItem ) : [...items, {...item, qty: 1}]
  const {itemsPrice, shippingPrice, taxPrice, totalPrice} = calculetPrice(updatedCartItems)
  cartStore.setState({
  items: updatedCartItems,
  itemsPrice,
  shippingPrice,
  taxPrice,
  totalPrice
  })

  },


  //---DECREASE FUNC-----
  decrease : (item: OrderItem) => {
  const exist = items.find((itemCart) => itemCart.slug === item.slug)

  if(!exist) return
  const updatedCartItems = exist.qty === 1 ? items.filter((boxItem: OrderItem) => boxItem.slug !== item.slug) : items.map((box) => item.slug ? {...exist, qty: exist.qty - 1} : box)

  const {itemsPrice, shippingPrice, taxPrice, totalPrice} = calculetPrice(updatedCartItems)

  cartStore.setState({
  items: updatedCartItems,
  itemsPrice,
  shippingPrice,
  taxPrice,
  totalPrice
  })



  }

  }
}

const calculetPrice = (items: OrderItem[]) =>{

  const itemsPrice = round2(
  items.reduce((acc, item) => acc + item.price * item.qty, 0)
  ),
  shippingPrice = round2(itemsPrice > 100 ? 0 : 100), 

  taxPrice = round2(Number(0.15 * itemsPrice)),

  totalPrice = round2(itemsPrice + shippingPrice + taxPrice)

  return {itemsPrice, shippingPrice, taxPrice, totalPrice}

}