<script>
	import Footer from '../lib/components/footer.svelte';
	import Header from '../lib/components/header.svelte';
	import PlpPageLayout from '../lib/components/plpPageLayout.svelte';

	let rtl = false;
	function toggleRTL() {
		rtl = !rtl;
	}
</script>

<button class="pb-6" on:click={toggleRTL}>Toggle RTL</button>
<div class="grid gap-6" dir={rtl ? 'rtl' : 'ltr'}>
	<Header />
    <PlpPageLayout />
	<Footer />
</div>
