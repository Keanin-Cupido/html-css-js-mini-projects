import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';

const linkStyles = 'hover:text-[#89B3E6] flex items-center justify-center gap-2'

const LinkItem = ({linkName, href, icon}) => {
  return (
    <Link href={href} className={linkStyles}>
        {
          icon ? <Icon icon={icon} style={{ fontSize: '1.5em' }} /> : null
        }
        {linkName}
    </Link>
  )
}

export default LinkItem