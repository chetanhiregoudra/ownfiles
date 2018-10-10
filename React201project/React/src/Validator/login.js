import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
    console.log(Validator.isEmail(data.userId)+" :emai")
  if (Validator.isEmpty(data.userId)) {
      console.log("ddd")
    errors.userId = 'This field is required';
  }
  console.log(Validator.isEmpty(data.password)+" :pass")
  if (Validator.isEmpty(data.password)) {
    console.log("pppp")
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}