function processCart(cart) {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (total > 100) total *= 0.9; // Apply discount

  return total;
}

const cart = [
  { price: 50, quantity: 2 },
  { price: 20, quantity: 3 },
];

console.log(processCart(cart)); // Output : 144
