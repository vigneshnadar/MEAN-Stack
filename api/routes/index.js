var express = require('express');

var router=express.Router();
var ctrlHotels=require('../controllers/hotels.controllers.js');

router.route('/hotels').get(ctrlHotels.getAllHotels);


router.route('/hotels/:hotelId').get(ctrlHotels.getOneHotel);

router.route('/hotels/new').post(ctrlHotels.addOneHotel);

module.exports= router;
