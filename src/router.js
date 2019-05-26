import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

function loadComponent(component) {
  return () =>
    import(/* webpackChunkName: "component-[request]" */ `@/components/${component}.vue`);
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: loadComponent("Login")
    },
    {
      path: "/login",
      name: "login",
      component: loadComponent("Login")
    },
    {
      path: "/logout",
      name: "logout",
      component: loadView("Logout")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/admin/users",
      name: "userList",
      component: loadComponent("UserList")
    },
    {
      path: "/admin/users/edit/:id",
      name: "userEdit",
      component: loadView("UserEdit"),
      props: true
    },
    {
      path: "/admin/products",
      name: "storeProducts",
      component: loadView("StoreProducts")
    },
    {
      path: "/network-issue",
      name: "networkIssue",
      component: loadView("NetworkIssue")
    }
  ]
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  const publicPages = ["/login", "/logout", "/network-issue"];
  const authRequired = !publicPages.includes(routeTo.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    NProgress.done();
    return next("/login");
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
