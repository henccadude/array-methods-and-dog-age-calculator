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

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(e => {
  e.recFood = Math.trunc(e.weight ** 0.75 * 28);
});
console.log(dogs);

//2.
const sarahDog = dogs.find(e => e.owners.includes('Sarah'))
console.log(sarahDog)

console.log(`${sarahDog.curFood > sarahDog.recFood ? 
  'much' : 'little'}`);

//3.
const ownersTooMuch = dogs.filter(dogs => dogs.curFood < dogs.recFood)
.flatMap(dog => dog.owners);
const ownersTooLittle = dogs.filter(dogs => dogs.curFood > dogs.recFood)
.flatMap(dog => dog.owners);

//4.
console.log(`${ownersTooMuch.join(' ')} dogs eats too much`);
console.log('----------------')
console.log(`${ownersTooLittle.join(' ')} dogs eats too little`);

//5.
console.log(dogs.some(e => e.curFood === e.recFood));

const calcEnFood = e => e.curFood > e.recFood * 0.90 
&& e.curFood < e.recFood * 1.10;


//6.
console.log(dogs.every(e => calcEnFood(e)));


//7.
const enoughEatingDogs = dogs.filter(e => calcEnFood(e));
console.log(enoughEatingDogs);

//8.
const grouped = Object.groupBy(dogs, dog => {
  if(dog.curFood > dog.recFood){
    return 'too-much';
  } else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'enough';
  }
})
console.group(grouped);

//9.
const goupedByDogOwners = Object.groupBy(dogs, dog => 
  `${dog.owners.length}-Owners`);
console.log(goupedByDogOwners)

//10.
const ascendingFoodOrder = dogs.toSorted((a, b) => a.recFood - b.recFood)

console.log(ascendingFoodOrder);