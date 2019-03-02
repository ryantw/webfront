<template>
  <v-container>
    <h1>Whoops!</h1>
    <h3>
      Looks like we are experiencing network issues... Please click the back
      button and try again.
    </h3>
    <router-link :to="{ name: 'home' }">Or go back home.</router-link>
  </v-container>
</template>
