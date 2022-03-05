<script>
    import { onMount } from "svelte";
    import { CardContainer } from '$lib/components';

    let hikes = []

    onMount(async() => {
        
        const res = await fetch('http://localhost:3000/api/hikes');
        hikes = await res.json();
    })

</script>

<h1 class="woo">PNW Hikes</h1>
{#if hikes.length}
    <CardContainer hikeList={hikes} />
{/if}

<style lang="scss">
    @import "../lib/styles/variables.scss";
    .woo {
        color: $nia-pink;
    }

</style>
