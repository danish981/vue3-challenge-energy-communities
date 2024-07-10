<template>
  <div class="middle-centered">
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
  </div>
</template>

<script setup>
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";
import { ref, watch, onMounted } from "vue";

const store = useEnergyCommunityStore();
const names = ref([]);
const selectedNames = ref([]);

onMounted(async () => {
  await store.getCommunities();
  names.value = store.communities.map(community => community.name);
});

watch(selectedNames, (newSelectedNames) => {
  store.selectedCommunityNames = newSelectedNames;
});
</script>

<style scoped>
.middle-centered {
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}
</style>
