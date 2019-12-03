import express from 'express';
import expressValidator from 'express-validator';
import mySqlConnectionFactory from '../mysql/MySqlConnectionFactory';
import { makeid } from '../public/javascripts/generatorCode';
import { url } from 'inspector';
import PersonalData from '../models/PersonalDataModel';
import BookingDao from '../DAO/BookingDao';

const { check, validationResult } = require('express-validator');
const { param, query, cookies, header, body } = require ('express-validator'); 

   
const app = express();
//const server = express(); 

//rutas BookingDAO

//app.get("/",index)
app.post("/booking", async()=>{
   
//    await PersonalData.create();
//    await Customer.create();
//    await Booking.create();
})
app.get("/booking/:id", BookingDao.read)
app.put("/booking/:id", BookingDao.update)
app.delete("/booking/:id", BookingDao.delete)

//rutas GuestDAO

//app.get("/",index)
// app.post("/create", GuestDao.create)
// app.get("/:id", GuestDao.read)
// app.put("/:id", GuestDao.update)
// app.delete("/:id", GuestDao.delete)

export default app;

