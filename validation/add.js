const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validationAddProduct(data) {
    let errors = {};
    if (Validator.isLength(data.topic, {
            min: 2,
            max: 30
        })) {
        errors.topic = "topic must be between 2 and 30 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}