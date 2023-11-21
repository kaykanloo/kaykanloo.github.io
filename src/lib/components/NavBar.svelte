<script lang="ts">
  import NavBarIcon from "$lib/components/NavBarIcon.svelte";

  const links = [
    { label: "GitHub", url: "https://github.com/kaykanloo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kaykanloo/" },
    { label: "Contact", url: "mailto:contact@kaykanloo.com" },
  ];
</script>

<div class="navbar bg-gradient-to-b from-base-100 fixed">
  <div class="flex-1">
    <details class="dropdown">
      <summary class="btn btn-ghost lg:hidden">
        <NavBarIcon />
      </summary>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each links as link (link.url)}
          <li>
            <a href={link.url} target="_blank" rel="noopener noreferrer"
              >{link.label}</a
            >
          </li>
        {/each}
      </ul>
    </details>
    <a class="btn btn-ghost text-xl" href="#">Kaykanloo</a>
  </div>
  <div class="flex-none hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each links as link (link.url)}
        <li>
          <a href={link.url} target="_blank" rel="noopener noreferrer"
            >{link.label}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss"></style>
