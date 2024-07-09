<template>

  <!-- TODO: Implement data table with CRUD operations -->

  <v-table density="compact">
    <thead>
    <tr>
      <th class="text-left">
        id
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Usage
      </th>
      <th class="text-left">
        Location
      </th>
      <th class="text-left">
        Type
      </th>
      <th class="text-left">
        Start Date
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in energyCommunityStore"
        :key="item.id"
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


</template>

<script setup>
// TODO: Use Pinia for state management and Vue Composition API for component logic

import {energyCommunityStore} from "@/stores/energyCommunityStore";

console.log(energyCommunityStore[0])





</script>

<style scoped>
/* Component specific styles */
</style>
