<template>
  <!-- todo: Implement autocomplete and multiselect form field using Vuetify -->

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
    >
    </v-autocomplete>
  </div>
</template>

<script setup>
// TODO: Utilize Vue Composition API for managing states and logic

import {energyCommunityStore} from "@/stores/energyCommunityStore";
import {ref, watch} from "vue";

const store = energyCommunityStore();
const names = ref([]);
const selectedNames = ref([]);

store.getCommunities().then(communities => {
  names.value = communities.map(community => community.name);
});

watch(selectedNames, (newSelectedNames) => {
  console.log(newSelectedNames)
  store.selectedCommunities = newSelectedNames;
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
