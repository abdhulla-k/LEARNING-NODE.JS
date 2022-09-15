// the function 'require()' using to import a module or something like below
// const http = require( 'http' ); // imported http module or object

// import aur callback function from routes.js file
// const routes = require( './routes' );

// import path module
const path = require( 'path' );

// import express.js
const express = require( "express" );

// import hbs
const expressHbs = require( 'express-handlebars' );

// import external routes
const adminData = require( "./routes/admin" );
const shopRoutes = require( "./routes/shop" );

// import body-parser; it is using to get data from request
const bodyParser = require( "body-parser" );

// get express as a function
const app = express();

// set template engine
app.set( 'view engine', 'ejs' );
app.set( 'views', 'views' );

// set path
const rootDir = require( "./util/path" );

// it will only run top to bottom. you have to use next() to jump to next middle ware
// app.use(( req, res, next ) => {
//     console.log( "first middle ware" );
//     // you have to use next() method to jump to next middle ware like bellow
//     next(); // allow us to request to continue to the next middleware in line
// });


// use body parser
app.use( bodyParser.urlencoded( { extended: false }));
app.use( express.static( path.join( __dirname, 'public' )));

app.use( adminData.routes );

app.use( shopRoutes );

// add a 404 page
app.use(( req, res, next ) => {
    // res.status( 404 ).sendFile( path.join( rootDir, 'views', '404.html' ));

    // use pug file insted of html
    res.status( 404 ).render( '404', { pageTitle: "Page not found" });
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
app.listen( 4000 );