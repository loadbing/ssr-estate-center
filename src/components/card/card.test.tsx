import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from './index'
import { Property } from '@/core/domain/entities/Property'

describe('Card component', () => {
  const mockProperty: Property = {
    id: '1',
    name: 'House',
    code: '001',
    address: '123 Main Street',
    price: 120000,
    year: 2024,
    images: ['www'],
    owner: { name: 'John Doe', phone: '123456789' },
  }

  it('should render the property name and year', () => {
    render(<Card key={mockProperty.id} property={mockProperty} />)
    expect(screen.getByText(/House - 2024/)).toBeInTheDocument()
  })

  it('should display the property price', () => {
    render(<Card key={mockProperty.id} property={mockProperty} />)
    expect(screen.getByText(/\$120000/)).toBeInTheDocument()
  })
})
