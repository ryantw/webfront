<template>
  <div>
    <nav
      class="navbar is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand" v-on:click="showNav = !showNav">
        <router-link tag="a" to="/" class="navbar-item">PW&P ADMIN</router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="pnp-navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="pnp-navbar"
        class="navbar-menu"
        v-bind:class="{ 'is-active': showNav }"
      >
        <div class="navbar-start">
          <router-link tag="a" to="/" class="navbar-item">Home</router-link>
        </div>
        <div class="navbar-end">
          <router-link tag="a" to="/admin/users" class="navbar-item"
            >USERS</router-link
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">PRODUCTS</a>
            <div class="navbar-dropdown">
              <router-link
                tag="a"
                to="/admin/products/preorder"
                class="navbar-item"
                >PREORDER</router-link
              >
              <router-link
                tag="a"
                to="/admin/products/sizes"
                class="navbar-item"
                >SIZES</router-link
              >
            </div>
          </div>
          <router-link tag="a" to="/" class="navbar-item">LOGIN</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style></style>
