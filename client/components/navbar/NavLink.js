import Link from 'next/link'
import React from 'react'

function NavLink({ href, label }) {
  return (
    <Link href={href}>
      <a className="items-center pb-1 mx-4 tracking-wider text-gray-800">
        {label}
      </a>
    </Link>
  )
}

export default NavLink
