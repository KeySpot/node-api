const keyspot = require('./src/index');
const process = require('process');

const key = '610ee66604b4af8d1b15d740';
const newRecord = {};

for (let i = 1; i <= 30; i++) {
    newRecord[i.toString()] = 'a'.repeat(i); 
}

(async function() {
    await keyspot(key, newRecord)
    
    console.log(await keyspot(key));
    console.log(process.env)
})();