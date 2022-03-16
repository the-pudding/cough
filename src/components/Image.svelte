<script>
  import batman from "$svg/batman.svg";
  import flow from "$svg/flow.svg";
  import winners from "$svg/winners.svg";
  export let file;
  export let fig;
  export let caption;

  const svg = { batman, flow, winners };
</script>

<figure class="figure-image">
  <div class="inner">
    {@html svg[file]}
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
  }

  figcaption {
    margin-top: 0.5rem;
    line-height: 1.2;
    font-size: 0.9em;
  }

  :global(.figure-image svg) {
    display: block;
    width: 100%;
  }
</style>
