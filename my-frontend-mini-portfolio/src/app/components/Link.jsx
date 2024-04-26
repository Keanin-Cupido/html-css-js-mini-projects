import React from 'react'

const linkStyles = 'text-md hover: font-bold '

const Link = ({linkName, href}) => {
  return (
    <a href={href} className={linkStyles}>
        {linkName}
    </a>
  )
}

export default Link