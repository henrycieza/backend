import express from 'express';
import expressValidator from 'express-validator';
import mySqlConnectionFactory from '../mysql/MySqlConnectionFactory';
import { makeid } from '../public/javascripts/generatorCode';
import { url } from 'inspector';

const { check, validationResult } = require('express-validator');
const { param, query, cookies, header, body} = require ('express-validator'); 

import connectionFactory from '../mysql/CreedencialesBooking';
import BookingDAO from '../DAO/BookingDAO';
import GuestDAO from '../DAO/GuestDAO';
   
const app = express();
//const server = express(); 

//rutas BookingDAO

router.get("/",index)
router.post("/booking", BookingDAO.create)
 let BookingDAO = new BookingDAO(connectionFactory);

router.get("/booking/:id", BookingDAO.red)
router.put("/booking/:id", BookingDAO.update)
router.delete("/booking/:id", BookingDAO.delete)

//rutas GuestDAO

router.get("/",index)
router.post("/create", GuestDAO.create)
router.get("/:id", GuestDAO.read)
router.put("/:id", GuestDAO.update)
router.delete("/:id", GuestDAO.delete)

export default router;

