<script>
  export let file;
  export let fig;
  export let caption;
  export let alt;
</script>

<figure class="figure-image">
  <div class="inner">
    <img src="assets/{file}" {alt} />
  </div>
  <figcaption>
    <div class="inner">
      Fig. {fig}
      {@html caption}.
    </div>
  </figcaption>
</figure>

<style>
  figure {
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
