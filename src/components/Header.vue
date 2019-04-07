<template>
  <div>
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link
          tag="a"
          to="/"
          class="navbar-item"
          >PW&P ADMIN
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <router-link
            tag="a"
            to="/admin/users"
            class="navbar-item"
            >USERS</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                PRODUCTS
              </a>
              <div class="navbar-dropdown">
                <router-link
                  tag="a"
                  to="/admin/products/preorder"
                  class="navbar-item"
                  >PREORDER</router-link>                  
                <router-link
                  tag="a"
                  to="/admin/products/sizes"
                  class="navbar-item"
                  >SIZES</router-link>        
              </div>
            </div>           
          <router-link
            tag="a"
            to="/"
            class="navbar-item"
            >LOGIN</router-link>            
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
