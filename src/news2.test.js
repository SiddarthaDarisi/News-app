import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import News from './News';
jest.mock('axios');
describe('News component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders News component with loading indicator', async () => {
        const categories = ['general'];
        axios.get.mockResolvedValue({});

        render(<News categories={categories} />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders News component with fetched news data', async () => {
        const categories = ['general'];
        const sampleData = {
            data: {
                articles: [
                    {
                        title: 'Sample News',
                        description: 'Sample news description',
                        urlToImage: 'http://example.com/sample-image.jpg',
                        publishedAt: '2023-01-01T12:00:00Z',
                    },
                ],
            },
        };

        axios.get.mockResolvedValue(sampleData);

        render(<News categories={categories} />);

        await waitFor(() => screen.getByText('Sample News'));

        expect(screen.getByText('Sample News')).toBeInTheDocument();
        expect(screen.getByText('Sample news description')).toBeInTheDocument();
        expect(screen.getByAltText('news')).toBeInTheDocument();
        expect(screen.getByText('2023-01-01T12:00:00Z')).toBeInTheDocument();
    });


    test('calls axios.get with correct category and page number', async () => {
        const categories = ['general'];
        axios.get.mockResolvedValue({});

        render(<News categories={categories} />);

        await waitFor(() => axios.get);

        expect(axios.get).toHaveBeenCalledWith(
            'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=d1165b675f3b450a9879de4ff8997ac9&pageSize=50&page=1'
        );
    });
});
