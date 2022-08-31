// the function 'require()' using to import a module or something like below
// const http = require( 'http' ); // imported http module or object

// import aur callback function from routes.js file
// const routes = require( './routes' );

// import express.js
const express = require( "express" );

// import body-parser; it is using to get data from request
const bodyParser = require( "body-parser" );

// get express as a function
const app = express();

// it will only run top to bottom. you have to use next() to jump to next middle ware
// app.use(( req, res, next ) => {
//     console.log( "first middle ware" );
//     // you have to use next() method to jump to next middle ware like bellow
//     next(); // allow us to request to continue to the next middleware in line
// });


// use body parser
app.use( bodyParser.urlencoded( { extended: false }));


// this is how we can use routing with express
app.use( '/add-product', ( req, res, next ) => {

    // use res.send() method to send a response
    res.send( '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>' );
});

app.use( '/product', ( req, res, next ) => {
    console.log( req.body );

    // // use res.send() method to send a response
    // res.send( "<h1>Hello! home</h1>" );

    // use redirect() function to redirect like below
    res.redirect( '/' );
});

app.use( '/', ( req, res, next ) => {

    // use res.send() method to send a response
    res.send( "<h1>Hello! home</h1>" );
});


// http module has a method called 'createServer()'. It is using to create a server like below. 
// you have to pass a callback function inside that function to handle request and response. The function you have 
// passing into the createServer() function should have two parameters to handle request and resaponse; 
// You have to save the server created and call 'listen(<port number>)' function to listen the server.
// we can use process.exit() to end the event loop. but we dont want to do that.

// // eg.
// const server = http.createServer( app );

// // to start litening
// server.listen( 3000 );

// use app.listen(<posrt number>) function to able to listen from a browser. insted of writing mannually
app.listen( 3000 );