"use client"

import useCartService from "@/lib/hooks/useCartStore"
import Link from "next/link"
import {useEffect, useState} from "react"

const Menu = () =>{
const {items} = useCartService()
const [mounted, setMounted]=useState(false)

useEffect(() => {
  setMounted(true)
},[])

return (
  <div>
    <ul className="flex items-stretch">
      <li>
      <Link className="btn btn-ghost rounded-sm" href={"/cart"}>
      Cart
      {mounted && items.length != 0 && (
        <div className="badge badge-info">
          {items.reduce((a, c) => a + c.qty, 0)}
        </div>
      )}
      </Link>
      </li>
      <li>
        <button className="btn btn-ghost rounded-sm" type="button">
          Sign in
        </button>
      </li>
    </ul>
  </div>
)
}


export default Menu