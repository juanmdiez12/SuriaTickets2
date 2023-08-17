let availableProducts = [];

const getProducts = async () => {
  try {
    const response = await fetch("https://64de8919825d19d9bfb2b059.mockapi.io/getProducts");
    const products = await response.json();
    availableProducts = products;
    return products;
  } catch (error) {
    console.log(error);
  }
};