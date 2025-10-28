import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PropertiesForm from './index'
import { Property } from '@/core/domain/entities/Property'

describe('PropertiesForm component', () => {
  const mockProperty: Property = {
    id: '1',
    name: 'House',
    code: '001',
    address: '123 Main Street',
    price: 120000,
    year: 2024,
    images: ['/ec.svg'],
    owner: { name: 'John Doe', phone: '123456789' },
  }

  it('should render the properties form', () => {
    const sendData = async (formData: FormData): Promise<boolean> => {return true};

    render(<PropertiesForm defaultValues={mockProperty} sendData={sendData} />)
    expect(screen.getByText(/House - 2024/)).toBeInTheDocument()
  })
})
