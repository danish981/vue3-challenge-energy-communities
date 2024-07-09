<template>

  <!-- TODO: Implement data table with CRUD operations -->


  <div class="middle-centered">
    <v-table density="compact">
      <thead class="border border-b">
      <tr class="bg-grey-lighten-3">
        <th class="text-left">
          ID
        </th>
        <th class="text-left font-weight-bold">
          Name
        </th>
        <th class="text-left font-weight-bold">
          Usage
        </th>
        <th class="text-left font-weight-bold">
          Members
        </th>
        <th class="text-left font-weight-bold">
          Location
        </th>
        <th class="text-left font-weight-bold">
          Type
        </th>
        <th class="text-left font-weight-bold">
          Date
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in energyCommunities"
          :key="item.id"
      >
        <td class="text-left font-weight-bold">{{ item.id }}</td>
        <td class="text-left">{{ item.name }}</td>
        <td class="text-left">{{ item.energyUsage }}</td>
        <td class="text-left">{{ item.members }}</td>
        <td class="text-left">{{ item.location }}</td>
        <td class="text-left">{{ item.energyType }}</td>
        <td class="text-left">{{ item.startDate }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>


</template>

<script setup>
// TODO: Use Pinia for state management and Vue Composition API for component logic

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
