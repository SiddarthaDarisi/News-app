import Dashboard from "./Dashboard";
describe('Dashboard search bar', () => {
    let searchBar;
  
    beforeEach(() => {
      searchBar = new SearchBar();
      // Render the search bar component
      searchBar.render();
    });
  
    afterEach(() => {
      // Destroy the search bar component
      searchBar.destroy();
    });
  
    it('should update the search query when the user types', () => {
      // Type a query into the search bar
      searchBar.typeQuery('example query');
      // Expect the search bar's query to be updated
      expect(searchBar.getQuery()).toBe('example query');
    });
  
    it('should call the search function when the user submits a query', () => {
      // Mock the search function
      const mockSearch = jest.fn();
      // Subscribe to the search event
      searchBar.onSearch(mockSearch);
      // Type a query into the search bar
      searchBar.typeQuery('example query');
      // Submit the query
      searchBar.submitQuery();
      // Expect the search function to be called with the query as an argument
      expect(mockSearch).toHaveBeenCalledWith('example query');
    });
  
    it('should clear the search query when the user clicks the clear button', () => {
      // Type a query into the search bar
      searchBar.typeQuery('example query');
      // Click the clear button
      searchBar.clickClear();
      // Expect the search bar's query to be empty
      expect(searchBar.getQuery()).toBe('');
    });
  });