<template>
  <div class="container">
    <h1 class="title">Product Edit</h1>
    <h2 class="subtitle">{{ id }}</h2>

    <div class="field">
      <label for="productName" class="label">Product Name</label>
      <div class="control">
        <input
          id="productName"
          type="text"
          class="input"
          placeholder="Product Name"
          v-model="product.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmModal from "@/components/ConfirmModal.vue";
export default {
  components: {
    ConfirmModal
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      product: {
        id: "",
        name: ""
      }
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      let product = {};
      try {
        product = await this.$store.dispatch("products/fetchProduct", this.id);
      } catch (e) {
        console.log(e);
      } finally {
        this.product = product;
      }
    }
  }
};
</script>

<style></style>
