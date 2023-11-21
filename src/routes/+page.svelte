<script lang="ts">
  import backgroundImage from "$lib/assets/background.jpg";
  import Hero from "$lib/components/Hero.svelte";
</script>

<Hero backgroundImageURL={backgroundImage}>
  <h3 class="subheader">
    <em>I am a </em>
  </h3>
  <h2 class="header">Machine Learning Engineer and Software Developer</h2>
  <h3 class="subheader">
    <em>
      who loves working on software projects that involve using AI to help
      people with
    </em>
  </h3>
  <h2 class="header">
    Digital Content Creation, Content Consumption, and Online Community Building
  </h2>
</Hero>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  .header {
    @apply mb-5 text-xl text-gray-50 font-bold;
  }
  .subheader {
    @apply mb-5 text-lg text-gray-100;
  }
</style>
