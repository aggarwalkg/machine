const { check, validationResult } = require("express-validator");


export const _login = [
  check("email")
    .exists()
    .withMessage("Email is required.")
    .not()
    .isEmpty()
    .withMessage("Email ID field cannot be empty.")
    .isEmail()
    .withMessage("Email format is not valid."),
  check("password")
    .exists()
    .withMessage("Password is required")
    .not()
    .isEmpty()
    .withMessage("Password field cannot be empty.")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters."),
  (req:any, res:any, next:any) => {
    const errors = validationResult(req);
    let error:any = { email: [], password: [] };
    if (errors.isEmpty() === false) {
      errors.array().forEach((e:any) => {
        error[e.param].push(e.msg);
      });

      let send_data = {
        message: "Input validation Error",
        errorData: error,
      };
      return res.status(400).send(send_data);
    } else {
      next();
    }
  },
];
