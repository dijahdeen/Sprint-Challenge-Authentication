const server = require('../api/server');
const supereq = require('supertest');

describe ('users', () =>{
    it('post /register', async() => {
        const res = await supereq(server)
                .post('/register')
                .send({username:'dijah'})
            expect(res.status).toBe (200);
    });
});