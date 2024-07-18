<template>
  <div ref="donutChart" class="chart"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

const donutChart = ref(null);

onMounted(() => {
  const data = [10, 20, 30, 40, 50];
  const width = 400;
  const height = 200;
  const radius = Math.min(width, height) / 2;

  const svg = d3.select(donutChart.value)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const pie = d3.pie();

  const arc = d3.arc()
      .innerRadius(radius - 50)
      .outerRadius(radius);

  const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

  arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));
});
</script>

<style scoped>
.chart {
  margin: 20px auto;
}
</style>
