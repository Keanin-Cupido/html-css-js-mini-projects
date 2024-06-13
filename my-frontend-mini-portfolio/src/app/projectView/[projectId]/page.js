"use client";

import { useEffect } from 'react';
import { projectsData } from '../../../data/projectsData.js';

export default function Page({params}) {
  let projectData = projectsData.filter(project => project.href === params.projectId);

  return (
    <div className={'w-full h-full min-h-screen flex items-start justify-start'}>
      <main className={'p-4 pl-6 pr-6'}>
        <h2 className={'mt-3 mb-6 text-3xl font-bold'}> {projectData[0].title} </h2>
        <p>{projectData[0].description}</p>
      </main>
    </div>
  );
}
