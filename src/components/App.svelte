<script>
  import { onMount } from "svelte";
  import WIP from "$components/helpers/WIP.svelte";
  import Chunk from "$components/Chunk.svelte";
  import Title from "$components/Title.svelte";
  import References from "$components/References.svelte";
  import Acknowledgements from "$components/Acknowledgements.svelte";
  import copy from "$data/doc.json";
  import parsePages from "$utils/parsePages.js";

  const pages = parsePages(copy);

  onMount(() => {
    setTimeout(() => {
      [].concat([...document.querySelectorAll(".page")]).forEach((node, i) => {
        const { height } = node.getBoundingClientRect();
        console.log(i + 1, "-", Math.round(height));
      });
    }, 2000);
    [].concat([...document.querySelectorAll("article a, figcaption a")]).forEach((node) => {
      node.setAttribute("target", "_blank");
    });
  });
</script>

<WIP />
<article>
  {#each pages as content, i}
    <div class="page">
      {#if i === 0}
        <Title />
        <section id="abstract">
          <p><strong><em>Abstract- </em>{@html copy.abstract}</strong></p>
        </section>

        <section id="keywords">
          <p><strong><em>Keywords- </em>{@html copy.keywords}</strong></p>
        </section>
      {/if}

      {#each content as { type, value }}
        <Chunk {type} {value} />
      {/each}
    </div>
  {/each}
  <div class="page">
    <Acknowledgements title="Acknowledgements" content={copy.acknowledgements} />
    <References title="References" content={copy.references} />
  </div>

  <!-- <div class="page">
    
    <Section numeral="II" title="Methods and Materials" content={copy.methods} />
  </div>

  <div class="page">
    <Section numeral="III" title="Results" content={copy.results} />
  </div>

  <div class="page">
    <Section numeral="IV" title="Discussion" content={copy.discussion} />
    <Section numeral="V" title="Conclusions" content={copy.conclusions} />
  </div>

  <div class="page">
    <Section title="Acknowledgement" content={copy.acknowledgement} />
  </div> -->
</article>

<style>
  article {
    counter-reset: page-number;
  }

  .page {
    position: relative;
    counter-increment: page-number;
  }

  .page:after {
    content: "Page " counter(page-number);
    display: block;
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 100%;
    text-align: center;
  }
  @media only screen and (min-width: 1024px) {
    .page {
      /* height: 700px; */
      /* background: pink; */

      border-bottom: 1px solid var(--color-gray-500);
      margin-bottom: 4rem;
      padding-bottom: 6rem;
      column-count: 2;
      column-gap: 2rem;
    }
  }
</style>
