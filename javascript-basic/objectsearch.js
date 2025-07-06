// Search Phone Example 1
/* function searchProducts(products, search) {
    const searchedProduct = {}
    for (const product of products) {
        if (product.phone === search) {
            for (const key in product) {
                searchedProduct[key] = product[key]
                // let searchProduct = {}

                // searchProduct['phone'] = 'samsung'
                // console.log(searchProduct)
            }
        }
    }
    return searchedProduct
}

const products = [
    {
        phone: 'Samsung',
        ram: '4gb',
        price: 25000
    },
    {
        phone: 'Realme',
        ram: '2gb',
        price: 15000,
    },
    {
        phone: 'Redmi',
        ram: '4bg',
        price: 17000,
    },
    {
        phone: 'Tecno',
        ram: '6gb',
        price: 18000,
    }
]

console.log(searchProducts(products, 'Tecno'))
 */

// Search Phone Example 2
function searchProducts(products, search) {
    const searchedProduct = []
    for (const product of products) {
        if (product.phone.toLowerCase().includes(search.toLowerCase())) {
            searchedProduct.push(product)
        }
    }
    return searchedProduct
}

const products = [
    {
        phone: 'Samsung phone kamaka',
        ram: '4gb',
        price: 25000
    },
    {
        phone: 'Realme',
        ram: '2gb',
        price: 15000,
    },
    {
        phone: 'Redmi Phone dhamaka',
        ram: '4bg',
        price: 17000,
    },
    {
        phone: 'Tecno',
        ram: '6gb',
        price: 18000,
    }
]

console.log(searchProducts(products, 'Phone'))

