    const fs = require( 'fs' ); // impored fs (file system) module to manipulate a file
    
    const requestHandler = ( req, res ) => {

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
    
            return req.on( 'end', () => {
                const parseBody = Buffer.concat( body ).toString();
                const message =  parseBody.split('=')[1];
    
                // create or manipulate a file like below
                // there are two methods. writeFile() and writeFilesync().
                // writeFileSync() working syncronously. it will block our cod.
                // writeFile() method work asyncronously. but it has a third argument. that is a callback function to work
                // if the process is completted. Actually it is using to handle errors.
                fs.writeFile( 'messge.txt', message, error => {
                    
                    // redirect like below
                    res.statusCode = 302; // this is represend redirecting
                    res.setHeader( 'Location', '/' );
    
                    // if you don't return end() function, every line of code after this will work after the execution of 
                    // these line;
                    return res.end();
                });
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
    };


// module.exports = {
//     handler : requestHandler,
// }