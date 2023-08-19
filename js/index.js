window.onload = async () => {
  renderProducts();
  await getProducts();
  loadCart();
  renderCart();
};
