<template>
  <div class="pa-4 text-center">
    <v-dialog
        v-model="addoreditCommunityForm"
        max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Edit Profile"
            variant="tonal"
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
          prepend-icon="mdi-account"
          title="User Profile"
      >
        <v-card-text>
          <v-row dense>

            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Name *"
                  required
                  v-model="form.name"
              ></v-text-field>
            </v-col>


            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Usage *"
                  required
                  v-model="form.energyUsage"
              ></v-text-field>
            </v-col>


            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Members *"
                  required
                  v-model="form.members"
              ></v-text-field>
            </v-col>


            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Location *"
                  required
                  v-model="form.location"
              ></v-text-field>
            </v-col>


            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Type *"
                  required
                  v-model="form.energyType"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="10">
              <v-text-field
                  label="Date *"
                  required
                  v-model="form.startDate">
              </v-text-field>
            </v-col>

          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              text="Close"
              variant="plain"
              @click="store.addOrEditCommunityForm = false"
          ></v-btn>

          <v-btn
              color="primary"
              text="Save"
              variant="tonal"
              @click="saveForm"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import {useEnergyCommunityStore} from "@/stores/energyCommunityStore";

import {ref} from 'vue';

const store = useEnergyCommunityStore();

const addoreditCommunityForm = ref(false);

const form = ref([{
  name: '',
  energyUsage: '',
  members: '',
  location: '',
  energyType: '',
  startDate: '',
}]);

const saveForm = () => {

  if (!form.value.name || !form.value.energyUsage || !form.value.members || !form.value.location || !form.value.energyType || !form.value.startDate) {
    alert('Please fill in all required fields');
    // todo : show an toaster error there to the user
    return;
  }

  store.addCommunity(form.value)
  console.log(form.value);
};


</script>
