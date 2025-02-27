'use strict'

//Array methods
const checkDogs = function(dogsJulia, dogsKate) {
  const arrCopy = dogsJulia.slice(1, -2);
  console.log(arrCopy);
  const newCombinedArr = arrCopy.concat(dogsKate);
  console.log(newCombinedArr);
  newCombinedArr.forEach(function(age, i) {
    age < 3 && console.log(`Dog number ${i + 1} is still a puppy! Age: ${age}`);
    age >= 3 && console.log(`Dog number ${i + 1} is adult dog! Age: ${age}`);
  });
  
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],  [10, 5, 6, 1, 4]);

//Transfomations map, filter, reduce
const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(dogAge =>  dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);

  const over18 = humanAges.filter(age => age >= 18);

  //const avaregeAge = over18.reduce((acc, age) => acc + age, 0) / over18.length;
  const avaregeAge = over18.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  // 2 3 (2 + 3) / 2 = 2.5 === 2/2 + 3/2

  return avaregeAge ;
};

const result = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const result2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(result);
console.log(result2);