<script>
  import "$lib/styles/app.scss";
  import dbConnectPromise from "$lib/database";

  dbConnectPromise();
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<nav>
  <a href=".">HOME</a>
  <a href="/about">ABOUT</a>
</nav>

<slot />

<style>
  
</style>