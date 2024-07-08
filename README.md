# Frontend Vue 3 Skill Test

## Overview

This project is designed to test your skills in Vue 3, Vuetify, Pinia, and d3.js. You will be creating a small application to manage and visualize data for Energy Efficiency Communities (EECs).

## Requirements

- Node.js 20.x or higher
- Familiarity with Vue 3 Composition API, Vuetify, Pinia, and d3.js

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Task Description

Your task is to develop an application that includes (using Vuetify components):

1. **Autocomplete and Multiselect Form Field:**
   - Create a component `AutocompleteSelect.vue` that allows users to type and select multiple energy communities using autocomplete suggestions.

2. **Data Table with CRUD Operations:**
   - Develop a `EnergyCommunityTable.vue` component to display energy communities in a table format.
   - Implement CRUD operations as table item actions. The state shall be stored in a Pinia store, while using the mocked endpoint service `EnergyCommunityService.js`.

3. **Data Visualization with d3.js:**
   - Build a `Charts.vue` component to visualize the data using a bar and a donut chart. The data should reflect statistics of energy usage or production.

4. **Pinia Stores:**
   - `energyCommunityStore.js`: Manages the state of energy communities data, handles CRUD operations by calling the mocked service.
   - `appStateStore.js`: Holds the general state of the application, such as loading states and possibly error messages.

5. **Component use:**
   - Use the `AutocompleteSelect.vue` component in the `EnergyCommunityTable.vue` component for searching and selecting energy communities.
   - Use the `EnergyCommunityTable.vue` component in the main `App.vue` component.
   - Use the `Charts.vue` component in the main `App.vue` component or in a separate route.

## Mock Data and Services

- The initial mock data can be found in `src/mock-data/energyCommunities.js`.
- The `EnergyCommunityService.js` simulates API calls for CRUD operations.

## Submission

Commit your changes to your cloned repository and create a pull request for final submission. Make sure your final submission includes:

- Functional components using Vue 3 Composition API.
- Usage of Vuetify for UI components.
- Advanced state management using Pinia.
- Interactive charts with d3.js.
- Clean, straight-forward and organized code structure.

Ensure you adhere to best practices and clean code standards to ensure the whole repository represents your skills and way of working. 

**Good luck!**

## Evaluation Criteria

- Code cleanliness and structure.
- Correct use of Vue 3 features, especially the Composition API.
- Effective use of Vuetify components and styling.
- Proper state management with Pinia, including asynchronous operations.
- Accuracy and presentation of d3.js charts.
