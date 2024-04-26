// import Image from "next/image";

import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className={''}>
      <main className={'p-4 pl-6 pr-6'}>
        <h2 className={'mt-3 mb-6 text-3xl font-bold'}>Mini Frontend Dev Projects</h2>
        <div className="flex items-start justify-start">
          <ProjectCard href={'#'} title={'Twitter Clone'} description={'A (frontend-only) clone of the latest version of twitter (X) - Early 2024.'} />
        </div>
      </main>
    </div>
  );
}
