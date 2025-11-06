import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders button text', () => {
  render(<Button />)
  expect(screen.getByText(/click me/i)).toBeInTheDocument()
})