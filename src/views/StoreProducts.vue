<template>
  <div class="container">
    <h1 class="title">Products</h1>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-success" :to="{ name: 'newProduct' }">
          <span>Add Product</span>
        </button>
      </p>
      <p class="control">
        <button class="button is-warning" @click="getProducts()">
          <span>Refresh</span>
        </button>
      </p>
    </div>
    <div v-if="products.length > 0">
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>On Webpage</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in sorted"
            :key="product.id"
            v-bind:class="{ 'is-disabled': !product.displayOnWebpage }"
          >
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.displayOnWebpage }}</td>
            <td>
              <div class="field is-grouped">
                <p class="control">
                  <router-link
                    tag="a"
                    class="button is-success"
                    :to="{ name: 'productEdit', params: { id: product.id } }"
                  >
                    <span>Edit</span>
                  </router-link>
                </p>
                <p class="control">
                  <button
                    class="button is-danger"
                    @click="deleteProduct(product.id)"
                  >
                    <span>Delete</span>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                  </button>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No products</p>
    </div>
    <ConfirmModal
      v-show="showModal"
      @modalResponse="handleModalResponse"
      v-bind:class="{ 'is-active': showModal }"
    >
      <h1 class="title" slot="title">Delete Product</h1>
      <h2 class="subtitle" slot="subtitle">
        Are you sure you want to delete this product?
      </h2>
    </ConfirmModal>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal.vue";

export default {
  data() {
    return {
      selectedProduct: {},
      showModal: false
    };
  },
  computed: {
    products: function() {
      return this.$store.getters["products/getProducts"];
    },
    sorted: function() {
      return this.products.slice().sort((a, b) => {
        return a.id - b.id;
      });
    }
  },
  methods: {
    getProducts() {
      this.$store.dispatch("products/fetchAllProducts");
    },
    async deleteProduct(id) {
      this.showModal = true;
      try {
        this.selectedProduct = await this.$store.dispatch(
          "product/fetchProduct",
          id
        );
      } catch (e) {
        console.log(e);
      }
    },
    async handleModalResponse(response) {
      this.showModal = false;
      if (response) {
        try {
          await this.$store.dispatch(
            "products/deleteProduct",
            this.selectedProduct
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
  created() {
    this.getProducts();
  },
  components: {
    ConfirmModal
  }
};
</script>

<style></style>
