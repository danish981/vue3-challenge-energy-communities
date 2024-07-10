import {defineStore} from 'pinia';
import EnergyCommunityService from '../services/EnergyCommunityService';

export const energyCommunityStore = defineStore('energyCommunityStore', {
    state: () => ({
        // TODO: Define the state for storing energy communities data
        // Hint: You might need an array for communities and possibly other state variables for loading or error management
        communities: EnergyCommunityService.fetchCommunities(),
        selectedCommunities: [],
        loading: false,
        error: null
    }),

    getters: {
        getSelectedCommunities: {
            get: (state) => state.selectedCommunities
        }
    },

    actions: {
        // TODO: Implement an action to fetch communities data using the EnergyCommunityService
        // This should update the state appropriately with the data, loading status, and any errors

        async getCommunities() {
            this.loading = true;
            this.error = null;
            try {
                return this.communities = await EnergyCommunityService.fetchCommunities();
            } catch (error) {
                return this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // TODO: Implement create, update, and delete actions for communities
        // Each action should interact with the EnergyCommunityService and update the state accordingly

    }
});
