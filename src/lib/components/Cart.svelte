<script>
    import { cartOpen } from "$lib/stores/cartOpen";
    import { readCartItems } from "$lib/stores/cartItem";
	import CartItems from "./CartItems.svelte";
</script>
{#if $cartOpen}
<div class="fixed top-0 right-0 bg-white border-l w-[350px] h-full">
    <div class="flex gap-6 justify-between p-3 text-white bg-black">
        Cart
    <button class="text-20" on:click = {()=>$cartOpen=false}>
        <iconify-icon icon="material-symbols:close"></iconify-icon>
    </button>

    </div>

    <div class="p-3 grid gap-2">
        {#each Object.values($readCartItems) as cartItem }
            <CartItems {...cartItem}/>
        {/each}
    </div>

</div>
{/if}
