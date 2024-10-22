const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('greet', () => {
    console.log('Hello, world!');
});


eventEmitter.emit('greet');


eventEmitter.on('sayHello', (name) => {
    console.log(`Hello, ${name}!`);
});

eventEmitter.emit('sayHello', 'Alice'); // Output: Hello, Alice!


const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.on('request', (req) => {
    console.log(`Request received: ${req.url}`);
});

server.listen(3000);



const greet = () => console.log('Hello there!');

eventEmitter.on('greet', greet);
eventEmitter.emit('greet'); // Output: Hello there!

eventEmitter.removeListener('greet', greet);
eventEmitter.emit('greet'); // No output, as the listener is removed



eventEmitter.once('greet', () => {
    console.log('This will only run once!');
});

eventEmitter.emit('greet'); // Output: This will only run once!
eventEmitter.emit('greet'); // No output
