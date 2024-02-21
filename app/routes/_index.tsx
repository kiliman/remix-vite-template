import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix+Vite' },
    { name: 'description', content: 'Welcome to Remix+Vite!' },
  ]
}

const linkStyle = 'underline decoration-dotted'
export default function Index() {
  return (
    <div>
      <div className="flex items-baseline gap-8 bg-blue-300 p-8">
        <img
          src="/images/Remix-Logo-Full-Black.svg"
          alt="Remix Logo"
          className="h-12"
        />
        <h1 className="text-5xl font-bold">Welcome to Remix+Vite</h1>
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/counter" className={linkStyle}>
              Counter
            </Link>
          </li>
          <li>
            <Link to="/error" className={linkStyle}>
              Test Error Handling
            </Link>
          </li>
          <li>
            <Link to="/not-found" className={linkStyle}>
              Not Found Page (Test Root Error Boundary)
            </Link>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
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
