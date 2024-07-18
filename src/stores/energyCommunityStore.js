import {defineStore} from 'pinia';
import EnergyCommunityService from '../services/EnergyCommunityService';

export const useEnergyCommunityStore = defineStore('energyCommunityStore', {

    state: () => ({
        communities: [],
        selectedCommunityNames: [],
        loading: false,
        error: null,
        addOrEditCommunityForm: false,
        isAdding: false
    }),

    getters: {
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

        async addCommunity(newCommunity) {
            try {
                const createdCommunity = await EnergyCommunityService.createCommunity(newCommunity);
                this.communities.push(createdCommunity);
            } catch (error) {
                this.error = error.message;
            }
        },

        async updateCommunity(updatedCommunity) {
            try {
                const updated = await EnergyCommunityService.updateCommunity(updatedCommunity);
                const index = this.communities.findIndex(c => c.id === updated.id);
                if (index !== -1) {
                    this.communities.splice(index, 1, updated);
                }
            } catch (error) {
                this.error = error.message;
            }
        },

        async deleteCommunity(id) {
            try {
                await EnergyCommunityService.deleteCommunity(id);
                this.communities = this.communities.filter(community => community.id !== id);
            } catch (error) {
                this.error = error.message;
            }
        }
    }
});
