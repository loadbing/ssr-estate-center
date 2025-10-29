import { render, screen } from '@testing-library/react';
import App from './page';
import { getAllProperties } from './server/getAllProperties/getAllProperties';
import '@testing-library/jest-dom';
import { Property } from '@/core/domain/entities/Property';

jest.mock('./server/getAllProperties/getAllProperties');
const mockedGetAllProperties = getAllProperties as jest.MockedFunction<typeof getAllProperties>;

// eslint-disable-next-line react/display-name
jest.mock('@/components/card', () => ({ property }: { property: Property }) => (
  <div data-testid="card">{property.images?.[0]}</div>
));

// eslint-disable-next-line react/display-name
jest.mock('@/components/loader', () => () => <div data-testid="loader">Loading...</div>);


jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('App Component', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders cards when there are properties', async () => {
    const { cookies } = await import('next/headers');
    (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue('mock-user'),
    });

    const properties: Property[] = [
      { id: '1', images: ['/img1.jpg'] } as Property,
      { id: '2', images: ['/img2.jpg'] } as Property,
    ];
    mockedGetAllProperties.mockResolvedValue(properties);

    render(await App());

    const cards = await screen.findAllByTestId('card');
    expect(cards[1]).toHaveTextContent('/img1.jpg');
    expect(cards[2]).toHaveTextContent('/img2.jpg');

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  test('renders Loader when there are no properties', async () => {
    const { cookies } = await import('next/headers');
    (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue('mock-user'),
    });

    mockedGetAllProperties.mockResolvedValue([]);

    render(await App());

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('card')).not.toBeInTheDocument();
  });
});
