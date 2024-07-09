<template>

  <!-- TODO: Implement data table with CRUD operations -->


  <div class="middle-centered">
    <!--    <v-data-table-->
    <!--        density="compact"-->
    <!--        items-per-page="5">-->
    <!--      <thead class="border border-b">-->
    <!--      <tr class="bg-grey-lighten-3">-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Id-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Name-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Usage-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Members-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Location-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Type-->
    <!--        </th>-->
    <!--        <th class="text-left font-weight-bold">-->
    <!--          Date-->
    <!--        </th>-->
    <!--      </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--      <tr-->
    <!--          v-for="item in energyCommunities"-->
    <!--          :key="item.id"-->
    <!--      >-->
    <!--        <td class="text-left font-weight-bold">{{ item.id }}</td>-->
    <!--        <td class="text-left">{{ item.name }}</td>-->
    <!--        <td class="text-left">{{ item.energyUsage }}</td>-->
    <!--        <td class="text-left">{{ item.members }}</td>-->
    <!--        <td class="text-left">{{ item.location }}</td>-->
    <!--        <td class="text-left">{{ item.energyType }}</td>-->
    <!--        <td class="text-left">{{ item.startDate }}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </v-data-table>-->

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
