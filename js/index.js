window.onload = async () => {
  await getProducts();
  renderProducts();
  loadCart();
  renderCart();
  //pintarProductos(productos);
};
