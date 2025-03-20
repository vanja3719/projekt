const Joi = require("joi");

const expenseSchema = Joi.object({
    name: Joi.string().email().required(),
    amount: Joi.string().alphanum().min(6).required(),
    date: Joi.date().iso().required(),
    category: Joi.string().valid('food', 'transport', 'utilities', 'entertainment', 'other').required()
});

module.exports = expenseSchema;