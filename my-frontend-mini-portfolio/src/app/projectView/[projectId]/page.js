"use client";

import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { projectsData } from '../../../data/projectsData.js';
import Button from '../../../components/Button/index.js';

export default function Page({params}) {
  let projectData = projectsData.filter(project => project.href === params.projectId);

  return (
    <div className={'relative w-full h-full min-h-screen'}>
      <BackNavButton link="/" />

      <main className={'w-full container mx-auto h-full flex flex-row-reverse items-center justify-center gap-4 pt-[5em]'}>
        <div className="w-full h-full bg-white opacity-50 border-0 max-w-[350px] min-h-[350px] rounded-lg">
            <Image
              src={projectData[0].image}
              width={200}
              height={200}
              alt="Picture of the project"
              rounded-lg
            />
        </div>

        <section className="p-2 pl-6 pr-6 flex flex-col items-start justify-start gap-2">
          <h2 className={'mt-3 mb-6 text-3xl font-bold'}> {projectData[0].title} </h2>

          <p>{projectData[0].description}</p>

          <p>{projectData[0].date}</p>

          <div className="max-w-fit bg-[#DF8601] p-4 pt-2 pb-2 rounded-sm flex items-center justify-center gap-4">
              {projectData[0].tech.map((tech, id) => {
                      return(
                          <p key={id} className={`text-center font-normal text-sm text-[white]`}>
                              <Icon icon={`akar-icons:${tech}-fill`} style={{ fontSize: '1.5em', color: '#362000' }} />
                          </p>
                      )
                  }
              )}
          </div>
        </section>
      </main>
    </div>
  );
}

const BackNavButton = ({link}) => {
  return (
    <span className="absolute left-8 top-8 z-50">
      <Button href={link} icon="ep:back" text={null} />
    </span>
  )
}
