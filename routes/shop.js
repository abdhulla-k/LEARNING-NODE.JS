const path = require( 'path' );

const express = require( "express" );

const router = express.Router();

router.get( '/', ( req, res, next ) => {

    // use res.send() method to send a response
    // res.send( "<h1>Hello! home</h1>" );

    // pass html pages return
    res.sendFile( path.join( __dirname, '../', 'views', 'shop.html' ));
});

module.exports = router;