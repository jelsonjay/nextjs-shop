"use client"

import useCartService from "@/lib/hooks/useCartStore";
import {OrderItem} from "@/lib/models/orderModel"
import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"

function AddToCart({item}:{item:OrderItem}){
  const router = useRouter()
  const {items, increase, decrease} = useCartService()
  const [exisItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((box) => box.slug === item.slug))
  }, [item, items])

  const addToCartHandler = () =>{
    increase(item)
  }
  return exisItem ?
  (
  <div>
  <button className="btn" type="button" onClick={() => decrease(exisItem)}>
   -
  </button>
  <span className="px-2">{exisItem.qty}</span>
  <button className="btn" type="button" onClick={() => increase(exisItem)}>
    +
  </button>
  </div>
  ) : (
  <>
  <button className="btn btn-primary w-full" type="button" onClick={addToCartHandler}>
   Add To Cart
  </button>
  </>
  )
}

export default AddToCart