<script>
    import { onMount } from "svelte";
    import { HikeCard } from '$lib/components';

    let hikes = []

    onMount(async() => {
        const res = await fetch('http://localhost:3000/api/hikes');
        console.log(res);
        hikes = await res.json();
    })

</script>

<main>
    <h1 class="woo">PNW Hikes</h1>
    {#if hikes.length}
        {#each hikes as hike}
            <HikeCard hike={hike}/>
        {/each}
    {/if}
</main>

<style lang="scss">
    @import "../lib/styles/variables.scss";
    .woo {
        color: $nia-pink;
    }

</style>
