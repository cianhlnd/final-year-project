const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema for reviews
const ReviewSchema = new Schema({
    username: { type: String, required: true },
    imageName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema, 'reviews');