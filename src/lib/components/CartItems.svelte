<script>
	import { deleteFromCart } from "$lib/stores/cartItem";
	import ProductImage from "./ProductImage.svelte";

    export let hex;
    export let name;
    export let price;
    export let sku;
    export let title;
</script>

<div class="flex gap-2">
    <div class="w-[125px]">
        <ProductImage {hex}/>
    </div>
    <div class="flex-grow">
        <h3>{title}</h3>
        <div class="">{name}</div>
        <div class="">{sku}</div>
        <div class="">${price}</div>
    </div>
    <div class="text-30">
        <button on:click={deleteFromCart(sku)}><iconify-icon icon="material-symbols:delete-outline" /></button>
    </div>

 


</div>