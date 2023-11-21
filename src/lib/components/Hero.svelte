<script lang="ts">
  export let backgroundImageURL: string;
</script>

<div class="hero min-h-screen" style="background-image: url({backgroundImageURL});">
  <div class="hero-overlay bg-opacity-50" />
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-sm md:max-w-lg">
      <slot />
    </div>
  </div>
</div>

<style lang="postcss"></style>
