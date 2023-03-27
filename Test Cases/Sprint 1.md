Requirements for Landing page
Requirement 1: <br/>
– Test Case ID-1001: When not signed in, the landing page shall display a method 
(button or link) to navigate to a “Sign-in” page# News-app<br/>
Requirement 2:<br/>
– Test Case ID-1002: When signed in, the landing page shall display the user’s 
name<br/>
– Test Case ID-1003: When signed in, the landing page shall display a method to 
sign out (button or link)<br/><br/>

Requirements for Sign in page<br/>
Requirement 1:<br/>
– Test Case ID-1004: Implement a form that will sign in a user<br/>
– Test Case ID-1005: The form shall use a textbox to collect a user name<br/>
– Test Case ID-1006: The user name shall be required<br/>
– Test Case ID-1007: The form shall use a textbox to collect a password<br/>
– Test Case ID-1008: The password shall be required<br/>
– Test Case ID-1009: The form shall use a button to submit the form<br/>
Requirement 2:<br/>
– Test Case ID-1010: When a correct combination of user id and password have been submitted, navigate to 
the Landing Page as signed in.<br/>
Requirement 3:<br/>
– Test Case ID-1011: When an incorrect combination of user id and password have been submitted, display 
an appropriate message.<br/><br/>

Requirements for Sign up page:<br/>
Requirement 1:<br/>
– Test Case ID-1012: Implement a form that will sign in a user<br/>
– Test Case ID-1013: The form shall use a textbox to collect a user name<br/>
– Test Case ID-1014: The user name shall be required<br/>
– Test Case ID-1015: The form shall use a textbox to collect a password<br/>
– Test Case ID-1016: The password shall be required<br/>
– Test Case ID-1017: The form shall use a textbox to collect a confirmation password<br/>
– Test Case ID-1018: The confirmation password shall be required<br/>
– Test Case ID-1019: The form shall use a button to submit the formv
Requirement 2:<br/>
– Test Case ID-1020: The user name shall be a string at least 8 character long<br/>
– Test Case ID-1021: The user name shall not include any spaces<br/>
– Test Case ID-1022: The UX shall automatically trim leading and trailing spaces<br/>
Requirement 3:<br/>
– Test Case ID-1023: The password shall not include any spaces<br/>
– Test Case ID-1024: The password shall be at least 8 characters long<br/>
– Test Case ID-1025: The UX shall automatically trim leading and trailing spaces<br/><br/>
– Test Case ID-1026: The password must contain at least one upper case letter<br/>
– Test Case ID-1027: The password must contain at least one lower case letter<br/>
– Test Case ID-1028: The password must contain at least one character that is not a 
letter.<br/>
Requirement 4:
– Test Case ID-1029: When the form is correctly filled out and submitted, navigate to the 
Landing Page as signed in.<br/>
Requirement 5:
– Test Case ID-1030: When an incorrect entry is made, display an appropriate message.<br/><br/>

Requirements for Database:<br/>
Requirement 1:<br/>
- Test case ID-1031: Check if the data is landing in the database.<br/>

Requirements for Status Codes:<br/>
- Test case ID-1032: 200 OK<br/>
- Test case ID-1033: 400 The request was not properly found<br/>
- Test case ID-1034: 401 Access denial due to incorrect credentials<br/>
- Test case ID-1035: 404 Resources not found<br/>
- Test case ID-1036: 500 Server threw an error<br/>


| Test Case ID | Name of the Tester |Date| Pass/Fail | comment |
|---|---|---|---|---|
|ID-1001|Sri Harsha|03/08/2023|Pass|The landing page shows a sign in button|
|ID-1002|Sri Harsha|03/08/2023|Pass|The user name is displayed when the user is signed in|
|ID-1003|Sri Harsha|03/08/2023|Pass|Sign out option in displayed when the user is logged in|
|ID-1004|Sri Harsha|03/08/2023|Pass|Sign in form is available to the users|
|ID-1005|Bhuvan Sai|03/10/2023|Pass|The text box is available to collect the users uniformation|
|ID-1006|Bhuvan Sai|03/10/2023|Pass|Username is required in this field|
|ID-1007|Bhuvan Sai|03/10/2023|Pass|The text box is available to collect the password entered by the user|
|ID-1008|Bhuvan Sai|03/10/2023|Pass|Password is required in this field|
|ID-1009|Bhuvan Sai|03/10/2023|Pass|Button was used to submit the form|
|ID-1011|Leela|03/11/2023|Pass|When improper credentials are given as input it displays invalid user details |
|ID-1012|Leela|03/11/2023|Pass|The form is displayed for the user to sign in |
|ID-1013|Leela|03/11/2023|Pass|The form uses text box to collect the user name|
|ID-1014|Leela|03/11/2023|Pass|This is a required field|
|ID-1015|Leela|03/11/2023|Pass|The form uses text box to collect the password|
|ID-1016|Leela|03/11/2023|Pass|This is a required filed|
|ID-1017|Leela|03/11/2023|Pass|The textbox is useed to collect a confirmation password|
|ID-1018|Leela|03/11/2023|Pass|This is a required field where the password is confirmed|
|ID-1019|Leela|03/11/2023|Pass|The submit button is displayed for the form to be submitted|
|ID-1020|Bhuvan Sai|03/11/2023|Fail|Mail ID is used to login instead of the User Name|
|ID-1021|Bhuvan Sai|03/15/2023|Pass|This field does not accept any spaces|
|ID-1022|Bhuvan Sai|03/15/2023|Pass|The trailing spaces are ignored|
|ID-1023|Sri Harsha|03/15/2023|Pass|The Page wont accept the password if there are spaces in it|
|ID-1024|Sri Harsha|03/15/2023|Pass|Minimum length of the password is 8 characters|
|ID-1025|Sri Harsha|03/15/2023|Pass|The page igores all the spaces that are added after the mail id|
|ID-1026|Sri Harsha|03/15/2023|Pass|One upper case is mandatory|
|ID-1027|Sri Harsha|03/15/2023|Pass|One lower case is mandatory|
|ID-1028|Sri Harsha|03/15/2023|Pass|One special character is mandatory|
|ID-1029|Thanmai|03/16/2023|Pass|After correct credentials are given it is naviating to the landing page as signed in|
|ID-1030|Thanmai|03/16/2023|Pass|The message displays saying the input is wrong|
|ID-1031|Thanmai|03/16/2023|Pass|The Database is successfully fetching the data|
|ID-1032|Thanmai|03/16/2023|Pass|They are succesfully being displayed|
|ID-1033|Thanmai|03/16/2023|Pass|They are succesfully being displayed|
|ID-1034|Thanmai|03/18/2023|Pass|They are succesfully being displayed|
|ID-1035|Thanmai|03/18/2023|Fail|The code is not shown|
|ID-1036|Thanmai|03/18/2023|Fail|The code is not shown|
