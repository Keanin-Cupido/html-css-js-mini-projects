// import Image from "next/image";
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={'w-full h-full min-h-screen flex items-start justify-start'}>
      {/* Left Side */}
      <Nav />

      {/* Right Side */}
      <main className={'p-4 pl-6 pr-6'}>
        <h2 className={'mt-3 mb-6 text-3xl font-bold'}>Mini Frontend Dev Projects</h2>
        <div className="flex flex-col items-start justify-between p-24">
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Deploy{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
        </div>
      </main>
    </div>
  );
}
