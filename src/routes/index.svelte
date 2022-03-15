<script>
  import { browser } from "$app/env";
  import Meta from "$components/Meta.svelte";
  import App from "$components/App.svelte";
  import copy from "$data/doc.json";
  if (browser) console.log("svelte-starter version", __VERSION__);
</script>

<Meta
  title={copy.title}
  description={copy.description}
  url={copy.url}
  keywords="oscars, academy awards, coughs, data, research"
/>
<App />
