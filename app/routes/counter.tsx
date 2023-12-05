import { json, redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { db } from '~/utils/db.server'

export async function loader() {
  return json({ count: await db.getCount() })
}

export async function action() {
  await db.increment()
  return redirect('/counter')
}

export default function Counter() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="m-8">
      <Form method="post">
        <button
          className="rounded-md bg-red-500 px-4 py-2 text-white"
          type="submit"
        >
          Count: {data.count}
        </button>
      </Form>
    </div>
  )
}
