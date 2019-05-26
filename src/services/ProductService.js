import base from "@/api/api.js";

export default {
  fetchAllProducts() {
    return base.get("/api/product");
  },
  fetchProduct(id) {
    return base.get("/api/product/" + id);
  },
  saveProduct(id) {
    return base.put("/api/product/" + id);
  },
  deleteProduct(id) {
    return base.delete("/api/product/" + id);
  }
};
