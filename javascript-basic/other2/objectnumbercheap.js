/**
 * একটি array এর মধ্যে সবচেয়ে highest or low number
 */
function longestNumber(number) {
    let longNumber = number[0]
    for (let num of number) {
        if (num < longNumber) {
            longNumber = num
        }
    }
    return longNumber
}
const number = [4, 8, 30, 20, 2, 6]
console.log(longestNumber(number))

/**
 * 1) এটটি array এর object গুলার মধ্যে কোন টি সবচেয়ে কম বা বেশী price এর মোবাইল
 * 2) কোনগুলোর Processor same তাদের তথ্য একটি Array তে push
 */
const phoneInfo = [
    {
        brand: 'Samsumg',
        processor: 'Qualcom Snapdragon',
        ram: '8gb',
        price: 19500
    },
    {
        brand: 'Realme',
        processor: 'MediaTek',
        ram: '4gb',
        price: 25500
    },
    {
        brand: 'Techno',
        processor: 'Tensor',
        ram: '6gb',
        price: 20
    },
    {
        brand: 'Vivo',
        processor: 'Qualcom Snapgragon',
        ram: '4gb',
        price: 10
    }
]
// 1 For lowest/hieght price
let lowestPricePhone = phoneInfo[0]
console.log(lowestPricePhone)
for (const phone of phoneInfo) {
    if (phone.price < lowestPricePhone.price) {
        console.log(lowestPricePhone.price)
        lowestPricePhone = phone
    }
    // console.log(phone)
}
// console.log(lowestPricePhone)

// 2 For any two or more same key
let qualcomSnapdragon = []
for (const phone of phoneInfo) {
    if (phone.processor === 'Qualcom Snapdragon') {
        qualcomSnapdragon.push(phone)
    }
}
// console.log(qualcomSnapdragon)



