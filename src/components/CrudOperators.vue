
<!-- todo : remvoe this file and we no longer need this componnent -->
<!-- todo : we are adding add button, edit and delete button next to each record -->

<template>
  <div class="middle-centered">
    <v-btn color="primary" @click="addCommunity">Add Community</v-btn>
    <v-btn color="warning" @click="updateCommunity">Update Community</v-btn>
    <v-btn color="error" @click="deleteCommunity">Delete Community</v-btn>
  </div>
</template>

<script setup>
import { useEnergyCommunityStore } from "@/stores/energyCommunityStore";

const store = useEnergyCommunityStore();

const addCommunity = () => {
  const newCommunity = {
    name: "New Community",
    energyUsage: 1000,
    members: 100,
    location: "New Location",
    energyType: "Solar",
    startDate: "2024-07-09",
  };
  store.addCommunity(newCommunity);
};

const updateCommunity = () => {
  const updatedCommunity = {
    id: 1,
    name: "Updated Community",
    energyUsage: 2000,
    members: 200,
    location: "Updated Location",
    energyType: "Wind",
    startDate: "2024-07-09",
  };
  store.updateCommunity(updatedCommunity);
};

const deleteCommunity = () => {
  const id = 1; // Specify the ID of the community you want to delete
  store.deleteCommunity(id);
};
</script>

<style scoped>
.middle-centered {
  margin: 20px auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}
</style>
