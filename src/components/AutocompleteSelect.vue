<template>
  <centered>
    <v-autocomplete
      density="default"
      v-model="selectedNames"
      label="Select energy communities by name"
      item-title="name"
      item-value="name"
      :items="names"
      chips
      bg-color="#E0E0E0"
      clearable
      multiple
      variant="solo-filled"
    />
  </centered>
</template>

<script setup>
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";
import { onMounted, ref, watch } from "vue";
import Centered from "@/components/Centered.vue";

const store = useEnergyCommunityStore();
const names = ref([]);
const selectedNames = ref([]);

onMounted(async () => {
  await store.getCommunities();
  names.value = store.communities.map((community) => community.name);
});

watch(selectedNames, (newSelectedNames) => {
  store.selectedCommunityNames = newSelectedNames;
});
</script>

<style scoped></style>
