import { expect, test } from '@playwright/test'

test('counter test', async ({ page }) => {
  await page.goto('/counter')
  await page.getByRole('button').click()
  await expect(page).toHaveURL(`/counter`)
  const button = await page.getByRole('button', { name: /Count/i })
  expect(await button.textContent()).toBe('Count: 1')
})
