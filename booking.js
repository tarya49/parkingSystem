const express = require('express');
const bookingModel= require('./booking_model')
const router =express.Router();

router.post('/booking',async (req,res)=>{
 try {
    const {slotId,vehicleNo,entryTime,existTime,paymentStatus}=req.body;
    const newItem = new bookingModel({ slotId, vehicleNo, entryTime, existTime,paymentStatus });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});
module.exports=router;




