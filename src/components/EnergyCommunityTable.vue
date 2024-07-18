<template>
  <div class="middle-centered">


    <v-card title="Energy Communities" flat>

      <template v-slot:text>
        <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
        ></v-text-field>
      </template>


      <v-data-table
          density="compact"
          :headers="headers"
          class="elevation-1 text-left bg-amber-darken-2 bg-grey-lighten-5 border-md rounded"
          :items="selectedCommunities ?? store.communities"
          item-key="name"
          :search="search"
          items-per-page="10"
      >
        <template v-slot:top>
          <v-btn color="primary" @click="openAddForm">Add Community</v-btn>
        </template>


        <template v-slot:item.actions="{ item }">

          <v-btn
              variant="elevated"
              @click="openEditForm(item)"
              color="green"
              text="edit"
              class="mr-1 rounded"
              size="small"
              label
          >
            <v-icon color="white">mdi-pencil</v-icon>
          </v-btn>


          <v-btn
              variant="elevated"
              @click="deleteCommunity(item.id)"
              color="red"
              text="delete"
              class="rounded"
              size="small"
              label
          >
            <v-icon color="white">mdi-bucket</v-icon>
          </v-btn>


        </template>


      </v-data-table>

    </v-card>


    <v-dialog v-model="addoreditCommunityForm" max-width="600">
      <template v-slot:activator="{ on }"></template>

      <v-card prepend-icon="mdi-account" :title="isEditMode ? 'Edit Community' : 'Add Community'">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Name*" placeholder="e,g Solar power" required v-model="form.name"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Energy Usage*" placeholder="e,g 1500" required
                            v-model="form.energyUsage"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Members*" placeholder="200" required v-model="form.members"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Location*" placeholder="e,g London" required v-model="form.location"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Energy Type*" placeholder="e,g Solar" required
                            v-model="form.energyType"></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field label="Start Date*" placeholder="e,g 2020-01-01" required
                            v-model="form.startDate"></v-text-field>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary rounded" variant="elevated" text="Close"
                 @click="addoreditCommunityForm = false"></v-btn>
          <v-btn color="primary rounded" variant="elevated" text="Save" @click="saveForm"></v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {useEnergyCommunityStore} from '@/stores/energyCommunityStore';
import {useToast} from "vue-toastification";

const toast = useToast();

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
const search = ref('');

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

const saveForm = async () => {

  if (!form.value.name || !form.value.energyUsage || !form.value.members || !form.value.location || !form.value.energyType || !form.value.startDate) {
    toast.error('Please fill in all required fields');
    return;
  }

  if (isEditMode.value) {
    await store.updateCommunity(form.value);
    toast.success('Community updated successfully');
  } else {
    await store.addCommunity(form.value);
    toast.success('Community added successfully');
  }
  addoreditCommunityForm.value = false;
};

const deleteCommunity = async (id) => {
  await store.deleteCommunity(id);
  toast.success('Community deleted successfully');
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
