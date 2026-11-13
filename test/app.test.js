const { describe, test } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

describe('tasks-api', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { status: 'ok' });
  });

  test('POST /tasks creates a task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Write CI pipeline' });
    assert.equal(res.status, 201);
    assert.deepEqual(res.body, { id: 1, title: 'Write CI pipeline', done: false });
  });

  test('POST /tasks rejects empty title', async () => {
    const res = await request(app).post('/tasks').send({ title: '  ' });
    assert.equal(res.status, 400);
  });

  test('GET /tasks returns created tasks', async () => {
    const res = await request(app).get('/tasks');
    assert.equal(res.status, 200);
    assert.equal(res.body.length, 1);
  });
});
