<template>

  <Centered>
    <div ref="donutChart" class="chart"></div>
    <h4 class="text-center">This chart shows the energy usage of each community</h4>
  </Centered>


</template>

<script setup>
import Centered from './../components/Centered.vue'
import { onMounted, ref, watch } from "vue";
import * as d3 from "d3";
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";

const store = useEnergyCommunityStore();
const donutChart = ref(null);

const drawChart = (data) => {
  const width = 980;
  const height = Math.min(width, 500);
  const radius = Math.min(width, height) / 2;

  const arc = d3
    .arc()
    .innerRadius(radius * 0.67)
    .outerRadius(radius - 1);

  const pie = d3
    .pie()
    .padAngle(1 / radius)
    .sort(null)
    .value((d) => d.value);

  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.name))
    .range(
      d3
        .quantize((t) => d3.interpolateSpectral(t * 0.8 + 0.1), data.length)
        .reverse()
    );

  const svg = d3
    .select(donutChart.value)
    .html("") // Clear previous content
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  svg
    .append("g")
    .selectAll("path")
    .data(pie(data))
    .join("path")
    .attr("fill", (d) => color(d.data.name))
    .attr("d", arc)
    .append("title")
    .text((d) => `${d.data.name}: ${d.data.value.toLocaleString()}`);

  svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .selectAll("text")
    .data(pie(data))
    .join("text")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .call((text) =>
      text
        .append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d) => d.data.name)
    )
    .call((text) =>
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text((d) => d.data.value.toLocaleString("en-US"))
    );

  return svg.node();
};

const transformData = (data) => {
  return data.map((item) => ({
    name: item.name.length > 9 ? item.name.substring(0, 9) + "..." : item.name,
    value: item.energyUsage,
  }));
};

onMounted(() => {
  const formattedData = transformData(store.communities);
  drawChart(formattedData);
});

watch(
  () => store.communities,
  (newData) => {
    const formattedData = transformData(newData);
    drawChart(formattedData);
  },
  { deep: true }
);
</script>

<style scoped>
.chart {
  margin: 20px auto;
}
</style>
