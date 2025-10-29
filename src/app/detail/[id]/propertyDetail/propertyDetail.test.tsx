import { render, screen } from '@testing-library/react';
import PropertyDetail from './';
import '@testing-library/jest-dom';
import { Property } from '@/core/domain/entities/Property';
import useCurrentImage from '@/hooks/useCurrentImage';

jest.mock('@/hooks/useCurrentImage', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockedUseCurrentImage = useCurrentImage as jest.MockedFunction<typeof useCurrentImage>;

describe('PropertyDetail Component', () => {
  afterEach(() => jest.clearAllMocks());

  const mockProperty: Property = {
    id: '1',
    name: 'House',
    year: 2020,
    address: 'Calle 123, Medellín',
    price: 1000000,
    images: ['/img1.jpg', '/img2.jpg'],
    owner: {
      name: 'Juan Pérez',
      phone: '3001234567',
    },
  } as Property;

  test('renders property details correctly', () => {
    mockedUseCurrentImage.mockReturnValue({ currentImage: 0 });

    render(<PropertyDetail property={mockProperty} isAdmin={true}/>);

    expect(screen.getByText(/House - 2020/)).toBeInTheDocument();

    expect(screen.getByText(/📍Calle 123, Medellín/)).toBeInTheDocument();
    expect(screen.getByText(/💲1000000/)).toBeInTheDocument();

    expect(screen.getByText(/📝Juan Pérez/)).toBeInTheDocument();
    expect(screen.getByText(/📞3001234567/)).toBeInTheDocument();
  });
});
