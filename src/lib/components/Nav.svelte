<nav class="nav">
    <a href=".">Home</a>
    <a href="/about">About</a>
    <a href="/trails">Trails</a>
</nav>

<style lang="scss">
    @import "../styles/variables.scss";
    
    .nav {
        height: $nav-height;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        background-color: $nia-blue-dark;

        z-index: 1000;

        & > a {
            font-size: 2.5rem;
            margin-left: 1.5rem;

            color: $white;
        }
    }
</style>