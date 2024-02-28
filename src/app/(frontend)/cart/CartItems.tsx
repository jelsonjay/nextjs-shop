"use client"
import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {useEffect, useState} from 'react'

const CartItems = () => {
  const router = useRouter()
  const {items, itemsPrice, increase, decrease} = useCartService()
  const [monted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  if(!monted) return

  return (
    <section>
    <h2 className='py-4 text-3xl'>Shopping Cart</h2>

    {
      items.length === 0 ? (
      <article>
      Cart is empty <Link href={"/"}>Go shopping</Link>
      </article>
      ) : (
      <div className='grid md:grid-cols-4 md:gap-5'>
      <div className="overflow-x-auto md:col-span-3">
      <table className='table'>
      <thead>
      <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {
        items && items.map((item) => (
        <tr key={item.slug}>
        <td>
        <Link href={`/product/${item.slug}`}>{item.slug}
        <Image src={item.image} alt={item.name}
        width={50}
        height={50}
        />
        <span className='px-2'>{item.name}</span>
        </Link>
        </td>
        <td>
        <button className='btn' type='button' onClick={() => decrease(item)}>-</button>
        <span className='px-2'>{item.qty}</span>
        <button className='btn' type='button' onClick={() => increase(item)}>+</button>
        </td>
        <td className=''>£{item.price}</td>
        </tr>
        ))
      }
      </tbody>
      </table>
      </div>

      <div>
        <div className="card bg-base-300">
          <div className="card-body">
          <ul>
          <li>
          <div className="pb-3 text-xl">
          Subtotal ({items.reduce((a, c) => a + c.qty, 0)}) : £{itemsPrice}
          </div>
          </li>
          <li>
          <button className='btn btn-info w-full' onClick={() => router.push("/shipping")}>Proceed to Checkout</button>
          </li>
          </ul>
          </div>
        </div>
      </div>
      </div>
      
      )
    }
    
    </section>
  )
}

export default CartItems