<template>
  <div ref="donutChart" class="chart"></div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import * as d3 from 'd3';

import {useEnergyCommunityStore} from '@/stores/energyCommunityStore';

const store = useEnergyCommunityStore();
const donutChart = ref(null);

const drawChart = (data) => {

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
}

const transformData = (data) => {
  return data.map(item => ({
    name: item.name.length > 9 ? item.name.substring(0, 9) + '...' : item.name,
    energyUsage: item.energyUsage
  }));
};

onMounted(() => {
  // drawChart([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]);

  drawChart([{
    value: 0.5,
    name: 'Energy Usage'
  }]);


  // const formattedData = transformData(store.communities);
  // drawChart(formattedData);

});


</script>

<style scoped>
.chart {
  margin: 20px auto;
}
</style>
