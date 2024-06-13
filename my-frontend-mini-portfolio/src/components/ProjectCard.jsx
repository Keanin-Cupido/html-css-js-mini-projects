import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react';

export const ProjectCard = ({image, href, title, description, date, tech}) => {
  return (
    <Link
        href={`projectView/${href}`}
        className="relative group rounded-lg border-4 border-[#DF8601] transition-all text-[#362000] hover:scale-105"
        rel="noopener noreferrer"
    >
        <div className="w-full bg-transparent border-4 border-transparent p-2 rounded-lg">
            <Image
              src={image}
              width={300}
              height={150}
              alt="Picture of the author"
              rounded-lg
            />
        </div>

        <div className="w-full bg-[#DF8601] p-4">
            <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
            <p className={`m-0 max-w-[30ch] font-normal text-base`}>{description}</p>
        </div>


        <div className="w-full bg-[#DF8601] p-4 pt-2 pb-2">
            <p className={`max-w-fit rounded-xl text-left font-normal text-sm p-4 pt-2 pb-2 text-white bg-[#362000]`}>{date}</p>
        </div>

        <div className="absolute right-0 top-0 max-w-fit bg-[#DF8601] p-4 pt-2 pb-2 rounded-sm flex items-center justify-center gap-2">
            {tech.map((tech, id) => {
                    return(
                        <p key={id} className={`text-center font-normal text-sm text-[white]`}>
                            <Icon icon={`akar-icons:${tech}-fill`} style={{ fontSize: '1.5em', color: '#362000' }} />
                        </p>
                    )
                }
            )}
        </div>
    </Link>
  )
}
