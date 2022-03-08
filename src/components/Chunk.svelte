<script>
  import Video from "$components/Video.svelte";
  import Materials from "$components/Table.Materials.svelte";
  export let type;
  export let value;

  const components = { Materials };
  const getTitle = (title) => `${title[0].toUpperCase()}${title.substring(1)}`;
</script>

{#if type === "title"}
  <h2 id={value.id}>
    <span
      >{#if value.numeral}{value.numeral}.{/if}</span
    >
    {getTitle(value.title)}
  </h2>
{:else if type === "hed"}
  <h3><strong><em>{value}</em></strong></h3>
{:else if type === "table"}
  <svelte:component this={components[value]} />
{:else if type === "video"}
  <Video {...value} />
{:else}
  <p>{@html value}</p>
{/if}

<style>
  h2 span {
    text-transform: uppercase;
  }
</style>
