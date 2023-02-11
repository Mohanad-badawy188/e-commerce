const joi = require("joi");
const validator = (shcema) => (payload) => shcema.validate(payload);

const productsFilter = joi.object({
  brands: joi.exist(),
  then: joi.array().optional(),
  categories: joi.exist(),
  then: joi.array().optional(),
  ratings: joi.exist(),
  then: joi.array().optional(),
  prices: joi.exist(),
  then: joi.array().optional(),
  discounts: joi.exist(),
  then: joi.array().optional(),
  searchItem: joi.exist(),
  then: joi.string().optional(),
  sort: joi.exist(),
  then: joi.string().optional(),
});
const RelatedProducts = joi.object({
  brands: joi.exist(),
  then: joi.array().optional(),
  categories: joi.exist(),
  then: joi.array().optional(),
});
const Register = joi
  .object({
    firstName: joi.string().alphanum().min(3).max(30).required(),

    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .messages({'any.pattern': "password must contain Capital,Small,and Number"}),

    confirmPassword: joi.any().equal(joi.ref("password")).required().messages({
      "any.only": "confirm password does not match your password",
    }),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  })
  .xor("password", "access_token")
  .with("password", "confirmPassword");
const Login = joi.object({
  password: joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")).required(),

  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
});

exports.validateFilters = validator(productsFilter);
exports.validateRelated = validator(RelatedProducts);
exports.validateRegister = validator(Register);
exports.validateLogin = validator(Login);
