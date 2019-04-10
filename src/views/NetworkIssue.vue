<template>
  <div class="container">
    <div class="content">
      <h1>Whoops!</h1>
      <h4>
        Looks like we are experiencing network issues... Please click the back
        button and try again.
      </h4>
      <router-link :to="{ name: 'home' }">Or go back home.</router-link>
    </div>
  </div>
</template>
