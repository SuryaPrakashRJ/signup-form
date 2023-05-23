<h3> A simple Signup-form using node.js (express) and Mailchimp API </h3>
<p>This project demonstrates a simple signup form built with Node.js, Express, and integrated with the Mailchimp API to store user information.</p>

<h4>Prerequisites</h4>
Before running this project, ensure that you have the following prerequisites installed:
<ul>
  <li>Node.js: Download and install Node.js if you haven't already.</li>
</ul>

<h4>Installation</h4>
Follow these steps:
<ul>
1. Clone the github repository<br>
2. Navigate to the project directory<br>
3. Install the dependecies using <b>npm install</b>
</ul>

<h4>Configuration</h4>
To use the Mailchimp API integration, you need to provide your Mailchimp API key and list ID. Follow the steps below to configure your project:
<ul>
  <li>Open the app.js file located in the project root directory.</li>
  <li>Replace <b>API_KEY</b> with your Mailchimp API key.</li>
  <li>Replace <b>UNIQUE_LIST_ID</b> with the ID of the Mailchimp list you want to add subscribers to.</li>
  <li>Replace <b>SERVER_ID</b> with your Mailchimp Server ID mentioned in your API key.</li>
</ul>

<h4>Usage</h4>
To run the project,
<ul>
<li>
  Using Node:
  Enter the command: node app.js
</li>
<li>
  Using Nodeman:
  Enter the command: nodeman app.js
  (Nodeman will automatically restart the server when you make any changes to the code.)
</li>
</ul>
  The signup form will be accessible at http://localhost:3000.
  
<h4>Acknowledgements</h4>
This project was built using the following technologies and resources:
  <ul>
    <li>Node.js </li>
    <li>Express </li>
    <li>Mailchimp API </li>
  </ul>  
