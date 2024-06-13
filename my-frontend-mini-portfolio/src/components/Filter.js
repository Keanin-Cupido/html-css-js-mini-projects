import React from 'react'
import LinkItem from './LinkItem'

const Filter = () => {
  return (
    <div className={'bg-[#1D4E89] p-4 pl-6 pr-6 mt-8 mb-12 max-w-[fit-content] font-bold rounded-lg'}>
        <div className="container mx-auto flex flex-row items-center justify-center gap-6 text-sm">
          <ul className={'flex flex-row items-center justify-center gap-4 font-normal text-base'}>
              <LinkItem href={'/'} linkName={'Static'}  />
              <LinkItem href={'/'} linkName={'React.js'} />
              <LinkItem href={'/'} linkName={'Next.js'} />
              <LinkItem href={'/'} linkName={'Astro.js'} />
              <LinkItem href={'/'} linkName={'Backend'} />
          </ul>
        </div>
    </div>
  )
}

export default Filter;