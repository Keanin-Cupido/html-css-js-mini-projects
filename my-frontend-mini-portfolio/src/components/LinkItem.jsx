import React from 'react'
import Link from 'next/link'

const linkStyles = 'hover:text-[#89B3E6]'

const LinkItem = ({linkName, href}) => {
  return (
    <Link href={href} className={linkStyles}>
        {linkName}
    </Link>
  )
}

export default LinkItem