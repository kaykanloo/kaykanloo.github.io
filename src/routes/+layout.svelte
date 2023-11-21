<script lang="ts">
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<header />
<nav>
  <NavBar />
</nav>
<main>
  <slot />
</main>
<footer />

<style lang="postcss"></style>
