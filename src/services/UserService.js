import base from "@/api/api.js";

export default {
  fetchAllUsers() {
    return base.get("/api/user");
  },
  fetchUser(id) {
    return base.get("/api/user/" + id);
  },
  saveUser(user) {
    return base.put("/api/user/" + user.id, user);
  },
  deleteUser(user) {
    return base.delete("/api/user/" + user.id);
  }
};
