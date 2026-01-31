
import { getProductById,getAllProducts } from "./product.js" 
import { addCart,getCart, removeCart } from "./cart.js"
import { calCulateTotal , DiscountedPrice, priceWithTax} from "./price.js"


//! 1. Got all the products:
let products = getAllProducts()
console.table(products)

//! 2. Fetting products from ID:
let product1 = getProductById(1)
console.log(product1)

let product2 = getProductById(2)
console.log(product2)

let product3 = getProductById(3)
console.log(product3)

let product4 = getProductById(4)
console.log(product4)

let product5 = getProductById(5)
console.log(product5)

let product6 = getProductById(6)
console.log(product6)

let product7 = getProductById(7)
console.log(product7)

let product8 = getProductById(8)
console.log(product8)

//! Adding products to cart
addCart(product1)
addCart(product2)
addCart(product3)
addCart(product4)
addCart(product5)
addCart(product6)
addCart(product7)

//! 3. getting products from cart:
console.log(getCart())

//! 4. removing item from cart:

let updatedCart = removeCart(5)
console.log(updatedCart)

//! 5. Subtotal:

let total = calCulateTotal(updatedCart)
console.log(total)

//! 6. Apply Discount with subtotal:

let disprice= DiscountedPrice(total)
console.log(disprice)

//! 7. Apply tax with discounted price:

let taxprice = priceWithTax(disprice)
console.log(taxprice)