document.addEventListener("DOMContentLoaded", function() {
const products = [
  {
    id: 1,
    name: "Schweeps-Bitter Lemon",
    details: "Schweeps Bitter Lemon, 3300ml x 6",
    price: "₦7,599.99",
    Image: "Assects/schweeps.jpg"
  },
  {
    id: 2,
    name: "Coke",
    details: "Coca Cola Coke Plastic Bottle 50cl x12",
    price: "₦8,200.75",
    Image: "Assects/coke.jpg",
  },
  {
    id: 3,
    name: "Minute Maid",
    details: "Minute Maid juice, Orange, 10 FI Oz, 6 Ct pack of 6",
    price: "₦23,700.76",
    Image: "Assects/minute maid.png",
  },
  {
    id: 4,
    name: "Powerade Isotonic",
    details: "Powerade Isotonic Blackcurrant Sport Drink 500mL X12",
    price: "₦39,900.99",
    Image: "Assects/powerrade red.jpg",
  },
  {
    id: 5,
    name: "Juan Valdez Cafe Latte",
    details: "Cafe Latte Choco flavor 350mL x3",
    price: "₦8,500.99",
    Image: "Assects/aysher.jpg",
  },
  {
    id: 6,
    name: "Fanta-Orange",
    details: "Coca Cola Fanta Orange, 50cL x12",
    price: "₦6,780.89",
    Image: "Assects/fanta.jpg",
  },
  {
    id: 7,
    name: "Sprite",
    details: "Coca Cola Sprite(big) 50cL x12",
    price: "₦6,800.76",
    Image: "Assects/sprite.jpg",
  },
  {
    id: 8,
    name: "Hershey Chocobar",
    details: "Hershey chocolate bar 36x1.55Oz(43g)",
    price: "₦44,500.23",
    Image: "Assects/hershey.jpg",
  },
  {
    id: 9,
    name: "Aquarius-Sport-Drink",
    details: "Aquarius Sport-Drink Spanish Version Pack of 6",
    price: "₦3,600.65",
    Image: "Assects/water.jpg",
  },
  {
    id: 10,
    name: "Powerade ION 4",
    details: "Powerade Sport drink with vitamins B3,B6 & B12",
    price: "₦25,500.77",
    Image: "Assects/red power.jpg",
  },
  {
    id: 11,
    name: "Schweeps limited",
    details: "schweeps ltd editions contains more vitamins and minirals.",
    price: "₦12,450.50",
    Image: "Assects/schweeps limited editions.jpg",
  },
  {
    id: 12,
    name: "5-Alive (pulpy)",
    details: "5 Alive Juice Pulpy Orange 85cl x6",
    price: "₦1,830,500",
    Image: "Assects/alivepuppy.jpg",
  },
  {
    id: 13,
    name: "Powerade Zero",
    details: "Moutain Blast Best 12x600ml",
    price: "₦55,556.92",
    Image: "Assects/powerade blue.jpg",
  },
  {
    id: 14,
    name: "Coke",
    details: "Coca Cola Coke Plastic Bottle 50cl x12",
    price: "₦8,200.75",
    Image: "Assects/coke.jpg",
  },
  {
    id: 15,
    name: "Juan Valdez Cafe Latte",
    details: "Cafe Latte Choco flavor 350mL x3",
    price: "₦8,500.99",
    Image: "Assects/aysher.jpg",
  },
  {
    id: 16,
    name: "Fanta-Orange",
    details: "Coca Cola Fanta Orange, 50cL x12",
    price: "₦6,780.89",
    Image: "Assects/fanta.jpg",
  },
];

const productsContainer = document.querySelector(".products-container");

products.forEach((product) => {
  const productCard = document.createElement('div');
  productCard.classList.add("product-card");
  productCard.innerHTML = `
    <img src="${product.Image}" alt="${product.name}">
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  productsContainer.appendChild(productCard);
});

});

function viewProductDetails(productId) {
  window.location.href = `product.html?id=${productId}`;
}



