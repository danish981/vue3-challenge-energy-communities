<template>

  <!-- TODO: Implement data table with CRUD operations -->


  <div class="middle-centered">
    <v-table density="compact">
      <thead>
      <tr>
        <th class="text-left">
          id
        </th>
        <th class="text-left">
          name
        </th>
        <th class="text-left">
          usage
        </th>
        <th class="text-left">
          members
        </th>
        <th class="text-left">
          location
        </th>
        <th class="text-left">
          type
        </th>
        <th class="text-left">
          date
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in energyCommunities"
          :key="item.name"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.energyUsage }}</td>
        <td>{{ item.members }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.energyType }}</td>
        <td>{{ item.startDate }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>


</template>

<script setup>
// TODO: Use Pinia for state management and Vue Composition API for component logic


import {ref} from "vue";
import energyCommunities from "@/mocked-data/energyCommunities";

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
