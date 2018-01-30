// const declaration creates a read-only reference to a value

// Here we load the express javascript library
const express = require('express');

// Here we get an express app object generated by the express() function
const app = express();

// Here we define a string as the target url
const targetBaseUrl = 'http://www.letsboot.com/';



// This function will be called on every request
function handleRedirect(req, res) {
  // Combine the original url with our target website
  const targetUrl = targetBaseUrl + req.originalUrl;

  // Tell the response object ob express to redirect
  // This sends a HTTP Response with the Code 301 and a line
  // Location: targetUrl
  res.redirect(targetUrl);
}

// This registers our handleRedirect function for all 
// HTTP GET requests
app.get('*', handleRedirect);

// Here we define the port number for which our express webserver shoul listen too
// Rither it should be provided by the environment (important for cloud hosting)
// Or it should use 3000 if not set (ie. on your machine)
const port = process.env.port || 3000;

// Now we tell the express app to listen to that port which makes it start the webservser
app.listen(port);
