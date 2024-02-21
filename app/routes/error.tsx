import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { Link } from '@remix-run/react'
import DefaultErrorBoundary from '~/components/ui/error-boundary'
import {
  badRequest,
  forbidden,
  invalid,
  notFound,
  notLoggedIn,
} from '~/utils/responses'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const type = url.searchParams.get('type')
  switch (type) {
    case 'throw':
      throw new Error('test server error')
    case 'notfound':
      throw notFound('Page Not Found')
    case 'badrequest':
      throw badRequest('Bad Request', [
        'missing param',
        'value must be number',
        'etc',
      ])
    case 'notloggedin':
      throw notLoggedIn('Not Logged In')
    case 'forbidden':
      throw forbidden('Not Authorized')
    case 'invalid':
      throw invalid('Invalid')
  }

  return json({})
}

function Layout({ children }: { children?: React.ReactNode }) {
  const handleClick = () => {
    setTimeout(() => alert('View console for error'), 1)
    throw new Error('test client error')
  }

  return (
    <div className="m-4">
      <h1 className="mb-2 text-2xl font-bold">Test Error</h1>
      <Link to="/" className="underline decoration-dotted">
        Return Home
      </Link>
      <div className="mt-2 flex gap-2">
        <button
          className="rounded bg-red-500 px-2 py-1 text-white"
          onClick={handleClick}
        >
          Throw Client Error
        </button>
        <a
          href="?type=throw"
          className="rounded bg-red-500 px-2 py-1 text-white"
        >
          Throw Server Document Error
        </a>
        <Link
          to="?type=throw"
          className="rounded bg-red-500 px-2 py-1 text-white"
        >
          Throw Server Data Error
        </Link>
      </div>
      <div className="mt-2 flex gap-2">
        <Link
          to="?type=notfound"
          className="rounded bg-blue-200 px-2 py-1 text-blue-900"
        >
          Return Not Found Error
        </Link>
        <Link
          to="?type=badrequest"
          className="rounded bg-yellow-200 px-2 py-1  text-yellow-900"
        >
          Return Bad Request Error
        </Link>
        <Link
          to="?type=notloggedin"
          className="rounded bg-purple-200 px-2 py-1 text-purple-900"
        >
          Return Not Logged In Error
        </Link>
        <Link
          to="?type=forbidden"
          className="rounded bg-orange-200 px-2 py-1 text-orange-900"
        >
          Return Forbidden Error
        </Link>
        <Link
          to="?type=invalid"
          className="rounded bg-yellow-200 px-2 py-1 text-yellow-900"
        >
          Return Invalid Error
        </Link>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  )
}

export default function Index() {
  return <Layout></Layout>
}

export function ErrorBoundary() {
  return (
    <Layout>
      <DefaultErrorBoundary />
    </Layout>
  )
}
