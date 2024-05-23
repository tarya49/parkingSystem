const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Define the schema
const SlotSchema = new mongoose.Schema({
  sizeType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  slotNo: {
    type: String,
    required: true,
  },
  parkingId: {
    type: Number,
    required: true,
  },
});

// Create the model
SlotModel.plugin(AutoIncrement,{inc_field: 'id' })
const SlotModel = mongoose.model('slot', SlotSchema);

module.exports = SlotModel;
