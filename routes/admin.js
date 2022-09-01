const path = require( 'path' );

const express = require( "express" );

const router = express.Router();

const rootDir = require( "../util/path" );

const products = [];

// this is how we can use routing with express
router.get( '/add-product', ( req, res, next ) => {

    // use res.send() method to send a response
    // res.sendFile( path.join( rootDir, 'views', 'add-product.html' ))

    // render pug file
    res.render( 'add-product', { pageTitle: 'Add Product' })
});

// use post() insted of using use() to filter post method.( we can use other functions like these );
router.post( '/product', ( req, res, next ) => {
    products.push( { title : req.body.title });

    // // use res.send() method to send a response
    // res.send( "<h1>Hello! home</h1>" );

    // use redirect() function to redirect like below
    res.redirect( '/' );
});


// this is an another way to export things;
exports.routes = router;
exports.products = products;