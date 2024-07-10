<template>

  <!-- TODO: Implement data table with CRUD operations -->
   
  <div class="middle-centered">
    <v-data-table
        density="compact"
        :headers="[
          { title: 'Id', value: 'id', align : 'start' },
          { title: 'Name', value: 'name' , align : 'start' },
          { title: 'Usage', value: 'energyUsage', align : 'start'  },
          { title: 'Members', value: 'members' , align : 'start' },
          { title: 'Location', value: 'location' , align : 'start' },
          { title: 'Type', value: 'energyType', align : 'start'  },
          { title: 'Date', value: 'startDate', align : 'start'  },
      ]"

        class="elevation-1 text-left bg-amber-darken-2 bg-grey-lighten-5 border-md rounded"
        :items="items"
        item-key="name"
        items-per-page="10"
    >

    </v-data-table>

  </div>


</template>

<script setup>
// TODO: Use Pinia for state management and Vue Composition API for component logic

// TODO: Use Pinia for state management and Vue Composition API for component logic
// TODO: Use Pinia for state management and Vue Composition API for component logic
import {energyCommunityStore} from "@/stores/energyCommunityStore";

const items = (await energyCommunityStore().getCommunities());

// const energyCommunities = ref([])


</script>


<style scoped>
.middle-centered {
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}


</style>
