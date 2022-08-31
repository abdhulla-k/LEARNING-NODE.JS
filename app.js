// the function 'require()' using to import a module or something like below
const http = require( 'http' ); // imported http module or object
const fs = require( 'fs' ); // impored fs (file system) module to manipulate a file

// http module has a method called 'createServer()'. It is using to create a server like below. 
// you have to pass a callback function inside that function to handle request and response. The function you have 
// passing into the createServer() function should have two parameters to handle request and resaponse; 
// You have to save the server created and call 'listen(<port number>)' function to listen the server.
// we can use process.exit() to end the event loop. but we dont want to do that.

// eg.
const server = http.createServer( ( req, res ) => {
    // save or get route url from req
    const url = req.url;

    // save the request method like below
    const method = req.method;

    // console.log( req );
    // console.log( req.headers, req.url, req.method );
    // write code here
    // process.exit();

    // use routing like below
    if( url === '/' ) {
        // use second argument.write to write html in your response like below
        res.write( "<html>" );
        res.write( "<head><title>Enter message</title></head>" );
        res.write( '<body><form method="POST" action="/message"> <input type="text" name="message"> <button type="submit">Send</button></form></body>' );
        res.write( "</html>" );
        // must use .end(); at las of write() method like below
        return res.end();
    }

    // redirect a page like below
    if( url === "/message" && method === 'POST' ) {
        
        // this is how to use and manipulate data coming with reques. also how to use Buffer and streems.
        const body = [];
        req.on( 'data', (chunk) => {
            body.push( chunk );
        });

        req.on( 'end', () => {
            const parseBody = Buffer.concat( body ).toString();
            
            // create or manipulate a file like below
            fs.writeFileSync( 'messge.txt', 'Dummy' );
    
            // redirect like below
            res.statusCode = 302; // this is represend redirecting
            res.setHeader( 'Location', '/' );
            return res.end();
        })

    }

    // use second argument.setHeader to set header in your response;
    res.setHeader( 'Content-Type', 'text/html' );

    // use second argument.write to write html in your response like below
    res.write( "<html>" );
    res.write( "<head><title> My First Page </title></head>" );
    res.write( "<body><h1> Hellow from my Node.js server </h1></body>" );
    res.write( "</html>" );
    // must use .end(); at las of write() method like below
    res.end();

});

server.listen( 3000 );