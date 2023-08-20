const renderProducts = () => {
  productsSection.querySelectorAll(".card");
  const barraBusqueda = document.getElementById("barraBusqueda");

  const filtrarShowsDisponible = (term) => {
    return availableProducts.filter((show) =>
      show.artista.toLowerCase().includes(term.toLowerCase())
    );
  };

  const limpiarContenedor = () => {
    productsSection.innerHTML = "";
  };

  const mostrarShowsDisponiblesFiltrados = (availableProducts) => {
    availableProducts.forEach(({ id, img, artista, precio, ubicacion }) => {
      const card = document.createElement("div");
      card.className = "col-lg-4 col-md-6 col-sm-12";

      card.innerHTML = `<div class="card card-product">
      <img src="${img}" class="card-img-top" alt="clothes" />
      <div class="card-body card-product-body">
        <h5 class="card-title">${artista}</h5>
        <h5 class="card-title">${ubicacion}</h5>
        <h5 class="card-title">$${precio}</h5>
        <div class="input-group mb-3">
          <label class="input-group-text">
            Cantidad
          </label>
          <input id="${id}-quantity" type="number" min="1" class="form-control" value="1" />
        </div>
        <button onclick="buyProduct('${id}')" class="btn btn-danger">
          Agregar al carrito
        </button>
      </div>
    </div>`;
    productsSection.appendChild(card);
    });
  };

  barraBusqueda.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();
    if (searchTerm !== "") {
      const availableProducts = filtrarShowsDisponible(searchTerm);
      limpiarContenedor();
      mostrarShowsDisponiblesFiltrados(availableProducts);
    } else {
      limpiarContenedor();
      availableProducts.forEach(({ id, img, artista, precio, ubicacion }) => {
        const card = document.createElement("div");
        card.className = "col-lg-4 col-md-6 col-sm-12";

        card.innerHTML = `<div class="card card-product">
          <img src="${img}" class="card-img-top" alt="clothes" />
          <div class="card-body card-product-body">
            <h5 class="card-title">${artista}</h5>
            <h5 class="card-title">${ubicacion}</h5>
            <h5 class="card-title">$${precio}</h5>
            <div class="input-group mb-3">
              <label class="input-group-text">
                Cantidad
              </label>
              <input id="${id}-quantity" type="number" min="1" class="form-control" value="1" />
            </div>
            <button onclick="buyProduct('${id}')" class="btn btn-danger">
              Agregar al carrito
            </button>
          </div>
        </div>`;
        productsSection.appendChild(card);
      });
    }
  });

  availableProducts.forEach(({ id, img, artista, precio, ubicacion }) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 col-sm-12";

    card.innerHTML = `<div class="card card-product">
      <img src="${img}" class="card-img-top" alt="clothes" />
      <div class="card-body card-product-body">
        <h5 class="card-title">${artista}</h5>
        <h5 class="card-title">${ubicacion}</h5>
        <h5 class="card-title">$${precio}</h5>
        <div class="input-group mb-3">
          <label class="input-group-text">
            Cantidad
          </label>
          <input id="${id}-quantity" type="number" min="1" class="form-control" value="1" />
        </div>
        <button onclick="buyProduct('${id}')" class="btn btn-danger">
          Agregar al carrito
        </button>
      </div>
    </div>`;
    productsSection.appendChild(card);
  });
};

const validateQuantity = (quantity) => {
  return !isNaN(quantity) && quantity > 0;
};

const calculateCartTotal = () => {
  return productCart.reduce((total, { subtotal }) => total + subtotal, 0);
};

const calculateCartCount = () => {
  return productCart.reduce((count, { quantity }) => count + quantity, 0);
};

const findProductById = (productId) => {
  return availableProducts.find((product) => product.id.toLowerCase() === productId.toLowerCase());
};

const buyProduct = (productId) => {
  const product = findProductById(productId);
  const quantityInput = productQuantityInput(product);
  const quantity = parseInt(quantityInput.value);

  if (!validateQuantity(quantity)) {
    showQuantityValidationAlert();
    return;
  }

  addToCart(product, quantity);
  saveCart();
  renderCart();

  quantityInput.value = "1";
};
