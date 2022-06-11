// write a function to validate a JSON with try catch.

function validationJson(json) {
  try {
    JSON.parse(json);
  } catch (e) {
    return false;
  }
  return true;
}
const validate = '{"name": "john"}';
const invalidate = "hello world";
console.log(validationJson(validate));
console.log(validationJson(invalidate));
