const fs = require("fs");
const crypto = require('crypto');

const content = fs.readFileSync('../hello.txt');
const header = `blob ${content.length}\0`;
const object = Buffer.concat([
    Buffer.from(header),
    content
]);
const hash = crypto
    .createHash("sha1")
    .update(content)
    .digest("hex");

// console.log(content);
// console.log(content.toString());
// console.log(content.length);
// console.log(hash);
console.log("Header:", header);
console.log("Object:", object);
