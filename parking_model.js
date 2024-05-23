const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ParkingSchema = mongoose.Schema({
    parkingName: {
        type: String,
        required: true
    },
    parkingAddress: {
        type: String,
        required: true
    }
});
ParkingSchema.plugin(AutoIncrement, { inc_field: 'id' });
const ParkingModel= mongoose.model('parking', ParkingSchema);

module.exports = ParkingModel;