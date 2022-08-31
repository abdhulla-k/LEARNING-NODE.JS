// the function 'require()' using to import a module or something like below
const http = require( 'http' ); // imported http module or object

// import aur callback function from routes.js file
// const routes = require( './routes' );

// import express.js
const express = require( "express" );

// get express as a function
const app = express();

// it will only run top to bottom. you have to use next() to jump to next middle ware
app.use(( req, res, next ) => {
    console.log( "first middle ware" );
    // you have to use next() method to jump to next middle ware like bellow
    next(); // allow us to request to continue to the next middleware in line
});

app.use(( req, res, next ) => {
    
    // use res.send() method to send a response
    res.send( "<h1>Hello From Express!</h1>" );
});


// http module has a method called 'createServer()'. It is using to create a server like below. 
// you have to pass a callback function inside that function to handle request and response. The function you have 
// passing into the createServer() function should have two parameters to handle request and resaponse; 
// You have to save the server created and call 'listen(<port number>)' function to listen the server.
// we can use process.exit() to end the event loop. but we dont want to do that.

// eg.
const server = http.createServer( app );

// to start litening
server.listen( 3000 );