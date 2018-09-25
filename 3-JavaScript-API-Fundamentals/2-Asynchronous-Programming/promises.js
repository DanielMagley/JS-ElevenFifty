// var amIgood = false;

// //Promise
// var iCanHasGift = new promise (
//     function (resolve, reject) {
//         if (amIgood) {
//             var gift = {
//                 brand: 'HasMattelBro',
//                 item: 'Turbo-Man actionfigure'
//             };
//             resolve(gift); //fulfilled
//         } else {
//             var naughty = "You've made Santa's naughty list; enjoy your coal!";
//             reject(naughty); //rejected
//         }
//     }
// );

// //Promise call
// var checkTwice = function () {
//     iCanHasGift
//         .then(function (fulfilled) {
//             //nice list = gift
//             console.log(fulfilled);
//         //output: {brand: 'HasMattlebro', item: 'Turbo-Man action figure'}
//         })
//         .catch(function (error) {
//             //naughty list = coal
//             console.log(error);
//             //output: "You've made Santa's naughty list; enjoy your coal!"
//         });
// }

// checkTwice();

// // 2nd Promise
// var playDate = function (gift) {
//     return new Promise (
//         function (resolve, reject) {
//             var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
//             ​

//             resolve(message);
//         }
//     );
// };

// //Promise CAll

// var checkTwice = function () {
//     console.log('before Christmas'); //log before
//     iCanHasGift
//         .then(playDate)
//         .then(function (fulfilled){
//             console.log(fulfilled);
//         })
//         .catch(function (error) {
//             console.log(error)
//         });
//     console.log('after opening gifts'); //log after
// } 


//------------------------------------------------------------------

let promise = new Promise(function (resolve,reject){
    setTimeout(() => {
        if (false) {
            resolve ('success');
        } else {
            reject('failure :(');
        }
    }, 3000);
});

promise
    .then(newResult => {
        return newResult + ' we are returning from our first .then'
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })

console.log('this code is after our promise & .then chain');