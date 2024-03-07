import { json } from '@remix-run/node'

export function notFound(message?: string) {
  return new Response(message ?? 'Not Found', {
    status: 404,
    statusText: 'Not Found',
  })
}

export function invalid(message?: string) {
  return new Response(message ?? 'Method Not Allowed', {
    status: 405,
    statusText: 'Method Not Allowed',
  })
}

export function badRequest(message: string, errors: string[]) {
  return json(
    { message: message, errors },
    { status: 400, statusText: 'Bad Request' },
  )
}

export function notLoggedIn(message?: string) {
  return new Response(message ?? 'Not Logged In', {
    status: 401,
    statusText: 'Not Logged In',
  })
}

export function forbidden(message?: string) {
  return new Response(message ?? 'Unauthorized', {
    status: 403,
    statusText: 'Forbidden',
  })
}
