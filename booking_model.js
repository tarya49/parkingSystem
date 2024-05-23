const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;
const bookingSchema = new Schema({
    slotId: {
        type: Number,
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    },
    existTime: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    }
})

parkingSchema.plugin(AutoIncrement, { inc_field: 'id' });
const bookingModel=mongoose.model('booking',bookingSchema);

module.exports = bookingModel;