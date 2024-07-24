<template>

  <!-- todo : make the loader working properly -->
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


  <!-- todo : create a generic component to centering the div by providing a slot -->
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="comfortable" elevation="2" prepend-icon="mdi-github" class="rounded text-center mt-3">
          <a class="text-decoration-none text-white text-center"
             href="https://github.com/danish981/vue3-challenge-energy-communities"
             target="_blank"
          >Jump to GitHub</a>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>




</template>


<script setup>
import AutocompleteSelect from "@/components/AutocompleteSelect.vue";
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
import {useEnergyCommunityStore} from "@/stores/energyCommunityStore";
import Centered from "@/components/Centered.vue";

const store = useEnergyCommunityStore();
</script>




