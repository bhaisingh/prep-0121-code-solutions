var person = {
  firstName: 'Rakesh',
  lastName: 'Singh',
  hobby: 'Fishing'
};

console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ' + fullName);

person.job = 'Sailor';
console.log('The person\'s current Job is: ' + person.job);

person.previousJob = 'Fisherman';
console.log('The person\'s previous Job was: ' + person.previousJob);

console.log('The complete person object: ', person);

var myCar = {
  make: 'Ford',
  model: 'F150',
  year: '2020'
};
console.log('Car information ', myCar);

myCar['Owner'] = fullName;

console.log('My name is ' + fullName + ' and I drive a ' + myCar.year + ' ' + myCar.make + ' ' + myCar.make + ' ' + myCar.model);

myCar['color'] = 'Metalic Blue';
console.log('My full car info: ', myCar);
