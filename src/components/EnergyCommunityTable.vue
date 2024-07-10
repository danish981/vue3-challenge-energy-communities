<template>
  <div class="middle-centered">
    <v-data-table
        density="compact"
        :headers="headers"
        class="elevation-1 text-left bg-amber-darken-2 bg-grey-lighten-5 border-md rounded"
        :items="selectedCommunities"
        item-key="name"
        items-per-page="10"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";

const store = useEnergyCommunityStore();

const headers = [
  {title: "Id", value: "id", align: "start"},
  {title: "Name", value: "name", align: "start"},
  {title: "Usage", value: "energyUsage", align: "start"},
  {title: "Members", value: "members", align: "start"},
  {title: "Location", value: "location", align: "start"},
  {title: "Type", value: "energyType", align: "start"},
  {title: "Date", value: "startDate", align: "start"},
];

onMounted(async () => {
  await store.getCommunities();
});

const selectedCommunities = computed(() => store.selectedCommunities);

</script>

<style scoped>
.middle-centered {
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}
</style>
