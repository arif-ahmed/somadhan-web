import { render, screen } from '@testing-library/react'

function Button({ label }: { label: string }) {
  return <button>{label}</button>
}

describe('Button', () => {
  it('renders with label', () => {
    render(<Button label="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
