import React from 'react'
import LinkItem from './LinkItem'

const Nav = () => {
  return (
    <nav className={'bg-[#1D4E89] p-4 pl-4 pr-4 font-bold border-b-4 border-b-[#89B3E6]'}>
        <div className="container mx-auto flex flex-row items-center justify-between text-sm">
          <p className="font-black tracking-wider text-lg hover:scale-110 cursor-pointer transition-transform">MiniDev</p>
          <ul className={'flex flex-row items-center justify-center gap-6 font-normal text-base tracking-wide'}>
              <LinkItem href={'/'} linkName={'Home'} />
              <LinkItem href={'/projects'} linkName={'Projects'} />
              <LinkItem href={'/about'} linkName={'About'} />
          </ul>
        </div>
    </nav>
  )
}

export default Nav