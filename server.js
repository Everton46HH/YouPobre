import { fastify } from 'fastify';
import { database } from './database.js';


const server = fastify();

const db = new database();


server.post('/videos', (request , reply) => {

    db.createVideo({
        title : 'Video 1',
        description : 'LIVE CORTANDO 100 AMOEBAS',
        duration : '1:00:00',
    });

    console.log(db.list());

    return reply.status(201).send();


})

server.get('/videos', () => {
    return ' hello world' ;
});

server.put('/videos:id', () => {

})

server.delete('/videos/id', () => {

})


server.listen({
    port : 8888
});
