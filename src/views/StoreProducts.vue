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
      <p>We got products</p>
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
