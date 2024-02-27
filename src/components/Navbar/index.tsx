import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
        <Link href={"/"} className='btn btn-ghost text-lg'>
          Shop
        </Link>
        <ul className='flex'>
        <li>
          <Link href={"/cart"} className='btn btn-ghost rounded-btn'>Cart</Link>
        </li>
        <li>
          <Link href={"/sign"} className='btn btn-ghost rounded-btn'>Sign in</Link>
        </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
