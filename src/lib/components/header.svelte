<script>
	import { cartOpen } from '$lib/stores/cartOpen';
    import { cartCount } from '$lib/stores/cartCount';
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
	<div class="font-bold uppercase text-24 text-blue">Logitech</div>
	<button class= 'relative text-30' on:click={()=>$cartOpen = true}>
		<iconify-icon icon="bx:cart" />
        {#if $cartCount}
        <div class="text-12 rounded-full w-4 h-4 p-0.5 absolute -top-1 -right-1 bg-blue">{$cartCount}</div>            
        {/if}
        
	</button>
</header>
