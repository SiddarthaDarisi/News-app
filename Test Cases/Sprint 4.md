
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
<h2>Single Endpoint Usage - Requirements Not Met</h2>
<p>Date: 2023-04-19</p>
<p>Time: 12:36 AM</p>
<h2>Issue Description:</h2>
<p>During a review of the application's implementation, it was observed that the requirements for utilizing two separate endpoints to call the backend have not been met. Instead, a single endpoint is being used, which may lead to potential issues in the application's functionality.</p>
<h2>Steps to Identify:</h2>
<ol>
  <li>Review the application's codebase, specifically the sections related to backend API calls.</li>
  <li>Identify the usage of endpoints to call the backend.</li>
  <li>Observe that a single endpoint is being used instead of the required two separate endpoints.</li>
</ol>
<h2>Expected Implementation:</h2>
<p>The application should have been designed to utilize two separate endpoints for calling the backend, as outlined in the project requirements. This approach would help ensure proper separation of concerns and maintainability of the code.</p>
<h2>Actual Implementation:</h2>
<p>Currently, the application is using a single endpoint for calling the backend, which does not meet the project requirements. This may lead to potential issues in the application's functionality and maintainability. It is recommended to revisit the project requirements and make necessary adjustments to the implementation to ensure compliance with the specified requirements.</p>
<br/>

<h2>Single Endpoint Usage - Requirements met</h2>
<p>Date: 2023-04-21</p>
<p>Time: 4:05 PM</p>
<h2>Issue Description:</h2>
<p>During a test run of the application, it was observed that the implemented changes have successfully addressed the previously identified issues. The application now utilizes two separate endpoints for calling the backend, in compliance with the project requirements.</p>
<h2>Steps to Verify:</h2>
<ol>
  <li>Review the application's codebase, specifically the sections related to backend API calls.</li>
  <li>Identify the usage of endpoints to call the backend.</li>
  <li>Confirm that two separate endpoints are now being used, as per the project requirements.</li>
  <li>Run the application and perform various tests to ensure the proper functioning of the updated implementation.</li>
</ol>
<h2>Expected Implementation:</h2>
<p>The application should utilize two separate endpoints for calling the backend, as outlined in the project requirements. This approach helps ensure proper separation of concerns and maintainability of the code.</p>
<h2>Actual Implementation:</h2>
<p>Upon reviewing the application and running tests, it has been confirmed that the implemented changes have successfully addressed the previous issues. The application now uses two separate endpoints for calling the backend, in compliance with the project requirements. 
</p>
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
<p>Time: 3:00 AM</p>
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
<br/>
<h2>Empty String Search Bug Fixed - Successful Resolution</h2>
<p>Date: 2023-04-22</p>
<p>Time: 3:00 AM</p>
<h2>Issue Description:</h2>
<p>Previously, a bug was discovered during testing where searching with an empty string resulted in a wrongful error message being displayed in the application. This issue has now been successfully resolved.</p>
<h2>Steps to Verify Resolution:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Search" section.</li>
  <li>Enter an empty string in the search input field.</li>
  <li>Initiate the search by pressing Enter or clicking the search button.</li>
  <li>Observe the absence of the wrongful error message and the appropriate handling of the empty string search.</li>
</ol>
<h2>Expected Result:</h2>
<p>After fixing the bug, when searching with an empty string, the application should either display a message prompting the user to input a valid search query or simply return no results without displaying an error.</p>
<h2>Actual Result:</h2>
<p>Upon testing the application after implementing the bug fix, it has been confirmed that the wrongful error message no longer appears when searching with an empty string. The application now handles empty string searches appropriately, either prompting the user to input a valid search query or returning no results without displaying an error.
</p>
<br/>
<h2>Settings test </h2>
<p>Date: 2023-04-23</p>
<p>Time: 3:00 pm</p>
<h2>Feature Description:</h2>
<p>The application includes a settings menu that allows users to set his/her news preference by using the checkboxes.</p>
<h2>Test Objective:</h2>
<p>Verify that the settings menu functions as expected and meets the requirements and alters the home page according to the options in the settings menu.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the login page.</li>
  <li>Enter user credientials in the apropriate feilds & login.</li>
  <li>Navigate to the settings menu which is located at the top right corner of the page.</li>
  <li>Edit the sttings according to the user preference and click save.</li>
  <li>Observe that the settings results are displayed according to the user preference.</li>
</ol>
<h2>Expected Result:</h2>
<p>The News must be displayed according to the user preference set in the settings menu.</p>
<h2>Actual Result:</h2>
<p>The news is displayed according the user preference.</p>
<br/>
<h2>Sign-up Test </h2>
<p>Date: 2023-04-23</p>
<p>Time: 4:00 pm</p>
<h2>Description:</h2>
<p>The application offers a sign-up screen where users may register using a valid email address and password.</p>
<h2>Test Objective:</h2>
<p>Verify that the sign-up page allows the user to register using a valid email address and password successfully.
</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the Sign-up page.</li>
  <li>Enter user credientials in the apropriate feilds & register.</li>
  <li>Observe that the user is register with the valid credientials according to the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The applications validate the user credentials  and allows the user to sign-up.</p>
