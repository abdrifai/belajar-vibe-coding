const request = require('supertest');
const app = require('../src/app');

describe('App Endpoints', () => {
    it('should return 200 on base route /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });

    it('should expose swagger docs on /api-docs', async () => {
        const res = await request(app).get('/api-docs/');
        expect(res.statusCode).toEqual(200);
        // Expect to see some HTML representing the swagger UI
        expect(res.text).toContain('swagger-ui');
    });
});
