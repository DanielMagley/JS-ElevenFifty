// let favoriteSuperheroes = [
//   { name: "Wonder Woman", universe: "DC" },
//   { name: "Loki", universe: "Marvel" },
//   { name: "Aquaman", universe: "DC" },
//   { name: "Black Widow", universe: "Marvel" },
//   { name: "Thor", universe: "Marvel" },
//   { name: "Hawkeye", universe: "Marvel" },
//   { name: "Doctor Strange", universe: "Marvel" },
//   { name: "The Flash", universe: "DC" },
//   { name: "Scarlet Witch", universe: "Marvel" }
// ];

// let marvelOnly = favoriteSuperheroes.filter(function(hero) {
//   return hero.universe === "Marvel";
// });

// let marvelHeroes = [];
// for (hero in favoriteSuperheroes) {
//   if (hero.universe === "Marvel") {
//     marvelHeroes.push(hero);
//   }
// }

// console.log(marvelHeroes);

// let people = [
//   { name: "Paul", title: "Instructor" },
//   { name: "Carolyn", title: "Instructor" },
//   { name: "Tyler", title: "Instructor" },
//   { name: "David", title: "Instructor" },
//   { name: "Kenn", title: "Instructor" },
//   { name: "Tom", title: "Instructor" },
//   { name: "Quentin", title: "Student" },
//   { name: "Aurelia", title: "Student" },
//   { name: "Hope", title: "Student" },
//   { name: "Caleb", title: "Student" },
//   { name: "Daniel", title: "Student" },
//   { name: "Austin", title: "Student" },
//   { name: "Robin", title: "Admin" },
//   { name: "Alex", title: "Admin" },
//   { name: "Bob", title: "Admin" },
//   { name: "Chris", title: "Admin" },
//   { name: "Abi", title: "Admin" }
// ];

//Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object.
//Your function may have 3 parameters, the original object, property1, property2

// let origObj = {
//     key1: "value1",
//     key2: "Value2"
//   };

// console.log(origObj['key1'])

// // let newObj = {};

// function swapObj(obj, key1, key2) {
//   let newKey1 = object[prop1]
//   let newKey2 = object[prop2]

//   let nowObj = newKey1

//   return (newObj);
// }

// swapObj(origObj, 'key1', 'key2');

// const changePerson = (obj, prop1, prop2) => {
//   let newObj = Object.assign({}, obj)

//   let temp = newObj[prop1]
//   newObj[prop1] = newObj[prop2]
//   newObj[prop2] = temp

//   return newObj
// }

//----------------------------------------------------------------------------

// Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array.

// The function you create should return [50, 60, 60, 200] based on the arrays above.

// Make sure the values given to the function are an array type and they have data inside of them.

// If the first array has more values than the second, return that same number

let arrayOne = [10, 20, 30, 40, 50, 70];
let arrayTwo = [5, 3, 2, 5];

// const multiplies = (arr1, arr2) => {
//   let newArray = [];
//   for(let i=0; i< arr1.length; i++) {
//   newArray = [arr1[i] * arr2[i]]

//   console.log(newArray)
//   return newArray
//   }
// }

// let newArray = arrayOne.map(x => x * arrayTwo.map(y => y * 1))

let newArray1 = arrayOne.map(x => x * 1);
let newArray2 = arrayTwo.map(x => x * 1);
console.log(newArray1);
console.log(newArray2);

let multiple = (first, last) => {
  finalArr = first * last;

  return finalArr;
};

console.log(multiple(newArray1, newArray2));

// const multiply = (arr, index) => {
//   return arrayTwo[index]
// }

// console.log(arrayOne.map(multiply))
//   // return arrayTwo[index]

// multiplies(arrayOne, arrayTwo)
