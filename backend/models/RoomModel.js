const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['available', 'occupied', 'cleaning', 'maintenance'], default: 'available' },
    inventory: {
        bedType: { type: String },
        size: { type: String },
        view: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
