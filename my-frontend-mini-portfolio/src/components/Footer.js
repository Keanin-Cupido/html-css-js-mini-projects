'use client'

import React from 'react'
import LinkItem from './LinkItem'
import { Icon } from '@iconify/react';
import { usePathname, useSearchParams } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  let showHeader = pathname.includes("projectView") ? false : true;

  return (
    <div>
      {
        showHeader &&
        <nav className={'p-12 pl-4 pr-4 font-bold mt-8'}>
            <div className="container mx-auto flex flex-row items-center justify-center gap-4 text-sm">
              <p className="font-black tracking-wider text-lg hover:scale-110 cursor-pointer transition-transform flex flex-row items-center justify-center gap-2">
                <Icon icon={`mingcute:device-fill`} style={{ fontSize: '1.5em' }} />
                MiniDev
              </p>
              <p className="font-normal">©2024 MiniDev. All rights reserved.</p>
            </div>
        </nav>
      }
    </div>
  )
}

export default Footer;