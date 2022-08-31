const express = require( "express" );

const router = express.Router();

router.use( '/', ( req, res, next ) => {

    // use res.send() method to send a response
    res.send( "<h1>Hello! home</h1>" );
});

module.exports = router;