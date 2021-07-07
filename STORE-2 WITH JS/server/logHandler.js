const fs = require( 'fs' );
const moment = require( 'moment' );

const logs = {
    add: 'Added to cart',
    change: 'Changed data in cart',
    remove: 'Removed from cart',
};

let addLog = (log, cartLog) => {
    log.push(cartLog);
    return JSON.stringify(log, null, 4);
};

const logHandler = ( req, res, action, file ) => {
    fs.readFile( file, 'utf8', ( err, data ) => {
        if ( err ) {
            res.sendStatus( 404, JSON.stringify( { result: 0, text: err } ) );
        } else {
            let cartLog = {
                Product_name: req.params.name,
                Action: logs[ action ],
                Time: `${ moment().format( 'MMMM Do YYYY, h:mm:ss a' ) }`
            };
            let newLog = addLog( JSON.parse( data ), cartLog );
            fs.writeFile( file, newLog, ( err ) => {
                if ( err ) {
                    console.log('Error');
                } else {
                    console.log('Success');
                }
            } );
        }
    } )
};
module.exports = logHandler;