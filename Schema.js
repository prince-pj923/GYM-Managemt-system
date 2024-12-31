const Joi = require("joi");

const memberSchema = Joi.object({
    member: Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
        address: Joi.string().optional()
    }).required(),
});

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().optional()
    }).required(),
});

module.exports = { memberSchema, listingSchema };