<script setup>
import AutocompleteSelect from '@/components/AutocompleteSelect.vue';
import Charts from '@/components/Charts.vue';
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
</script>

<template>
  <div>
    <!-- Dev server is running: TODO go on implementing the frontend -->

    <h2 class="text-center ma-3 border-b">Energy Communities table | CRUD</h2>

    <!-- todo : Place components here -->
    <autocomplete-select></autocomplete-select>
    <energy-community-table></energy-community-table>


    <!-- todo : chart should be in separate route / page -->
    <charts></charts>

  </div>
</template>
