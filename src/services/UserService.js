import base from "@/api/api.js";

export default {
  fetchAllUsers() {
    return base.get("/api/user");
  }
};
