import { render, screen, act } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';
jest.mock('aws-amplify');

describe('Dashboard', () => {
  const mockAPI = jest.fn();
  
  beforeAll(() => {
    global.API = { graphql: mockAPI };
  });

  beforeEach(() => {
    mockAPI.mockReset();
  });

  it('should save categories after refreshing the page and clicking settings', async () => {
    const categories = ['general', 'technology'];
    const newCategories = ['general', 'technology', 'business'];

    mockAPI.mockResolvedValueOnce({
      data: {
        getCreateCategoryInput: {
          category: JSON.stringify(categories),
        },
      },
    });

    render(<Dashboard />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getByText('Hi,')).toBeInTheDocument();

    mockAPI.mockResolvedValueOnce({ data: {} });

    act(() => {
      const settingsButton = screen.getByLabelText('settings');
      settingsButton.click();
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

   

    const input = screen.getByLabelText('Settings');
    const saveButton = screen.getByText('Save');
    act(() => {
      input.value = 'business';
      saveButton.click();
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    mockAPI.mockResolvedValueOnce({ data: {} });

    act(() => {
      const refreshButton = screen.getByTestId('refresh-button');
      refreshButton.click();
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockAPI).toHaveBeenCalledTimes(0);
    
    expect(screen.getByText('technology')).toBeInTheDocument();
    expect(screen.getByText('business')).toBeInTheDocument();
  });
});