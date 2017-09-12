/**
 * von peter LinK
 * @license GPL
 */
'use strict';
const fs = require('fs');
let sread = function(frage) {
    const   l=128, //max Eingabelänge
            enc='utf-8';            
    let buffer=Buffer.alloc(l),
        anzahl=0,
        ergebnis='',
        fd;
    if(process.platform ==='win32'){fd=process.stdin.fd;}else{fd=fs.openSync('/dev/stdin', 'rs');}
    process.stdout.write(frage);
    try{anzahl=fs.readSync(fd, buffer, 0, buffer.length);
    }catch(err){console.log(err.toString());
    }finally {fs.closeSync(fd);}   
    
    ergebnis=buffer.toString('utf-8',0,anzahl-1);
    return ergebnis;
};
module.exports = sread;