<h2>Actual Result:</h2>
<p>The application allowed the user to sign-up.</p>
<br/>
<h2>Error Message Test </h2>
<p>Date: 2023-04-23</p>
<p>Time: 4:10 pm</p>
<h2>Description:</h2>
<p>The sign-up page prompts an error message for invalid email or password.</p>
<h2>Test Objective:</h2>
<p>Verify that the sign-up page prompts an error message when the user is trying to login with a invaid email and password.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the Sign-up page.</li>
  <li>Enter user credientials in the apropriate feilds & register.</li>
  <li>Observe that the user is register with the invalid credientials are able to see the error message as per the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The applications validate the user invalid credentials and prompts an error message.</p>
<h2>Actual Result:</h2>
<p>The application prompts an error message when the user Sign-up with the invalid credientials.</p>
<br/>
<h2>Error Message for duplicate email Test </h2>
<p>Date: 2023-04-23</p>
<p>Time: 4:30 pm</p>
<h2>Description:</h2>
<p>The sign-up page prompts an error message for duplicate email.</p>
<h2>Test Objective:</h2>
<p>Verify that the sign-up page prompts an error message when the user is trying to login with a duplicate email.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the Sign-up page.</li>
  <li>Enter user credientials in the apropriate feilds & register.</li>
  <li>Observe that the user is register with the duplicate email and it is promiting the error message as per the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The applications validate the user duplicate email and prompts an error message.</p>
<h2>Actual Result:</h2>
<p>The application prompts an error message when the user sign-up with the duplicate email.</p>
<br/>

<h2>"NOT" Operator Issue - Regression Test Failure</h2>
<p>Date: 2023-04-24</p>
<p>Time: 10:30 AM</p>
<h2>Issue Description:</h2>
<p>During a manual regression test, it was observed that the News API search function was not properly handling the "NOT" operator in search queries.</p>
<h2>Steps to Reproduce:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "News" section.</li>
  <li>Perform a search query that includes the "NOT" operator.</li>
  <li>Observe that the search results do not properly exclude the terms following "NOT".</li>
</ol>
<h2>Expected Result:</h2>
<p>The search function should properly handle the "NOT" operator and exclude terms from the search results.</p>
<h2>Actual Result:</h2>
<p>The search function is not properly handling the "NOT" operator and is not excluding terms from the search results after performing the manual regression test.</p>
<h2>"NOT" Operator Issue Fixed - Successful Regression Test</h2>
<p>Date: 2023-04-24</p>
<p>Time: 12:00 PM</p>
<h2>Issue Description:</h2>
<p>A manual regression test revealed that the News API search function was not properly handling the "NOT" operator in search queries.</p>
<h2>Fix Implementation:</h2>
<p>An update was made to the getNewsData() function in the frontend code to replace all occurrences of "NOT" with the "-" symbol before passing the query to the News API. This allows the search function to properly exclude terms from the search results.</p>
<h2>Steps to Verify:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "News" section.</li>
  <li>Perform a search query that includes the "NOT" operator.</li>
  <li>Observe that the search results now properly exclude the terms following "NOT".</li>
</ol>
<h2>Expected Result:</h2>
<p>The search function should properly handle the "NOT" operator and exclude terms from the search results.</p>
<h2>Actual Result:</h2>
<p>The search function now properly handles the "NOT" operator and excludes terms from the search results after performing the regression test. The issue has been resolved successfully.</p>
<br/>
<h2>Sign-In Test </h2>
<p>Date: 2023-04-24</p>
<p>Time: 11:00 am</p>
<h2>Description:</h2>
<p>The application offers a sign-in screen where users may login using a valid email address and password.</p>
<h2>Test Objective:</h2>
<p>Verify Verify that the user successful login with valid email and password.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the Sign-in page.</li>
  <li>Enter user credientials in the apropriate feilds to login.</li>
  <li>Observe that the user is  able to logged in into the application with the valid credientials as per the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The applications validate the user credentials allows him/her to login.</p>
<h2>Actual Result:</h2>
<p>The application allows the user to Sign-in.</p>
<br/>
<h2>Error Message for Sign-In </h2>
<p>Date: 2023-04-24</p>
<p>Time: 11:20 am</p>
<h2>Description:</h2>
<p>The sign-in page prompts an error message for duplicate email.</p>
<h2>Test Objective:</h2>
<p>Verify that the sign-in page prompts an error message when the user is trying to login with a invalid email address.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the Sign-in page.</li>
  <li>Enter user credientials in the apropriate feilds to login.</li>
  <li>Observe that the user is logging in with the invalid email and it is promiting the error message as per the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The applications validate the user credientials and prompts an error message if the user enters an invalid email.</p>
