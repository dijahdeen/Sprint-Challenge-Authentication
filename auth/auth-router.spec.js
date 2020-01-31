const server = require('../api/server');
const requires = require('supertest');

describe ('auth router', () =>{
    it('post /register', async() => {
        const res = await requires(server)
                .post('/register')
                .send({username:'dijah', password: '1234'})
                .then(res => {
            expect(res.status).toBe(404);
        });
    });

    it('post /login', async() => {
        const res = await requires(server)
                .post('/login')
                .send({username:'lambda', password:"idkyet"})
            expect(res.status)
    });
});