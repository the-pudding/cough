<script>
  import Table from "$components/helpers/SortTable.svelte";
  import rows from "$data/coughgeist.csv";
  const columns = [
    { prop: "year", label: "Year", type: "number" },
    { prop: "winner", label: "Winner", type: "text" },
    // { prop: "total_expulsions", label: "Total expulsions", type: "number" },
    { prop: "median_expulsions", label: "Median expulsions", type: "number" },
    { prop: "winner_expulsions", label: "Winner's expulsions", type: "number" }
  ];
</script>

<figure>
  <div class="inner">
    <p>Table 2</p>
    <p>Coughgeist by Year</p>
    <Table {columns} {rows} />
  </div>
</figure>

<style>
  figure p {
    margin-bottom: 0.5em;
  }
</style>
