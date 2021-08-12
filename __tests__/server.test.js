

"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);
const { it, expect } = require('@jest/globals');
let id=-1;
// ========== Server Tests==============
describe('SERVER TESTS:', () => {
    let obj = {
        color: 'Blue',
        material: 'Jeans',
        countryOfManufacture:'Jordan',
      };
      let id=-1;
    it('should respond with 404 on bad route', async () => {
      const response = await request.get('/badroute');
      expect(response.status).toEqual(404);
    //   expect(response.text).toEqual('not found')
    });
  
    it('should respond with 404 on bad method', async () => {
        const response = await request.post('/food/test');

        expect(response.status).toEqual(404);
        // expect(response.text).toEqual('not found');
    });
 

// // // =========== test Clothes ==============

// // // post......creat//


it('Should Create a record using POST /clothes', async () => {

    const response = await request.post('/clothes').send({
    color: 'Blue',
    material: 'Jeans',
    countryOfManufacture:'Jordan',
    });

    console.log(response.body)
    expect(response.status).toEqual(201);
})


// get ...read//
it('should Read a list of records using GET /clothes', async () => {
    const response = await request.get('/clothes');


    expect(response.status).toEqual(200);
    
  });
  //get by id ... read by id//
  it('should Read a record using GET /clothes', async () => {
    const response = await request.get('/clothes/1');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

it('update clothes', async () => {

    
    const res = await request.put(`/clothes/${id}`)
    expect(res.status).toEqual(200)
    
    
  });

it("clothes delete test", async () => {
    const response = await request.delete(`/clothes/1`);
    expect(response.status).toEqual(204);
  });
 
 
  
// // // =========== test Food==============

it('Should Create a record using POST /food', async () => {

    const response = await request.post('/food').send({
        name: 'Mansaf',
           type: 'Jordanian-cuisine',
      Taste:'Creamy and Rich in fat'
    });

    console.log(response.body)
    expect(response.status).toEqual(201);
})


// get ...read//
it('should Read a list of records using GET /food', async () => {
    const response = await request.get('/food');


    expect(response.status).toEqual(200);
    
  });
  //get by id ... read by id//
  it('should Read a record using GET /food', async () => {
    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

it('update food', async () => {
    const res = await request.put(`/food/${id}`)
    expect(res.status).toEqual(200)
    
    
  });

  
it("fooddelete test", async () => {
    const response = await request.delete(`/food/${id}`);
    expect(response.status).toEqual(204);
  });

})