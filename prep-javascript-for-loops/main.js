// create your loops here.
console.log('Loop 0 - 10');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('Loop Odd number');
for (let i = 0; i < 50; i++) {
  if ((i % 2) !== 0) {
    console.log(i);
  }
}

console.log('Loop increment 2');
for (let i = 0; i < 20; i = i + 2) {
  console.log(i);
}

console.log('Loop in reverse');
for (let i = 100; i > 0; i--) {
  console.log('Time till explosion: ', i);
}
