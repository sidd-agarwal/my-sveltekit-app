<script>
	import ProductCard from './ProductCard.svelte';
    import {mockProducts} from '../mockProducts.js'
	import { each } from 'svelte/internal';
</script>

<main class="grid gap-6 md:grid-cols-12">
	<div class="border p-4 md:col-span-4">Filters</div>
	<div class="border p-4 md:col-span-8">
		<h1 class="font-bold text-18 pb-4">Products</h1>
		<div class="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {#each mockProducts as product}
                <ProductCard {...product}/>
            {/each}		
		</div>
	</div>
</main>
