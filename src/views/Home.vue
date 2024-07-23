<template>
  <centered>
    <v-skeleton-loader
      v-if="store.showLoader"
      :elevation="5"
      type="card"
    ></v-skeleton-loader>
  </centered>

  <div>
    <autocomplete-select></autocomplete-select>
    <energy-community-table></energy-community-table>
  </div>
</template>


<script setup>
import AutocompleteSelect from "@/components/AutocompleteSelect.vue";
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";

const store = useEnergyCommunityStore();
</script>

