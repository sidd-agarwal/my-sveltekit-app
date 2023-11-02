import { readonly, writable } from "svelte/store";

const cartItems = writable({});

export function addToCart(title, variant){
    const productData= {title, ...variant}
    cartItems.update((state)=>
    {
        const sku= productData.sku;
        state[sku]=productData;
        console.log(state)
        return state;
    })  
}

export function deleteFromCart (sku){
    cartItems.update((state)=>{
        delete state[sku];
        return state;
    })
}

export const readCartItems = readonly(cartItems);