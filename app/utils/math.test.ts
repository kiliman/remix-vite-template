import { expect, test } from 'vitest'
import { add } from './math'

test('add should sum numbers', () => {
  const result = add(1, 2)
  expect(result).toBe(3)
})
