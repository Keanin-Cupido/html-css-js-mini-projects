import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from '../data/projectsData.js';
import Filter from '../components/Filter.js';

export default function Home() {
  return (
    <div className="container w-full mx-auto subpixel-antialiased">
      <main className='w-full pt-4 pb-4'>
        <p className="text-center text-bold mx-auto mt-12 mb-12 w-full max-w-[400px] rounded-md bg-[#123054] p-6 pl-4 pr-6">
          A collection of my small web development project I built on my web dev journey.
        </p>

        <h2 className="text-left text-2xl">Projects</h2>

        <Filter />

        <div className="grid gap-6 grid-cols-4 auto-rows-auto">
          {
            projectsData.map((project, id) => {
              return (
                  <ProjectCard key={id} image={project.image} href={project.href} title={project.title} description={project.description} date={project.date} tech={project.tech} />
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
