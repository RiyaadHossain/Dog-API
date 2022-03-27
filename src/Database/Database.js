const addToDB = (id) => {
    
  // Get the Server Data
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  // Set the Data Value
  let quantity = cart[id];
  if (quantity) {
    cart[id] = quantity + 1;
  } else {
    cart[id] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { addToDB };
