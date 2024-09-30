// var i = 1;

// function getData(buffer, newbuffer){
//     setTimeout(() => {
//         buffer(i);
//         i++;
//     }, 2000)
//     setTimeout(() => {
//         console.log('Data received');
//         if(newbuffer){
//             newbuffer();
//         }
//         else{
//             console.log('Task Complete !!')
//         }
//     }, 4000);
// }

// function buffer(val){
//     console.log(`Fetching data ${val}...`);
// }

// getData(buffer, () => {
//     getData(buffer, () => {
//         getData(buffer)
//     })
// });

// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }

// function apiCall(i){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(!isPrime(i)){
//                 resolve(`Data ${i} received`);
//             }
//             else{
//                 reject(`Data ${i} not received`);
//             }
//         }, 2000)
//     })
// }

// var i = 1;

// function iterate(){
//     if(i < 30){
//         console.log(`Fetcing data ${i}...`);
//         apiCall(i).then((res) => {
//             console.log(res);
//         })
//         setTimeout(() => {
//             i++;
//             iterate();
//         }, 3000)
//     }
//     else{
//         console.log('Task Complete !!');
//     }
// }

// iterate();

function sum (a, b) {
    return a + b;
}

function oddEven (sum) {
    if(sum % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

function callBack (sum, oddEven) {
    setTimeout(() => {
        console.log(`Sum is ${oddEven(sum(2, 3))}`);
    }, 2000);
    console.log(`Sum is ${sum(2, 3)}`);
}

callBack(sum, oddEven);