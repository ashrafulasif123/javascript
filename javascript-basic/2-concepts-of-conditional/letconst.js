let price = 800;
const leader = false;

// if(leader === true){
//     price = 0;
// }

// else{
//     price += 100;
// }

// console.log(price)
// leader === true ? console.log(price) : console.log(price) ;

price = leader === true ? 0 : price + 100;
console.log(price);