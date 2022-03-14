<script>
  import Table from "$components/helpers/SortTable.svelte";
  import rows from "$data/analysis.csv";

  const columns = [
    { label: "Year", prop: "year", type: "number" },
    { label: "Film count", prop: "films", type: "number" },
    { label: "Expulsion count", prop: "expulsions", type: "number" }
  ];
</script>

<figure>
  <div class="inner">
    <p>Table 1</p>
    <p>Films Analyzed by Year</p>
    <Table {columns} {rows} />
  </div>
</figure>

<style>
  figure p {
    margin-bottom: 0.5em;
  }
</style>
