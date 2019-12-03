import express from 'express';
import expressValidator from 'express-validator';
import mySqlConnectionFactory from '../mysql/MySqlConnectionFactory';
import { makeid } from '../public/javascripts/generatorCode';
import { url } from 'inspector';
import PersonalData from '../models/PersonalDataModel';

const { check, validationResult } = require('express-validator');
const { param, query, cookies, header, body} = require ('express-validator'); 

   
const app = express();
//const server = express(); 

//rutas BookingDAO

//router.get("/",index)
router.post("/booking", async()=>{
   
//    await PersonalData.create();
//    await Customer.create();
//    await Booking.create();
})
router.get("/booking/:id", BookingDao.red)
router.put("/booking/:id", BookingDao.update)
router.delete("/booking/:id", BookingDao.delete)

//rutas GuestDAO

//router.get("/",index)
// router.post("/create", GuestDao.create)
// router.get("/:id", GuestDao.read)
// router.put("/:id", GuestDao.update)
// router.delete("/:id", GuestDao.delete)

export default router;

