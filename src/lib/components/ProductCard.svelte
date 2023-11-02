<script>
	import ColorSwatch from "./ColorSwatch.svelte";
	import ProductImage from "./ProductImage.svelte";
    import { addToCart } from "$lib/stores/cartItem";
    import { cartOpen } from "$lib/stores/cartOpen";

    export let title;
    export let variants;

    let selectedVariantIndex = 0;
    let selectedVariant;
    function swatchClicked(index){
        selectedVariantIndex=index;
    }
    function addToCartClicked(){
        addToCart(title,selectedVariant);
        $cartOpen=true;
    }
    $: selectedVariant=variants[selectedVariantIndex];
</script>

<div class="border p-3 grid gap-2 ">
    <ProductImage hex={selectedVariant.hex}/>
    <div class="">{title}</div>
    <div class="flex gap-2">
        {#each variants as variant, index}
            <ColorSwatch 
            on:click={()=>swatchClicked(index)}
            hex={variant.hex}
            selected= {index===selectedVariantIndex}
            />
        {/each}
    </div>
    <div class="">${selectedVariant.price}</div>
    <div class="">
        <button on:click={addToCartClicked} class="bg-black text-white p-2">Add to Cart</button>
    </div>
    
</div>