   
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
   // Data for products
    const products = [
      { id: 1,name: "Breed Dry Dog Food", category: "food", price: "$100", rating: "⭐⭐⭐⭐⭐", reviews: 35, image: "product1.jpg" },
      { id: 2,name: "CANON EOS DSLR Camera", category: "Camera", price: "$360", rating: "⭐⭐⭐⭐", reviews: 95, image: "product02.png" },
      { id: 3,name: "ASUS FHD Gaming Laptop", category: "Computers", price: "$700", rating: "⭐⭐⭐⭐⭐", reviews: 325, image: "product03.png" },
      { id: 4,name: "Curology Product Set", category: "set", price: "$500", rating: "⭐⭐⭐⭐⭐", reviews: 145, image: "product04.png" },
      { id: 5,name: "Kids Electric Car", category: "Gaming", price: "$960", rating: "⭐⭐⭐", reviews: 65, image: "product05.png" },
      { id: 6,name: "Jr. Zoom Soccer Cleats", category: "Gaming", price: "$1160", rating: "⭐⭐⭐⭐⭐", reviews: 225, image: "product06.png" },
      { id: 7,name: "GP11 Shooter USB Gamepad", category: "Gaming", price: "$660", rating: "⭐⭐⭐⭐", reviews: 55, image: "product07.png" },
      { id: 8,name: "Quilted Satin Jacket", category: "dress", price: "$660", rating: "⭐⭐⭐", reviews: 145, image: "product08.png" },
      { id: 1,name: "Breed Dry Dog Food", category: "food", price: "$100", rating: "⭐⭐⭐⭐⭐", reviews: 35, image: "product1.jpg" },
      { id: 2,name: "CANON EOS DSLR Camera", category: "Camera", price: "$360", rating: "⭐⭐⭐⭐", reviews: 95, image: "product02.png" },
      { id: 3,name: "ASUS FHD Gaming Laptop", category: "Computers", price: "$700", rating: "⭐⭐⭐⭐⭐", reviews: 325, image: "product03.png" },
      { id: 4,name: "Curology Product Set", category: "set", price: "$500", rating: "⭐⭐⭐⭐⭐", reviews: 145, image: "product04.png" },
      { id: 5,name: "Kids Electric Car", category: "Gaming", price: "$960", rating: "⭐⭐⭐", reviews: 65, image: "product05.png" },
      { id: 6,name: "Jr. Zoom Soccer Cleats", category: "Gaming", price: "$1160", rating: "⭐⭐⭐⭐⭐", reviews: 225, image: "product06.png" },
      { id: 7,name: "GP11 Shooter USB Gamepad", category: "Gaming", price: "$660", rating: "⭐⭐⭐⭐", reviews: 55, image: "product07.png" },
      { id: 8,name: "Quilted Satin Jacket", category: "dress", price: "$660", rating: "⭐⭐⭐", reviews: 145, image: "product08.png" },
          
    ];

    // Select products container
    const productsContainer = document.getElementById("product-grid");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Render products
    function renderProducts(filteredProducts) {
        productsContainer.innerHTML = filteredProducts
          .map(
            (product) => `
              <div class="product-card"  data-id="${product.id}">
                <div class="image">
                    <img class="productimage" src="../images/${product.image}" alt="${product.name}">
                    <div class="icon1container">
                      <button>
                        <img 
                        src="../icons/${wishlist.includes(product.id) ? "wishlist-filled.png" : "wishlist.svg"}"
                        class="icon1" 
                        alt="wishlist" 
                        data-id="${product.id}"/>
                      </button>
                    </div>
                    <div class="icon2container">
                        <button>
                            <img src="../icons/Quick View.svg" class="icon2" alt="Quick View" data-id="${product.id}">
                        </button>
                    </div>
                    <button class="add-to-cart " data-id="${product.id}">Add To Cart</button>
    
                </div>
                <div class="content">
                    <h4>${product.name}</h4>
                    <div class="price">
                        <p>${product.price}</p>
                        <span>⭐ ${product.rating} <b>(${product.reviews})</b></span>
    
                    </div>
    
                </div>
              </div>
          `
          )
          .join("");
          const wishlistButtons = document.querySelectorAll(".icon1");
          wishlistButtons.forEach((button) => {
            button.addEventListener("click", function (event) {
              event.stopPropagation(); // Prevent triggering product card click
              const productId = parseInt(button.getAttribute("data-id"), 10);
        
              // Toggle the product in the wishlist
              if (wishlist.includes(productId)) {
                wishlist.splice(wishlist.indexOf(productId), 1);
              } else {
                wishlist.push(productId);
              }
        
              localStorage.setItem("wishlist", JSON.stringify(wishlist));
              renderProducts(filteredProducts); // Re-render products after update
            });
          });
        
          // Handle Quick View Clicks
          const quickViewButtons = document.querySelectorAll(".icon2");
          quickViewButtons.forEach((button) => {
            button.addEventListener("click", function (event) {
              event.stopPropagation(); // Prevent triggering product card click
              const productId = button.getAttribute("data-id");
              window.location.href = `../pages/product.html?id=${productId}`; // Navigate to product page
            });
          });
        
          // Handle Add to Cart Button Clicks
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
        
          // Add click event listener to each product card for product detail page
          
        }
        
      

    // Initial render (show all products)
    renderProducts(products);

    // Search functionality
    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Filter products based on the search term
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      // Render the filtered products
      renderProducts(filteredProducts);
    });
  
const pathName = window.location.pathname;

// Display the pathname on the page
document.getElementById("location-display").innerText = `${pathName}`;


document.getElementById("Wishlist").addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "../pages/wishlist.html"; // Replace with your target URL
});


document.getElementById("cart").addEventListener("click", function () {
  // Redirect to another page
  window.location.href = "../pages/cart.html"; // Replace with your target URL
});