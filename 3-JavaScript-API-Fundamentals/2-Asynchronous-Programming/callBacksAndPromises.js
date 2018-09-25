//callbacks

function first(){
    setTimeout(function(){
    console.log("this is the first function")
    }, 500)
}

function second(){
    console.log("this is the second")
}

first()
second()
// callbacks are used to make things happen in a specific order
// for example if i have two functions, and the second one relies
// on information from the first, I want to only invoke the second function
// after the first is done.

function secondFunction() {
    console.log("second function")
}
function firstFunction(callback) {
    setTimeout(function(){
        console.log("first function")
        callback()
    }, 500)
}

firstFunction(secondFunction)

//promises are similar to callbacks - in that we can use them to make things happen in order asynchronously
//3 status: pending, resolved, rejected
//instead of calling other functions as parameters, they do things,
//and then either resolve or reject
//our next step is using ".then"
//cleaner syntax than callbacks

let one = new Promise(res => setTimeout(res(),500))

one
.then(
    res => console.log("two")
)
.catch(
    err => console.log(err)
)

let concert = (boughtTickets) => new Promise(
    (resolve, reject) => {
        boughtTickets ? resolved("you can go into the concert!") :
        reject("sorry you need a ticket to get in!")
    }
)

concert (true)
.then(res => console.log(res))
.catch(err => console.log("error", err))