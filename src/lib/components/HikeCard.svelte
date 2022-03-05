<script>
    export let hike

    console.log({hike})
</script>

<div class="card">
    <div class="card__display">
        <h3>{hike?.name}</h3>
        <img 
            src={hike?.coverImage}
            alt={`Scenic shot of ${hike?.name}`}
        />
    </div>
   <div class="card__info">
        <span>{hike?.hikeType}</span>
   </div>
</div>

<style lang="scss">
    @import "../styles/variables.scss";
    .card {
        display: flex;
        flex-direction: column;
        border: 2px solid magenta;
        height: 40rem;

        border-radius: 10px;
        overflow: none;

        &:not(:last-child) {
            margin-bottom: 5rem;
        }

        &__display {
            position: relative;
            width: 100%;
            height: 50%;

            & > img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }
        }

        &__info {
            height: 50%;
            width: 100%;
        }
    }
</style>