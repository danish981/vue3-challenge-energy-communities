import energyCommunities from "../mocked-data/energyCommunities";

export default {
    fetchCommunities() {
        return Promise.resolve(energyCommunities);
    },
    createCommunity(data) {
        const newCommunity = {...data, id: energyCommunities.length + 1};
        energyCommunities.push(newCommunity);
        return Promise.resolve(newCommunity);
    },
    updateCommunity(data) {
        const index = energyCommunities.findIndex(community => community.id === data.id);
        if (index !== -1) {
            energyCommunities[index] = {...energyCommunities[index], ...data};
            return Promise.resolve(energyCommunities[index]);
        } else {
            return Promise.reject(new Error("Community not found"));
        }
    },
    deleteCommunity(id) {
        const index = energyCommunities.findIndex(community => community.id === id);
        if (index !== -1) {
            energyCommunities.splice(index, 1);
            return Promise.resolve({});
        } else {
            return Promise.reject(new Error("Community not found"));
        }
    }
};