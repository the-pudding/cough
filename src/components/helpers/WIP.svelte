<script>
  export let text;
</script>

<div>
  <p class="doi"><small>https://journal-doi.org/10.731/pcbi.1007742/</small></p>
  <p><em>Editor’s Note: {text}</em></p>
</div>

<style>
  div {
    padding: 1rem;
    background: var(--color-gray-100);
    margin-bottom: 2rem;
  }
  p {
    margin: 0;
  }

  .doi {
    margin-bottom: 0.5rem;
    text-align: center;
    /* position: absolute;
    top: 0.5rem;
    left: 0.5rem; */
  }

  @media only screen and (max-width: 1024px) {
    .doi {
      display: none;
    }
  }
</style>
