const addToDB = (id) => {
    
  // Get the Server Data
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  // Set the Data Value
  cart[id] = 1
  console.log(cart[id]);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { addToDB };
