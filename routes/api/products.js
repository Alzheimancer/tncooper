const express = require('express');
const router = express.Router();

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
    const newProduct = new Product({
        number: req.body.number,
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        province: req.body.province,
        sector: req.body.sector,
        postedBy: req.body.postedBy,
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => console.log(err));
});

module.exports = router;