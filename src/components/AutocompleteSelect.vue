<template>
  <!-- todo: Implement autocomplete and multiselect form field using Vuetify -->

  <div class="middle-centered">
    <v-autocomplete
        density="default"
        label="Energy Community Name"
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
const names = (await energyCommunityStore().getCommunities()).map(community => community.name);


</script>

<style scoped>
.middle-centered {
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}


</style>
