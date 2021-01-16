var languagesArray = [
  'html',
  'css',
  'javascript',
  'react',
  'node.js'
];

console.log('languages Array: ' + languagesArray);
console.log('array length: ', languagesArray.length);

languagesArray.push('c#');
languagesArray.push('php');
console.log('Updated array: ' + languagesArray);

languagesArray.pop();
console.log('last index removed: ' + languagesArray);

languagesArray.unshift('C++');
console.log('Added element to front: ' + languagesArray);

languagesArray.shift();
console.log('removed first element: ' + languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray: ' + thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of array is: ' + arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last element in the array is: ' + lastItem);
