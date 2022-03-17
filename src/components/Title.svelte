<script>
  import copy from "$data/doc.json";

  const slug = (name) => name.toLowerCase().replace(/ /g, "-");
</script>

<section id="title">
  <h1>{@html copy.hed}</h1>
  <p>
    {#each copy.authors as name, i}
      <a target="_blank" href="https://pudding.cool/author/{slug(name)}"
        >{name}<sup>#</sup>{i < copy.authors.length - 1 ? ", " : ""}</a
      >
    {/each}
  </p>
  <p><sup>#</sup><em>{copy.institution}</em></p>
</section>

<style>
  section {
    text-align: center;
    column-span: all;
    padding-bottom: 2rem;
  }
  a {
    text-decoration: none;
  }
</style>
