/* eslint-disable no-unused-vars */
import ProductService from "@/services/ProductService.js";
export const namespaced = true;

export const state = {
  products: []
};
export const mutations = {
  setProducts(state, products) {
    state.products = products;
  }
};
export const actions = {
  async fetchAllProducts({ commit }) {
    let products = [];
    try {
      const response = await ProductService.fetchAllProducts();
      products = response.data;
      return products;
    } catch (e) {
      console.log("failed to get products", e);
    } finally {
      commit("setProducts", products);
    }
  }
};
export const getters = {
  getProducts: state => {
    return state.products;
  }
};
