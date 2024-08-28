const mongoose = require('mongoose');

const housekeepingSchema = new mongoose.Schema({
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    task: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed', 'in-progress'], default: 'pending' },
    scheduledTime: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Housekeeping', housekeepingSchema);
