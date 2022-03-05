<script>
    import HikeCard from './HikeCard.svelte'

    export let hikeList;
</script>

<section class="container">
    {#each hikeList as hike}
        <HikeCard hike={hike} />
    {/each}
</section>

<style lang="scss">
    @import "../styles/variables.scss";

    .container {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border: 2px solid $black;
    }
</style>