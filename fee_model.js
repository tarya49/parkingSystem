const mongoose = require('mongoose');
const Schema = { mongoose }
const AutoIncrement = require('mongoose-sequence')(mongoose);

const FeeSchema = Schema({

    parkingId: {
        type: Number,
        required: true
    },
    sizeType: {
        type: String,
        required: true
    },
    feesPerHr: {
        type: Number,
        required: true
    }
})

FeeSchema.plugin(AutoIncrement, { inc_field: 'id' });
const FeeModel=mongoose.model('fees',FeeSchema);

module.exports = FeeModel;