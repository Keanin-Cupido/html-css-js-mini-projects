import React from 'react'
import Link from 'next/link'

const linkStyles = 'text-md font-light hover: font-bold '

const LinkItem = ({linkName, href}) => {
  return (
    <Link href={href} className={linkStyles}>
        {linkName}
    </Link>
  )
}

export default LinkItem