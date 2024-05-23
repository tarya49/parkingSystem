const express = require('express');
const router = express.Router();
const FeeModel= require('./fee_model')

router.get('/fees',async (req,res)=>{
    try {
        const {parkingId,sizeType,duration}=req.body;
        const items = await FeeModel.find(parkingId,sizeType);
        const fees=items.feesPerHr*duration;

        res.status(200).json(fees);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});
module.exports = router;