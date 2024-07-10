import {defineStore} from 'pinia';
import EnergyCommunityService from '../services/EnergyCommunityService';

export const useEnergyCommunityStore = defineStore('energyCommunityStore', {
    state: () => ({
        communities: [],
        selectedCommunityNames: [],
        loading: false,
        error: null
    }),

    getters: {

        // selectedCommunities(state) {
        //     return state.communities.filter(community => state.selectedCommunityNames.includes(community.name));
        // }

        selectedCommunities(state) {
            if (state.selectedCommunityNames.length === 0) {
                return state.communities;
            }
            return state.communities.filter(community =>
                state.selectedCommunityNames.includes(community.name)
            );
        }

    },

    actions: {
        async getCommunities() {
            this.loading = true;
            this.error = null;
            try {
                this.communities = await EnergyCommunityService.fetchCommunities();
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },

        // Create, update, delete actions would go here
    }
});
