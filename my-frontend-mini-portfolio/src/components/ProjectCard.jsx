import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const ProjectCard = ({image, href, title, description}) => {
  return (
    <Link
        href={href}
        className="group rounded-lg border-4 border-[#DF8601] transition-colors text-[#362000]"
        rel="noopener noreferrer"
    >
        <div className="w-full bg-transparent border-4 border-transparent p-2">
            <Image
              src={image}
              width={300}
              height={150}
              alt="Picture of the author"
            />
        </div>

        <div className="w-full bg-[#DF8601] p-6">
            <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
            <p className={`m-0 max-w-[30ch] text-base`}>{description}</p>
        </div>
    </Link>
  )
}
