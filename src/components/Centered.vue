<template>
  <v-container class="bg-grey-lighten-5">
    <v-row justify="start">

      <v-row justify="center">


        <!-- convert this to named slot and put the value from there to here -->
        <v-col cols="8">

          <slot></slot>

        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>