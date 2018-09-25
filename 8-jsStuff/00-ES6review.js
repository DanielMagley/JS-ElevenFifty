// Arrow Functions & Return

function hello(name) {
    console.log(`Hello there, ${name}`)
}
hello('Steve')

// store as a variable -  remember this prevents it from being hoisted
// when there is one parameter you dont need parantheses

let hellos = name => console.log(`Hello there, ${name}`)
hellos('steve')

function fullName( first, last){
    return first + ' ' + last
} 
console.log(fullName('Dave', 'Rodgers'))

// return
// last thing in a function = nothing under return runs
// get things outside of the scope of the function
// can access info inside of the function
// can only have one return

let fullName = (first,last) => (`${first}, ${last}`)
console.log(fullName('Dave', 'Rodgers'))
// if its only one line with arrow functions it returns implicitly
// one line arrow functions - dont need curly braces or return


// loops are convenient for repetitive taks - but ES6 introduced better ways of iterating over arrays

// Map - allows us to preform the same action on every item in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let biggerNumbers = numbers.map(number => number * 4) //make a new variabel (biggerNumbers)
// oldArray.map(a name => what we want to do to each item)
console.log(numbers)
console.log(biggerNumbers)

let words = ['apple', 'banana', 'lime', 'kiwi', 'orange']
let uppercaseWords = words.map(upper => upper.toUpperCase(''))
console.log(uppercaseWords)

// Filter
// we can use this to go through an array, and only return items htat match our condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddArray = numbers.filter(number => number % 2 !== 0)
console.log(oddArray)

let names = ['Tom', 'Carolyn', 'Kenn', 'Tyler', 'Dave', 'Paul', 'Alecx']
let shortNames = names.filter(name => name.length <= 4)
console.log(shortNames)

//Challenge
let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
  ]

let marvelOnly = favoriteSuperheroes.filter(hero => hero.universe === 'Marvel')
console.log(marvelOnly)

let people = [
    {name: "Paul", title: "Instructor"},
    {name: "Carolyn", title: "Instructor"},
    {name: "Tyler", title: "Instructor"},
    {name: "David", title: "Instructor"},
    {name: "Kenn", title: "Instructor"},
    {name: "Tom", title: "Instructor"},
    {name: "Quentin", title: "Student"},
    {name: "Aurelia", title: "Student"},
    {name: "Hope", title: "Student"},
    {name: "Caleb", title: "Student"},
    {name: "Daniel", title: "Student"},
    {name: "Austin", title: "Student"},
    {name: "Robin", title: "Admin"},
    {name: "Alex", title: "Admin"},
    {name: "Bob", title: "Admin"},
    {name: "Chris", title: "Admin"},
    {name: "Abi", title: "Admin"}
  ]


  let results = (array, string) => array.filter(person => person.title === string)
  console.log(results(people, "Student"))
     
  
  
  
  