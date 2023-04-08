/* 
 * This is the first test in the file, and it tests to make sure that the Dashboard component renders
 * correctly. It uses the render function from the testing library to render the component and then
 * checks to make sure that the text 'learn react' is present in the rendered component. The text 
 * 'learn react' is present in the component because it is a link to the React documentation. 
 */

import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import React from 'react';
test('News-app logo in app', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText("News-App");
    expect(linkElement).toBeInTheDocument();
});


describe('Dashboard', () => {
    it('to check categories correctly in navbar2', () => {
      render(<Dashboard />);
  
      const homeLink = screen.getByText('Home');
      const generalLink = screen.getByText('General');
      const businessLink = screen.getByText('Business');
      const entertainmentLink = screen.getByText('Entertainment');
      const healthLink = screen.getByText('Health');
      const scienceLink = screen.getByText('Science');
      const sportsLink = screen.getByText('Sports');
      const technologyLink = screen.getByText('Technology');
  
      expect(homeLink).toBeInTheDocument();
      expect(generalLink).toBeInTheDocument();
      expect(businessLink).toBeInTheDocument();
      expect(entertainmentLink).toBeInTheDocument();
      expect(healthLink).toBeInTheDocument();
      expect(scienceLink).toBeInTheDocument();
      expect(sportsLink).toBeInTheDocument();
      expect(technologyLink).toBeInTheDocument();
    });
  });