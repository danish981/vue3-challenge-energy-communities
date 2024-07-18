<template>
  <div>
    <autocomplete-select></autocomplete-select>
    <add-or-edit-community-form></add-or-edit-community-form>

    <v-alert></v-alert>

    <energy-community-table></energy-community-table>
  </div>
</template>


<script setup>
import AutocompleteSelect from "@/components/AutocompleteSelect.vue";
import EnergyCommunityTable from "@/components/EnergyCommunityTable.vue";
import AddOrEditCommunityForm from "@/components/AddOrEditCommunityForm.vue";
</script>

