import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import News from './news';
import { API } from 'aws-amplify';
// Mock API response
const mockNewsData = [
    {
        id: 1,
        title: "Test Article 1",
        description: "Test article 1 description",
    },
    {
        id: 2,
        title: "Test Article 2",
        description: "Test article 2 description",
    },
];

jest.mock("../");

describe("News", () => {
    test("renders news articles", async () => {
        API.post.mockResolvedValue({ data: { articles: mockNewsData } });

        render(<News />);

        // Wait for the loading state to disappear
        await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());

        // Check for expected content
        expect(screen.getByText("Test Article 1")).toBeInTheDocument();
        expect(screen.getByText("Test article 1 description")).toBeInTheDocument();
        expect(screen.getByText("Test Article 2")).toBeInTheDocument();
        expect(screen.getByText("Test article 2 description")).toBeInTheDocument();
    });
    it('renders loading state', () => {
        render(<News categories={[]} />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error message if search fails', async () => {
        API.post.mockResolvedValue([]);

        render(<News categories={[]} searchQuery="no results" />);

        await waitFor(() => expect(API.post).toHaveBeenCalled());

        expect(screen.getByText('Your search - no results - did not match any documents.')).toBeInTheDocument();
    });
});
