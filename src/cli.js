// Jitv0.0.1

const fs = require("fs");

const command = process.argv[2];

if (command === "init") {
    if (fs.existsSync('.joygit')) {
        console.log('A JoyGit repository already exists.')
    }
    else {
        fs.mkdirSync('.joyGit');
        console.log("Initializing joyGit -Jit")
    }
}

// console.log(process.argv);

// console.log(process.cwd());