// Sample product data
const products = [
  {
      id: 1,
      name: "Men's Casual Shirt",
      price: "₹1,299",
      image: "assets/images/product1.jpg"
  },
  {
      id: 2,
      name: "Women's Dress",
      price: "₹1,799",
      image: "assets/images/product2.jpg"
  },
  {
      id: 3,
      name: "Running Shoes",
      price: "₹2,499",
      image: "assets/images/product3.jpg"
  }
];

// Dynamically generate product cards
const productList = document.getElementById("product-list");
products.forEach(product => {
  const productCard = `
      <div class="col-md-4 mb-4">
          <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body text-center">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-price">${product.price}</p>
                  <button class="btn btn-primary">Add to Cart</button>
              </div>
          </div>
      </div>
  `;
  productList.innerHTML += productCard;
});
