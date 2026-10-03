const crypto = require("crypto");

const hash = crypto.createHash('sha1').update('Hello').digest("hex");
// const hash = crypto.createHash('sha1');
// const hash2 = crypto.createHash('sha1').update('Hello');
// const hash3 = crypto.createHash('sha1').update('Hello').digest('hex');

console.log(hash);

