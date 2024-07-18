<template>
  <div class="middle-centered">
    <v-data-table
        density="compact"
        :headers="headers"
        class="elevation-1 text-left bg-amber-darken-2 bg-grey-lighten-5 border-md rounded"
        :items="selectedCommunities ?? store.communities"
        item-key="name"
        items-per-page="10"
    >

      <template v-slot:top>
        <v-btn color="primary" @click="openAddForm">Add Community</v-btn>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon @click="openEditForm(item)">
          <v-icon color="blue">mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteCommunity(item.id)">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="addoreditCommunityForm" max-width="600">
      <template v-slot:activator="{ on }"></template>

      <v-card prepend-icon="mdi-account" :title="isEditMode ? 'Edit Community' : 'Add Community'">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Name*" required v-model="form.name"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Energy Usage*" required v-model="form.energyUsage"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Members*" required v-model="form.members"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Location*" required v-model="form.location"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Energy Type*" required v-model="form.energyType"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Start Date*" required v-model="form.startDate"></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="addoreditCommunityForm = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="saveForm"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {useEnergyCommunityStore} from '@/stores/energyCommunityStore';

const store = useEnergyCommunityStore();

const headers = [
  {text: 'Id', value: 'id', align: 'start'},
  {text: 'Name', value: 'name', align: 'start'},
  {text: 'Usage', value: 'energyUsage', align: 'start'},
  {text: 'Members', value: 'members', align: 'start'},
  {text: 'Location', value: 'location', align: 'start'},
  {text: 'Type', value: 'energyType', align: 'start'},
  {text: 'Date', value: 'startDate', align: 'start'},
  {text: 'Actions', value: 'actions', align: 'center', sortable: false},
];

const addoreditCommunityForm = ref(false);
const isEditMode = ref(false);
const form = ref({
  id: null,
  name: '',
  energyUsage: '',
  members: '',
  location: '',
  energyType: '',
  startDate: '',
});

onMounted(async () => {
  await store.getCommunities();
});

const openAddForm = () => {
  form.value = {
    id: null,
    name: '',
    energyUsage: '',
    members: '',
    location: '',
    energyType: '',
    startDate: '',
  };
  isEditMode.value = false;
  addoreditCommunityForm.value = true;
};

const openEditForm = (item) => {
  form.value = {...item};
  isEditMode.value = true;
  addoreditCommunityForm.value = true;
};

const saveForm = () => {
  if (isEditMode.value) {
    store.updateCommunity(form.value);
  } else {
    store.addCommunity(form.value);
  }
  addoreditCommunityForm.value = false;
};

const deleteCommunity = (id) => {
  store.deleteCommunity(id);
};

const selectedCommunities = computed(() => store.selectedCommunities);

</script>

<style scoped>
.middle-centered {
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding: 10px;
}
</style>
