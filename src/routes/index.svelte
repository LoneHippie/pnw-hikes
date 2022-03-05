<script>
    import { HikeCard } from '$lib/components';
</script>

<main>
    <h1 class="woo">Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <HikeCard 
        name={'Tunnel Falls'}
        coverImage={"https://www.oregonhikers.org/w/images/thumb/2/27/View_to_Shore_Acres%2C_Cape_Arago_State_Park.jpg/400px-View_to_Shore_Acres%2C_Cape_Arago_State_Park.jpg"}
        hikeType={'loop'}
    />
</main>

<style lang="scss">
    @import "../lib/styles/variables.scss";
    .woo {
        color: $nia-pink;
    }

</style>
