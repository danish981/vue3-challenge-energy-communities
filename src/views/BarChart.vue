<template>
  <Centered>
    <div ref="barChart" class="chart"></div>
    <h4 class="text-center">
      This chart shows the energy usage of each energy type
    </h4>
  </Centered>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as d3 from "d3";
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";
import Centered from "@/components/Centered.vue";

const store = useEnergyCommunityStore();
const barChart = ref(null);

const drawChart = (data) => {
  const width = 928;
  const height = 500;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .nice()
    .range([height - marginBottom, marginTop]);

  const svg = d3
    .select(barChart.value)
    .html("") // Clear previous content
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  svg
    .append("g")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d) => x(d.name))
    .attr("y", (d) => y(d.value))
    .attr("height", (d) => y(0) - y(d.value))
    .attr("width", x.bandwidth());

  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .append("text")
        .attr("x", -marginLeft)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Energy Usage")
    );
};

const updateChart = () => {
  const transformedData = store.getTransformedData;
  drawChart(transformedData);
};

onMounted(async () => {
  await store.getCommunities();
  updateChart();
});

watch(
  () => store.communities,
  () => {
    updateChart();
  },
  { deep: true }
);
</script>

<style scoped>
.chart {
  margin: 20px auto;
}
</style>
