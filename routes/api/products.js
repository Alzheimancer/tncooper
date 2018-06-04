const express = require('express');
const router = express.Router();


// Load Input validation
const validationAddInput = require('../../validation/add');

const Product = require('../../models/Product');

// @route GET api/products/test
// @desc Tests products route
// @access Public
router.get('/test', (req, res) => res.json({
    msg: 'Products works'
}));

// @route Post api/products/add
// @desc Adds new product
// @access Private
router.post('/add', (req, res) => {

    const {
        errors,
        isValid
    } = validationAddInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newProduct = new Product({
        number: req.body.number,
        topic: req.body.topic,
        type: req.body.type,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        location: {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude,
            province: req.body.location.province,
            sector: req.body.location.sector,
        },
        postedBy: req.body.postedBy,
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => console.log(err));
    // console.log(req.body.number);
});

module.exports = router;