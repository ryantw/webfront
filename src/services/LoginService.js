import base from "@/api/api.js";

export default {
  loginAttempt(user) {
    return base.post("/api/auth/login", user);
  }
};
