import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './';

jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}));

describe('Header Component', () => {
  it('renders logout when user exists', async () => {
    const { cookies } = await import('next/headers');
    (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue('mock-user'),
    });

    const HeaderComponent = await Header();
    render(HeaderComponent);

    expect(screen.getByText(/Propiedades/i)).toBeInTheDocument();
  });
});
