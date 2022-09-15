const path = require( 'path' );

const express = require( "express" );

const rootDir = require( "../util/path" );
const adminData = require( "./admin" );

const router = express.Router();

router.get( '/', ( req, res, next ) => {
    console.log( adminData.products );
    // use res.send() method to send a response
    // res.send( "<h1>Hello! home</h1>" );

    // pass html pages return
    // res.sendFile( path.join( rootDir, 'views', 'shop.html' ));
    

    // respond a pug file
    const products = adminData.products;
    console.log( products.length > 0 );
    res.render( 'shop', {
        prods: products , 
        pageTitle: 'Shop', 
        path: '/shop', 
        hasProduct: products.length > 0
    });
});

module.exports = router;