const expressValidator = require("express-validator");
const check = expressValidator.check();

module.exports = new (class {
  registerValidator() {
    return [
      check("").isEmail().withMessage("email is invalid"),
      check("name").notEmpty().isEmail().withMessage("name cant be empty"),
      check("password")
        .notEmpty()
        .isEmail()
        .withMessage("password cant be empty"),
    ];
  }

  loginValidator() {
    return [
      check("").isEmail().withMessage("email is invalid"),
      check("password")
        .notEmpty()
        .isEmail()
        .withMessage("password cant be empty"),
    ];
  }
})();
