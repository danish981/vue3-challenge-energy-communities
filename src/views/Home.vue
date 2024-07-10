<script setup>
import AutocompleteSelect from "@/components/AutocompleteSelect.vue";
import Charts from "@/components/Charts.vue";
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
import CrudOperators from "@/components/CrudOperators.vue";
</script>

<template>
  <div>
    <!-- Dev server is running: TODO go on implementing the frontend -->

    <!-- todo : Place components here -->
    <autocomplete-select></autocomplete-select>
    <crud-operators></crud-operators>
    <energy-community-table></energy-community-table>

    <!-- todo : chart should be in separate route / page -->
    <charts></charts>
  </div>
</template>
