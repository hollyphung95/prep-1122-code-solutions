function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers exercise: ', addTwoNumbersResult);

/* convertHoursToMinutes */
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMinutes exercise: ', convertHoursToMinutesResult);

/* getGreeting */
function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var getGreetingResult = getGreeting('World');

console.log('getGreeting exercise: ', getGreetingResult);

/* addAndMultiplyBy5 */
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 exercise: ', addAndMultiplyBy5Result);

/* multiplyAndDivideBy5 */
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 exercise: ', multiplyAndDivideBy5Result);

/* subtractTwoNumbers */
function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers exercise: ', subtractTwoNumbersResult);

/* getCircleCircumference */
function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var getCircleCircumferenceResult = getCircleCircumference(5);

console.log('getCircleCircumference exercise: ', getCircleCircumferenceResult);

/* getFullName */
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');

console.log('getFullName exercise: ', getFullNameResult);

/* cube */
function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(5);

console.log('cube exercise: ', cubeResult);