<h2>Actual Result:</h2>
<p>The application prompts an error message when the user sign-in with the invalid email address.</p>
<br/>
<br/>
<h2>merged articles Test Success</h2>
<p>Date: 2023-04-24</p>
<p>Time: 2:25 pm</p>
<h2>Description:</h2>
<p>This application has a funcionality to merge articles from different categories.</p>
<h2>Test Objective:</h2>
<p>Verify when the user choose different catogeries of merged articles are displayed successfuly.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "Search" section.</li>
  <li>Enter a search query with keywords to display the merge articles as per the user requirement.</li>
  <li>Initiate the search by pressing Enter or clicking the search button.</li>
  <li>Observe that the search results are displayed according to the search query as per the requirements.</li>
</ol>
<h2>Expected Result:</h2>
<p>The search capability should correctly process the search query with keywords and displaying accurate search results of merged articles.</p>
<h2>Actual Result:</h2>
<p>The search capability successfully processed the search query with keywords and providing accurate search results. This indicates that the feature has been successfully implemented and meets the desired expectations.</p>
<br/>
<h2>category articles reflected Test </h2>
<p>Date: 2023-04-24</p>
<p>Time: 2:40 pm</p>
<h2>Description:</h2>
<p>This application has a funcionality to display the different catogeries of articles.</p>
<h2>Test Objective:</h2>
<p>Verify that the content of the categories is reflected successfuly.</p>
<h2>Test Steps:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Select a catogeries in the navigation bar (navbar2) located at the top of website below the title.</li>
  <li>see if the news that is updated in the page matches the catogiries selected.</li>
</ol>
<h2>Expected Result:</h2>
<p>The news that is displayed in the web page matches with the catogries that is selected in the navigation bar.</p>
<h2>Actual Result:</h2>
<p>the catogiries that is selected successfully displays news that is selected.</p>
<br/>
<h2>category articles backend Test </h2>
<p>Date: 2023-04-24</p>
<p>Time: 3:20 pm</p>
<h2>Description:</h2>
<p>This test is to verify that the catogery selection is fetching the correct news articles in the backend.</p>
<h2>Test Objective:</h2>
<p>Verify that the content of the categories is reflected successfuly.</p>
<h2>Test Steps:</h2>
<ol>
  <li>login to AWS console.</li>
  <li>Go to the API gateway.</li>
  <li>open restnewsapi</li>
  <li>click on test</li>
  <li>set method to post</li>
  <li>type "categories": ["general"] an click on test</li>
</ol>
<h2>Expected Result:</h2>
<p>The news data is displayed in the field according to the selected catogerie.</p>
<h2>Actual Result:</h2>
<p>The data is succesfully displaye in the output field according to the catogrie that is input in the test field.</p>
<br/>
<h2>404 Error Issue - Failed Regression Test</h2>
<p>Date: 2023-04-24</p>
<p>Time: 4:00 PM</p>
<h2>Issue Description:</h2>
<p>A manual regression test revealed that the News API search function is still not properly handling 404 errors returned by the API.</p>
<h2>Current Implementation:</h2>
<p>The current implementation of the getNewsData() function in the frontend code does not handle 404 errors returned by the API properly. The code does not check for a 404 error status code in the API response, which can result in the application displaying incorrect search results when the News API is unable to fulfill a search request.</p>
<h2>Steps to Verify:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "News" section.</li>
  <li>Perform a search query that is expected to return a 404 error example: "google AND/OR".</li>
  <li>Observe that the application does not display an error message indicating that the search failed.</li>
</ol>
<h2>Expected Result:</h2>
<p>The application should handle 404 errors returned by the News API and display an error message indicating that the search failed.</p>
<h2>Actual Result:</h2>
<p>The application does not handle 404 errors returned by the News API and does not display an error message indicating that the search failed after performing the regression test. The issue has not been resolved successfully.</p>
<br/>
<h2>404 Error Issue Fixed - Successful Regression Test</h2>
<p>Date: 2023-04-24</p>
<p>Time: 4:15 PM</p>
<h2>Issue Description:</h2>
<p>A manual regression test revealed that the News API search function was not properly handling 404 errors returned by the API.</p>
<h2>Fix Implementation:</h2>
<p>An update was made to the getNewsData() function in the frontend code to handle 404 errors returned by the API. The code now checks for a 404 error status code in the API response and sets the "setSearchFailed" state to "true" if a 404 error is detected. This prevents the application from displaying incorrect search results when the News API is unable to fulfill a search request.</p>
<h2>Steps to Verify:</h2>
<ol>
  <li>Launch the application.</li>
  <li>Navigate to the "News" section.</li>
  <li>Perform a search query that is expected to return a 404 error. example: "google AND/OR"</li>
  <li>Observe that the application displays an error message indicating that the search failed.</li>
</ol>
<h2>Expected Result:</h2>
<p>The application should handle 404 errors returned by the News API and display an error message indicating that the search failed.</p>
<h2>Actual Result:</h2>
<p>The application now properly handles 404 errors returned by the News API and displays an error message indicating that the search failed after performing the regression test. The issue has been resolved successfully.</p>



