<script>
  	import { Nav } from "$lib/components";
  	import "$lib/styles/app.scss";
  	
</script>

<svelte:head>
  	<meta name="robots" content="noindex" />
</svelte:head>

<main>
  	<Nav />
  	<slot/>
</main>