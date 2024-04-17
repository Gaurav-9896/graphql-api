import {startServer} from '../src/server';

startServer().catch(error => {
    console.error('Error starting the server:', error);
});
