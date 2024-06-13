import React from 'react'
import Button from '../components/Button/index.js';
import LinkItem from './LinkItem'
import { Icon } from '@iconify/react';

const Nav = () => {
  return (
    <nav className={'bg-[#1D4E89] p-2 pl-4 pr-4 font-bold border-b-4 border-b-[#89B3E6]'}>
        <div className="container mx-auto flex flex-row items-center justify-between text-sm">
          <p className="font-black tracking-wider text-lg hover:scale-110 cursor-pointer transition-transform flex flex-row items-center justify-center gap-2">
            <Icon icon={`mingcute:device-fill`} style={{ fontSize: '1.5em' }} />
            MiniDev
          </p>
          <ul className={'flex flex-row items-center justify-center gap-8 font-normal text-base tracking-wide'}>
              <LinkItem href={'/'} linkName={'Home'} icon={'majesticons:home'} />
              <LinkItem href={'/projects'} linkName={'Projects'} icon={'grommet-icons:projects'} />
              <LinkItem href={'/about'} linkName={'About'} icon={'mdi:about'} />
              <Button href={'/contact'} text="Contact" icon={'mdi:contact'} />
          </ul>
        </div>
    </nav>
  )
}

export default Nav