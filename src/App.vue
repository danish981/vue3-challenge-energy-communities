<template>

  <v-app>
    <router-view/>
  </v-app>

  <v-card>
    <v-layout>

      <v-navigation-drawer expand-on-hover rail>

        <v-divider></v-divider>

        <v-list density="compact" nav>

          <router-link to="/">
            <v-list-item
                prepend-icon="mdi-table"
                class="nav-icon-dark-gray"
                title="Home"
                value="Home">
            </v-list-item>
          </router-link>

          <router-link to="/bar-chart">
            <v-list-item prepend-icon="mdi-chart-bar"
                         class="nav-icon-dark-gray"
                         title="Bar chart"
                         value="Bar chart">
            </v-list-item>
          </router-link>

          <router-link to="/donut-chart">
            <v-list-item prepend-icon="mdi-chart-donut"
                         class="nav-icon-dark-gray"
                         title="Donut chart"
                         value="Donut chart">
            </v-list-item>
          </router-link>


        </v-list>

      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>


<script setup>


</script>


<style>
.nav-icon-dark-gray {
  color: darkslategray !important;
}
</style>
