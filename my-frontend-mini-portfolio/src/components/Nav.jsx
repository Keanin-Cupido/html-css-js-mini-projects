import React from 'react'
import LinkItem from './LinkItem'

const Nav = () => {
  return (
    <nav className={'bg-[#1D4E89] p-4 pl-4 pr-4 font-bold'}>
        <div className="container mx-auto flex flex-row items-center justify-between text-sm">
          <p className="font-black tracking-wider text-lg">Mini Dev</p>
          <ul className={'flex flex-row items-center justify-center gap-4 font-bold'}>
              <LinkItem href={'/'} linkName={'Home'} />
              <LinkItem href={'/projects'} linkName={'Projects'} />
              <LinkItem href={'/about'} linkName={'About'} />
          </ul>
        </div>
    </nav>
  )
}

export default Nav