import { fastify } from 'fastify';
import { database } from './database.js';


const server = fastify();



server.post('/videos', () => {

    const database = new database();

    database.createVideo({
        title : 'Video 1',
        description : 'LIVE CORTANDO 100 AMOEDAS',
        duration : '1:00:00',
    });



})

server.get('/videos', () => {
    return ' hello world' ;
});

server.put('/videos', () => {

})

server.delete('/videos', () => {

})











server.listen({
    port : 8888
});
