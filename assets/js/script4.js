const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.heloo');

// Toggle the navigation menu
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent this click from propagating to the document
  navLinks.classList.toggle('active');
});

// Close the navigation menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});
    // Retrieve wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Sample product data (replace with actual data from your server or local storage)
    const allProducts = [
      { id: 1,name: "Breed Dry Dog Food", category: "food", price: "$100", rating: "⭐⭐⭐⭐⭐", reviews: 35, image: "product1.jpg" },
      { id: 2,name: "CANON EOS DSLR Camera", category: "Camera", price: "$360", rating: "⭐⭐⭐⭐", reviews: 95, image: "product02.png" },
      { id: 3,name: "ASUS FHD Gaming Laptop", category: "Computers", price: "$700", rating: "⭐⭐⭐⭐⭐", reviews: 325, image: "product03.png" },
      { id: 4,name: "Curology Product Set", category: "set", price: "$500", rating: "⭐⭐⭐⭐⭐", reviews: 145, image: "product04.png" },
      { id: 5,name: "Kids Electric Car", category: "Gaming", price: "$960", rating: "⭐⭐⭐", reviews: 65, image: "product05.png" },
      { id: 6,name: "Jr. Zoom Soccer Cleats", category: "Gaming", price: "$1160", rating: "⭐⭐⭐⭐⭐", reviews: 225, image: "product06.png" },
      { id: 7,name: "GP11 Shooter USB Gamepad", category: "Gaming", price: "$660", rating: "⭐⭐⭐⭐", reviews: 55, image: "product07.png" },
      { id: 8,name: "Quilted Satin Jacket", category: "dress", price: "$660", rating: "⭐⭐⭐", reviews: 145, image: "product08.png" },
  
    
      // Add more products here
    ];

function renderWishlist() {
      const wishlistContainer = document.getElementById('wishlist-container');
      wishlistContainer.innerHTML = ''; // Clear existing content

      const wishlistProducts = allProducts.filter(product => wishlist.includes(product.id));

      if (wishlistProducts.length === 0) {
        wishlistContainer.innerHTML = '<p>Your wishlist is empty!</p>';
        return;
      }

      wishlistProducts.forEach(product => {
        wishlistContainer.innerHTML += `

          <div class="product-card"  data-id="${product.id}">
          <div class="image">
              <img class="productimage" src="../images/${product.image}" alt="${product.name}">
              <div class="icon1container">
                <button class="remove-from-wishlist" data-id="${product.id}">
                  <img 
                    src="../icons/wishlist-filled.png"
                    class="icon1" 
                    alt="wishlist"                 
                  </button>
              </div>
              <div class="icon2container">
                  <div>
                      <img src="../icons/Quick View.svg" class="icon2" alt="Quick View" data-id="${product.id}">
                  </div>
              </div>
              <button class="add-to-cart " data-id="${product.id}">Add To Cart</button>
          </div>
          <div class="content">
              <h4>${product.name}</h4>
              <div class="price">
                  <p>${product.price}</p>
                  <span> ${product.rating} <b>(${product.reviews})</b></span>
              </div>
          </div>
        </div>
        `;
      });

      // Add event listeners for remove buttons
      const removeButtons = document.querySelectorAll('.remove-from-wishlist');
      removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          const productId = parseInt(button.getAttribute('data-id'), 10);
          wishlist = wishlist.filter(id => id !== productId);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          renderWishlist(); // Re-render wishlist
        });
      });


    const quickViewButtons = document.querySelectorAll(".icon2");
    quickViewButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent triggering product card click
      const productId = button.getAttribute("data-id");
      window.location.href = `../pages/product.html?id=${productId}`; // Navigate to product page
    });
  });

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent triggering product card click
      const productId = parseInt(button.getAttribute("data-id"), 10);
      
      // Add product to cart in localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      
      alert("Product added to cart!"); // Feedback message
    });
  });
}

    renderWishlist();

    document.getElementById("cart").addEventListener("click", function () {
      // Redirect to another page
      window.location.href = "../pages/cart.html"; // Replace with your target URL
    });

    document.getElementById("viewMoreButton").addEventListener("click", function () {
      // Redirect to another page
      window.location.href = "../pages/spotlight.html"; // Replace with your target URL
    });





