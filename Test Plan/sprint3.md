<h1>Introduction(Integration testing)</h1>
We are developing a news application where several users can access news according to their field of interest. We are using a news api to gather news headlines and to display the news to the users. The users will have access to fields like general, sports, business, etc. the user can sign in to the application so that they can save their field of interest.

<h1>Test Items</h1>
In Sprint 2, we are planning to test:<br>
- Log-in<br>
- Sign-up<br>
- Landing page<br>
- Sign-out<br>
- Settings page<br>
- List of articles<br>
- Refresh page<br>
- Landing Page tabs<br>
- Artical catigories<br>
- Display articles for home tab<br>
- Highlighting current tab<br>
- Pagination<br>
-  

<h1>Approach</h1>
 <h4>Log-in: </h4>
 The login page should contain an input field that takes the user-name/Email id and an input field to take the password.<br>
 The login details must match with the details that are present in the database.
 <h4>Sign-up: </h4>
 The sign-up page should contain 4 input fileds:<br>
 - Email-id<br>
 - Password<br>
 - Confirm Password<br>
 - User name<br>
 The password should be atleast 8 characters long with chould not contain any spaces. The password should contain atleast one upper case character, one lower case charracter and one special character.<br>
 The Confirm password field should match with the password field<br>
 The user name should be the name of the user.
 <h4>Landing page:</h4>
 This page displays the news headlines and a short discription of the news.<br>
 The landing page give an option for the user to sign-in/sign-up. <br>
 If the user is already signed-in, the page should display the user name in the top of the page.<br>
 <h4>Sign-out:</h4>
 This button is displayed on top of the page when the user is logged-in. This button enables the user to log out of the application. All the saved preferences are removed from the application when the user loggs out.
 <h4>Settings page</h4>
 This button is displayed on the top right of the page When user signed in, the landing page it displayes a button to open a Settings page in the Newspaper.
 The Setting will allow the user to choose one or more of the following options.
– General (on by default)
– Business
– Entertainment
– Health
– Science
– Sports
– Technology
 <h4>List of articles</h4>
 When the user is not signed in, the landing page will display a list of articles from the NewsAPI “General” category
 <h4>Refresh</h4>
 This button is displayed on the top which is next to the settings button in the newspaper page which allows the users to refresh the articles.
 <h4>Landing Page tabs</h4>
 Tabs are there to display the articles in diffent categories on landing page.
 <h4>Artical catigories</h4>
 Articles are being displayed in decending order when selected from categories on settings page.
 <h4>Display articles for home tab</h4>
 New features are added to landing page and display articles when clicked on home tab after sign in.
 <h4>Highlighting current tab</h4>
 When we click on home tab it is higlighted and same for other tabs
 <h4>Pagination</h4>
 The page numbers are diplayed on bottom of the page .
 
 
 <h1>Pass/Fail criteria</h1>
 <h4>Log-in:<h4>
 The log-in page should satisfy all the specifications that are required. only then should the application allow the user to login. The user should be present in the database.
 <h4>Sign-in:</h4>
 All the fields should match the requirements that are mentioned above. If all the details satisfy the conditions, the application should create a new user and input the details into the database. The application should allow the new user to log-in to the application using the new details.
 <h4>Landing page:</h4>
 The landing page should display options for the user to log-in/sign-up when the user is not logged-in to the application.<br>
 When the user is logged-in, the application should display the user name on the top of the application.
 <h4>Sign-out:</h4>
 The application should show the option to sign out of the application when the user is logged-in. This button should allow the user to sign out of the application    which removes all the settings from the application as soon as the log out is done.
 <h4>Settings page</h4>
 The settings page should display the options for the user to select the catagories as per the requirement mentioned above.
 <h4>List of articles</h4>
 When the user is not signed in, the application should allow the user to see the list of articles from the NewsAPI “General” category.
 <h4>Refresh</h4>
The landing page should have a button to refresh the list of articles when the user sign in the to the Newspaper application as per the requirement.

  <h4>Landing Page tabs</h4>
Landing page should have differnt tabs which has categories that displays the articles.There are different tabs after HOME tabe.  
  <h4>Artical catigories</h4>
All the article are displayed where the most recent one comes first on the settings page. 
  <h4>Display articles for home tab</h4>
Upon sign in when the home tab is clicked it displays the articles on the landing page.   
  <h4>Highlighting current tab</h4>
When first signed in the Home tab is being selcted and highlighted. 
  <h4>Pagination</h4>
On the landing page the page numbers are being displayed on the bottom. 
 
