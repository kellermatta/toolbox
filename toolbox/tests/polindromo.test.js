
let request = require('supertest')
const expect = require('chai').expect
const app = require('../main')
request = request(app)

describe('GET /iecho', function () {
  it ('return status 400 por falta de parametro text', async function () {
    const response = await request.get('/iecho?otros=ala')

    expect(response.status).to.equal(400)
  })

  it ('return status 200', async function () {
    const response = await request.get('/iecho?text=ala')

    expect(response.status).to.equal(200)
  })

  it ('return polindromo', async function () {
    const response = await request.get('/iecho?text=ala')

    expect(response.body.polindromo).to.equal(true)
  })
  
  it ('return 404', async function () {
    const response = await request.get('/otra?text=ala')

    expect(response.status).to.equal(404)
  })
})
