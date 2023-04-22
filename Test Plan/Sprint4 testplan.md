<h2>Full System Test Plan</h2>
<p>Objective: To ensure the application works as expected after fixing the categories content issue and to verify that no new issues have been introduced.</p>
<h3>1. Testing Methodology</h3>
<p>We will be using a combination of manual and automated testing methodologies to ensure the functionality of the application. The tests will cover both positive and negative scenarios, as well as boundary cases. The regression tests will be added to the existing test suite to ensure continuous verification of fixed issues.</p>
<h3>2. Test Cases</h3>
<p>Update the test cases to include regression testing. The following regression tests will be added to the test suite:</p>
<ol>
  <li>Test sign up</li>
  <li>Test sign in</li>
  <li>Test set preferences</li>
  <li>Test show merged articles</li>
  <li>Test show category articles</li>
  <li>Test searching</li>
  <li>Test advanced searching</li>
</ol>
<h3>3. Test Execution</h3>
<p>Perform the full system test by executing the following test cases:</p>
<ol>
  <li>Test sign up
    <ul>
      <li>Verify successful registration with valid email and password</li>
      <li>Verify error messages for invalid email or password</li>
      <li>Verify error message for duplicate email</li>
    </ul>
  </li>
  <li>Test sign in
    <ul>
      <li>Verify successful login with valid email and password</li>
      <li>Verify error messages for invalid email or password</li>
    </ul>
  </li>
  <li>Test set preferences
    <ul>
      <li>Verify successful setting of preferences</li>
      <li>Verify error messages for invalid preferences input</li>
    </ul>
  </li>
  <li>Test show merged articles
    <ul>
      <li>Verify successful display of merged articles from different categories</li>
    </ul>
  </li>
  <li>Test show category articles
    <ul>
      <li>Verify successful display of articles for a specific category</li>
      <li>Verify that the content of the categories is reflected</li>
    </ul>
  </li>
  <li>Test searching
    <ul>
      <li>Verify successful search results for valid search queries</li>
      <li>Verify error messages or empty results for invalid search queries</li>
    </ul>
  </li>
  <li>Test advanced searching
    <ul>
      <li>Verify successful advanced search results using multiple filters Like AND,OR, and ()</li>
      <li>Verify error messages or empty results for invalid advanced search queries</li>
    </ul>
  </li>
</ol>
<h3>4. Test Report</h3>
<p>Document the test results for each test case, including screenshots and descriptions of the observed behavior. Include evidence of regression testing in the test reports.</p>
