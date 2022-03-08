<script>
  export let id;
  export let film;
  export let fig;
  export let caption;
</script>

<figure>
  <img src="https://i.ytimg.com/vi/{id}/maxresdefault.jpg" alt="coughs in the film {film}" />
  <figcaption>Fig. {fig} {caption}</figcaption>
</figure>

<style>
  figure {
    max-width: 40em;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  figcaption {
    margin-top: 0.5rem;
    line-height: 1.2;
    font-size: 0.9em;
  }
</style>
