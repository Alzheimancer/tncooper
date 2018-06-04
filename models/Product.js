const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    type: {
        type: String, // format: ['sell', 'rent']
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    category: {
        type: String, // format: ['',]
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        latitude: {
            type: Number,
            required: false
        },
        longitude: {
            type: Number,
            required: false
        },
        province: {
            type: String,
            required: true
        },
        sector: { // format: ['เหนือ', 'ใต้', 'กลาง', 'อีสาน', 'ตะวันออก']
            type: String,
            required: true
        }
    },
    postedBy: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Prouct = mongoose.model('products', ProductSchema);