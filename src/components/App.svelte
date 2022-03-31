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

  const debug = () => {
    setTimeout(() => {
      [].concat([...document.querySelectorAll(".page")]).forEach((node, i) => {
        const { height } = node.getBoundingClientRect();
        console.log(i + 1, "-", Math.round(height));
      });
    }, 2000);
  };

  onMount(() => {
    if (window.location.href.includes("localhost:3000")) debug();
    [].concat([...document.querySelectorAll("article a, figcaption a")]).forEach((node) => {
      node.setAttribute("target", "_blank");
    });
  });
</script>

<WIP text={copy.authorNote} />
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
      {#if i === pages.length - 1}
        <Acknowledgements title="Acknowledgements" content={copy.acknowledgements} />
        <References title="References" content={copy.references} />
      {/if}
    </div>
  {/each}
</article>

<style>
  article {
    counter-reset: page-number;
    padding-bottom: 4rem;
  }
</style>
