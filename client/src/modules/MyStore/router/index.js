export default {
  name: "MyStore",
  component: () =>
    import(
      /* webpackChunkName: "MyStore-layout" */ "@/modules/MyStore/layouts/MyStoreLayaout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry-product",
      component: () =>
        import(
          /* webpackChunkName: "MyStore-no-entry" */ "@/modules/MyStore/views/NoProductSelected.vue"
        ),
    },
    {
      path: "product/add",
      name: "product-add",
      component: () =>
        import(
          /* webpackChunkName: "New Product" */ "@/modules/MyStore/views/ProductView.vue"
        ),
    },
    {
      path: ":id",
      name: "product",
      component: () =>
        import(
          /* webpackChunkName: "MyStore-no-entry" */ "@/modules/MyStore/views/ProductView.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
