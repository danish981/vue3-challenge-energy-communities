<script setup>
import AutocompleteSelect from "@/components/AutocompleteSelect.vue";
import Charts from "@/components/Charts.vue";
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
</script>

<template>
  <div>
    <!-- Dev server is running: TODO go on implementing the frontend -->
     
    <!-- todo : Place components here -->
    <autocomplete-select></autocomplete-select>
    <energy-community-table></energy-community-table>

    <!-- todo : chart should be in separate route / page -->
    <charts></charts>
  </div>
</template>
