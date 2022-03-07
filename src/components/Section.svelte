<script>
  import Materials from "$components/Table.Materials.svelte";
  export let numeral = "";
  export let title = "";
  export let content = [];

  const components = { Materials };
</script>

<section id={title.toLowerCase().replace(/ /g, "-")}>
  <h2>
    {#if numeral}{numeral}.{/if}
    {title}
  </h2>
  {#each content as { type, value }}
    {#if type === "hed"}
      <h3><em>{value}</em></h3>
    {:else if type === "table"}
      <svelte:component this={components[value]} />
    {:else}
      <p>{@html value}</p>
    {/if}
  {/each}
</section>
