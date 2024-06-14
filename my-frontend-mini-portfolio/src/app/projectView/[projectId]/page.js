"use client";

import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image'
import { projectsData } from '../../../data/projectsData.js';

export default function Page({params}) {
  let projectData = projectsData.filter(project => project.href === params.projectId);
  console.log(projectData)

  return (
    <div className={'w-full h-full min-h-screen'}>
      <main className={'flex flex-col items-start justify-start gap-4'}>
        <div className="w-full bg-white opacity-50 border-0 min-h-[350px]">
            <Image
              src={projectData[0].image}
              width={"100%"}
              height={350}
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
