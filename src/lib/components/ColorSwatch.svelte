<script>
    export let hex;
    export let selected;
</script>

<button on:click class=" w-6 h-6 rounded-full"
        class:border-2={selected}
    style:background-color={hex}>
</button>