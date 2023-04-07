/* 
 * This is the first test in the file, and it tests to make sure that the Dashboard component renders
 * correctly. It uses the render function from the testing library to render the component and then
 * checks to make sure that the text 'learn react' is present in the rendered component. The text 
 * 'learn react' is present in the component because it is a link to the React documentation. 
 */

import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders learn react link', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText("");
    expect(linkElement).toBeInTheDocument();
});