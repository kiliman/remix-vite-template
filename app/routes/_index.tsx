import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <div className="flex p-8 gap-8 items-baseline bg-blue-300">
        <img
          src="/images/Remix-Logo-Full-Black.svg"
          alt="Remix Logo"
          className="h-12"
        />
        <h1 className="text-5xl font-bold">Welcome to Remix</h1>
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-2">
          <li>
            <a
              className="underline decoration-dotted"
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              className="underline decoration-dotted"
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              className="underline decoration-dotted"
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
