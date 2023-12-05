import { createRemixStub } from '@remix-run/testing'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import Counter, { action, loader } from './counter'

test('counter increments when clicked', async () => {
  const App = createRemixStub([
    {
      path: '/counter',
      Component: Counter,
      loader,
      action,
    },
  ])
  await render(<App initialEntries={['/counter']} />)
  const button = await screen.findByRole('button', { name: /count:/i })
  expect(button).toHaveTextContent('Count: 0')
  await userEvent.click(button)
  expect(button).toHaveTextContent('Count: 1')
})
