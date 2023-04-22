
<br/>
<h2>Search Capability with Keywords - Feature Test Success</h2>
<p>Date: 2023-04-16</p>
<p>Time: 2:25 am</p>
<h2>Feature Description:</h2>
<p>The application now includes a search capability that allows users to search by keywords, with support for AND, OR, NOT operators, and parenthesis for grouping conditions.</p>
<h2>Test Objective:</h2>
<p>Verify that the search capability with keyword support functions as expected and meets the requirements of the feature.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Search" section.</li>
  <li>Enter a search query with keywords and the supported operators (AND, OR, NOT) and parenthesis for grouping conditions.</li>
  <li>Initiate the search by pressing Enter or clicking the search button.</li>
  <li>Observe that the search results are displayed according to the search query with the correct use of operators and parenthesis.</li>
</ol>
<h2>Expected Result:</h2>
<p>The search capability should correctly process the search query with keywords, operators (AND, OR, NOT), and parenthesis for grouping conditions, displaying accurate search results accordingly.</p>
<h2>Actual Result:</h2>
<p>The search capability successfully processed the search query with keywords, operators, and parenthesis, providing accurate search results as per the feature requirements. This indicates that the feature has been successfully implemented and meets the desired expectations.</p>
<br/>
<h2>Empty String Search - Bug Report</h2>
<p>Date: 2023-04-17</p>
<p>Time: 10:00 AM</p>
<h2>Issue Description:</h2>
<p>A bug was discovered during testing, where searching with an empty string results in a wrongful error message being displayed in the application.</p>
<h2>Steps to Reproduce:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Search" section.</li>
  <li>Enter an empty string in the search input field.</li>
  <li>Initiate the search by pressing Enter or clicking the search button.</li>
  <li>Observe the error message displayed on the screen.</li>
</ol>
<h2>Expected Result:</h2>
<p>When searching with an empty string, the application should either display a message prompting the user to input a valid search query or simply return no results without displaying an error.</p>
<h2>Actual Result:</h2>
<p>When searching with an empty string, the application displays a wrongful error message, indicating a bug in the search functionality. </p>
<br/>
<h2>Categories Content Not Reflected - Regression Test Failure</h2>
<p>Date: 2023-04-22</p>
<p>Time: 12:44 AM</p>
<h2>Issue Description:</h2>
<p>During a manual regression test, it was observed that the content of the categories is not being reflected as expected in the application.</p>
<h2>Steps to Reproduce:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Categories" section.</li>
  <li>Add or edit a category with the required content.</li>
  <li>Save the changes made to the category.</li>
  <li>Observe that the content of the category is not being reflected.</li>
</ol>
<h2>Expected Result:</h2>
<p>Upon adding or editing a category, the content should be reflected in the application.</p>
<h2>Actual Result:</h2>
<p>The content of the categories is not being reflected in the application after performing the manual regression test.</p>
<br/>
<h2>Categories Content Issue Fixed - Successful Regression Test</h2>
<p>Date: 2023-04-22</p>
<p>Time: 3:00 PM</p>
<h2>Issue Description:</h2>
<p>The issue where the content of the categories was not being reflected as expected in the application has been fixed.</p>
<h2>Fix Implementation:</h2>
<p>An update was made to the getNewsData() function in the backend code to properly handle multiple categories. The function now makes separate requests for each category and combines the results before returning them.</p>
<h2>Steps to Verify:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Categories" section.</li>
  <li>Add or edit a category with the required content.</li>
  <li>Save the changes made to the category.</li>
  <li>Observe that the content of the category is now being reflected as expected.</li>
</ol>
<h2>Expected Result:</h2>
<p>Upon adding or editing a category, the content should be reflected in the application.</p>
<h2>Actual Result:</h2>
<p>The content of the categories is now being reflected in the application after performing the regression test. The issue has been resolved successfully.</p>