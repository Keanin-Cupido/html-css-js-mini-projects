import React from 'react'
import LinkItem from './LinkItem'

const Nav = () => {
  return (
    <nav className={'h-full min-h-screen bg-neutral-800 p-6 pl-8 pr-8 text-zinc-200 font-semibold flex flex-col items-center justify-center gap-4'}>
        <ul className={'flex flex-col items-center justify-center gap-4'}>
            <LinkItem href={'/'} linkName={'Home'} />
            <LinkItem href={'/projects'} linkName={'Projects'} />
            <LinkItem href={'/about'} linkName={'About'} />
        </ul>
  </nav>
  )
}

export default Nav