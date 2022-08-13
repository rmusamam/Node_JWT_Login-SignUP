const joi = require("@hapi/joi");

const validateRegisteration = (req, res, next) => {
  const data = req.body;
//   console.log("this validating data ", data);
  schema = joi.object({
    email: joi.string().min(5).required(),
    name: joi.string().min(5).required(),
    password: joi.string().min(5).required(),
  });
  const Responses = schema.validate(data);
  if(!Responses.error) return next()
  res.send(Responses.error.details[0].message)
};

module.exports = validateRegisteration;
