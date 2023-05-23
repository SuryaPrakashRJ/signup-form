//App.js file for the Newsletter Signup Web App using Mailchimp API and Node.js (Express.js)

//install express, body-parser, request, https
const express = require('express');
const bodyparser = require('body-parser');
const https = require('https');
const app = express();

//use static files like css, images, etc. from the public folder (express detects the public folder automatically)
app.use(express.static('public'));
//use bodyparser to parse the data from the signup.html file
app.use(bodyparser.urlencoded({extended: true}));

//Initially loads the signup.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

//post actions after signin up
app.post('/', (req, res) => {
    var name= req.body.name;
    var email= req.body.email;
    console.log(name , email);

    var data ={
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: name
            }}]
        }
    //Enter your server number and API key
    // (server number is the last number in the API key and unique list ID can be found in the audience settings in Mailchimp account)
    const Your_Server_Number = 'Your server number';
    const Your_List_ID = 'Your list Id';

    //Auth variable is your username and API key. Username can be any string
    //Example Ayrus:67c1d3c09323j34gc690d55ad22-us21 
    const authvar = 'Yourname:Your API key'
    
    const url = `https://us${Your_Server_Number}.api.mailchimp.com/3.0/lists/${Your_List_ID}`;
    const options = {
        method: 'POST',
        auth: `${authvar}`,
    }
    const JSONdata = JSON.stringify(data);
    const request = https.request(url, options, (response) => {
        response.on('data', (data) => {
            console.log(JSON.parse(data));

        })
    })

    //writes the JSON data to the Mailchimp server
    request.write(JSONdata);
    request.end();
   
    // If the status code is 200, then the signup was successful and loads the success.html file
    if (res.statusCode === 200){
        res.sendFile(__dirname + '/success.html');
    }
    // If the status code is not 200, then the signup was unsuccessful and loads the failure.html file
    else{
        res.sendFile(__dirname + '/failure.html');
    }
})

//redirects to the signup page from the failure page
app.post('/failure', (req, res) => {
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// All set! Now run the app.js file in the terminal using node app.js
// You can use Nodeman to run the app.js file as well.
// Nodeman will automatically restart the server when you make any changes to the code.