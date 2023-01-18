const joi = require("joi");
const validator = (shcema) => (payload) =>
  shcema.validate(payload, { abortEarly: false });

const productsFilter = joi.object({
  brands:  joi.exist(),then :joi.array().optional(),
  categories:joi.exist(),then : joi.array().optional(),
  ratings: joi.exist(),then :joi.array().optional(),
  prices: joi.exist(),then :joi.array().optional(),
  discounts: joi.exist(),then :joi.array().optional(),
  searchItem: joi.exist(),then :joi.string().optional(),
  sort: joi.exist(),then :joi.string().optional(),
});
exports.validateFilters = validator(productsFilter);
