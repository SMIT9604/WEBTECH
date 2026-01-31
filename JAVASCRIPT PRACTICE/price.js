
export function calCulateTotal(updatedCart){
let Total = updatedCart.reduce((value,items)=>{
     return value + items.price
    
},0)
return Total
}

export function DiscountedPrice(calCulateTotal){
    let discount = calCulateTotal - (calCulateTotal * 0.1)
    return discount
}

export function priceWithTax(DiscountedPrice){
    let tax = DiscountedPrice + (DiscountedPrice * 0.18)
    return tax
}