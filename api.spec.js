const request = require('supertest')
const api = require('./api.js')

describe('API End-to-End', () => {
  
  const testInstance = {
    name: 'test instance 123',
    ips: { public: 'public ip 456', private: ['private ip 789'] }
  }

  it('should successfully return data', async () => {
    const res = await request(api.app)
        .get('/api/v1/instances')
        .expect(200)
        .expect(result => {
            json = JSON.parse(result.text)
            expect(json).toHaveLength(50000)
        })
  });

  afterAll(done => {
    // TODO: This is not seeming to work - hence the forceexit flag passed to jest
    // find a way to make the exit cleaner
    api.app.close(done);
  });
});
