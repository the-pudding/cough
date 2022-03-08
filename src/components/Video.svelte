<script>
  export let id;
  export let film;
  export let fig;
  export let caption;

  let yt;
</script>

<figure>
  <div class="inner">
    <div class="image">
      <img src="https://i.ytimg.com/vi/{id}/maxresdefault.jpg" alt="coughs in the film {film}" />
    </div>
    {#if yt}
      <div class="yt">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/{id}?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    {/if}
  </div>
  <figcaption>
    Fig. {fig}
    {caption}. <button on:click={() => (yt = true)}>Play Clip</button>
  </figcaption>
</figure>

<style>
  figure {
    max-width: 40em;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .inner {
    position: relative;
  }

  .yt {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  figcaption {
    margin-top: 0.5rem;
    line-height: 1.2;
    font-size: 0.9em;
  }

  img {
    width: 100%;
  }

  button {
    padding: 0;
    background: transparent;
    color: var(--color-link);
    text-decoration: underline;
    font-family: inherit;
    border-radius: 0;
  }
</style>
