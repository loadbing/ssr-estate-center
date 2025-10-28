import { render, screen } from '@testing-library/react';
import { getPropertyById } from '../../server/getPropertyById/getPropertyById';
import '@testing-library/jest-dom';
import { Property } from '@/core/domain/entities/Property';
import Detail from './page';

jest.mock('../../server/getPropertyById/getPropertyById');
const mockedGetPropertyById = getPropertyById as jest.MockedFunction<typeof getPropertyById>;

// eslint-disable-next-line react/display-name
jest.mock('./propertyDetail', () => ({ property }: { property: Property }) => (
    <div data-testid="property">{property.name}</div>
));

describe('Detail Component', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders property detail when there are values', async () => {
        const property: Property = { name: 'House' } as Property;
        mockedGetPropertyById.mockResolvedValue(property);
        const params = Promise.resolve({ id: '1' });

        render(await Detail({ params }));

        const element = await screen.findAllByTestId('property');
        expect(element[0]).toHaveTextContent('House');
    });
});
