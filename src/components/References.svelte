<script>
  export let content;
  export let title;
</script>

<section id={title.toLowerCase().replace(/ /g, "-")}>
  <h2>{title}</h2>
  <ul>
    {#each content as { author, year, title, url }, i}
      <li>[{i + 1}] {author} ({year}) <a href={url} target="_blank">{title}</a></li>
    {/each}
  </ul>
</section>

<style>
  li {
    list-style-type: none;
  }
</style>
