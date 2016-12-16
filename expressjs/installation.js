

// Option 1
npm install -g express
// after this installation the command `express` was still not recognized
// solution:
npm install express-generator -g

// creating the skeleton website 
express ornbo

cd ornbo
// install the dependencies that the skeleton website requires
npm install

// run the website
node app.js