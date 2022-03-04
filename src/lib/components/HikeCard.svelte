<script>
    export let name;
    export let coverImage;
    export let hikeType;
</script>

<div class="card">
    <span>{name}</span>
    <img 
        src={coverImage}
        alt="thingyy dkfslkdf sd"
    />
    <span>{hikeType}</span>
</div>

<style>
    .card {
        font-size: 100px;
    }
</style>