<script>
  export let content;
  export let title;
</script>

<section id={title.toLowerCase().replace(/ /g, "-")}>
  <h2>{title}</h2>

  {#each content as { value }}
    <p>{@html value}</p>
  {/each}
</section>
