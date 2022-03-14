<script>
  export let file;
  export let fig;
  export let caption;
  export let alt;
</script>

<figure class="figure-image">
  <img src="assets/{file}" {alt} />
  <figcaption>
    Fig. {fig}
    {@html caption}.
  </figcaption>
</figure>

<style>
  figure {
    max-width: 40em;
    margin: 0 auto;
    margin-bottom: 2rem;
    display: inline-block;
  }

  figcaption {
    margin-top: 0.5rem;
    line-height: 1.2;
    font-size: 0.9em;
  }

  img {
    width: 100%;
  }
</style>
