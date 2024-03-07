import './tailwind.css'
import { type LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import DefaultErrorBoundary from '~/components/ui/error-boundary'
import iconsHref from '~/components/ui/icons/sprite.svg?url'

export const links: LinksFunction = () => [
  { rel: 'prefetch', href: iconsHref, as: 'image' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  return <DefaultErrorBoundary />
}

export function HydrateFallback() {
  return <h1>Loading...</h1>
}
