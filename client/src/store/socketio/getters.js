export const getStatus = (state) => {
  return state.status;
};
export const get_products_list = (state) => {
  return state.products;
};

export const getProductById =
  (state) =>
  (id = "") => {
    const product = state.products.find((product) => product.id == id);
    if (!product) return;

    return { ...product };
  };

export const getProductByterm =
  (state) =>
  (term = "") => {
    console.log("term");
    if (term.length === 0) return state.products;

    return state.products.filter((product) =>
      product.nombre.toLowerCase().includes(term.toLocaleLowerCase())
    );
  };
