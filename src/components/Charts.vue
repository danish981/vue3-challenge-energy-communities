<template>
  <div ref="barChart" class="chart"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

const barChart = ref(null);

onMounted(() => {
  const data = [30, 86, 168, 281, 303, 365];

  const width = 400;
  const height = 200;

  const svg = d3.select(barChart.value)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f4f4f4")
      .style("margin-top", "50")
      .style("margin-left", "50");

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height - d)
      .attr("width", 40)
      .attr("height", (d) => d)
      .attr("fill", "orange");
});
</script>

<style scoped>
.chart {
  margin: 20px auto;
}
</style>
