let cart=[]

export function addCart(p1){
    cart.push(p1)
    
}

export function getCart(){
    return cart
        
}

export function removeCart(removeid){
    cart = cart.filter((product)=>{
        return product.id !== removeid  
    })
    return cart
}


