const users = require("../routes/users.js");

const request = require("supertest");
const express = require("express");
const { test, expect } = require('@jest/globals')
const app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", users);
const mongoose = require('mongoose');


test("users testing route and connect db", async () => {
// Mongodb connection
const uri = "uri";
async function connect() {
try{
  (await mongoose.connect(uri)).isObjectIdOrHexString(()=> {console.log("connected");});
  console.log('mongoDB database connected! :)')
} catch (error) { console.log("not connected! :(")
  console.error(error);
}}
connect();
//
  const response = await request(app).get("/")
    expect(response.text).toBe("test")
    expect(response.statusCode).toBe(200)
});

test("testing registration - 'email is taken' response", async () => {
  const payload = { 
    email: 'test@gmail.com', 
    login: 'login', 
    password: 'password' };
  const response = await request(app)
    .post('/registration/check/')
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
  expect(response.text).toEqual(JSON.stringify({message: "Email taken!"}))
  expect(response.statusCode).toBe(200)
});

test("testing registration - 'registration successful' response", async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const payload = { 
      email: `${randomNum}@gmail.com`, 
      login: 'login', 
      password: 'password' };
    const response = await request(app)
      .post('/registration/check/')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
    expect(response.text).toEqual(JSON.stringify({message: "Registered :)"}))
    expect(response.statusCode).toBe(200)
});
  
test("testing login - 'no such account' response", async () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const payload = { 
    email: `${randomNum}@gmail.com`, 
    login: 'login', 
    password: 'password' };
  const response = await request(app)
    .post('/login/check/')
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
  expect(response.text).toEqual(JSON.stringify({message: "No such account!", login: "", password: "" }))
  expect(response.statusCode).toBe(200)
});

test("testing login - 'wrong password' response", async () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const payload = { 
    email: `test@gmail.com`, 
    login: 'login', 
    password: 'wrongPassword' };
  const response = await request(app)
    .post('/login/check/')
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
  expect(response.text).toEqual(JSON.stringify({message: "Wrong password!", login: "", password: "" }))
  expect(response.statusCode).toBe(200)
});

test("testing login - 'logged in' response", async () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const payload = { 
    email: `test@gmail.com`, 
    login: 'login', 
    password: 'password' };
  const response = await request(app)
    .post('/login/check/')
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
  mongoose.connection.close()  
  expect(response.text).toEqual(JSON.stringify({message: "Logged in :)", login: "login", password: "password" }))
  expect(response.statusCode).toBe(200)
});
