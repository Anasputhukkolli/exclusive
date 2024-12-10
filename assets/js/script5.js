    
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
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

    function renderCart() {
      const cartContainer = document.getElementById('cart-container');
      cartContainer.innerHTML = ''; // Clear existing content

      const cartProducts = allProducts.filter(product => cart.includes(product.id));

      if (cartProducts.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
        return;
      }

      cartProducts.forEach(product => {
        cartContainer.innerHTML += `
          

          <div class="product-card"  data-id="${product.id}">
          <div class="image">
              <img class="productimage" src="../images/${product.image}" alt="${product.name}">
              <div class="icon1container">
                <button class="remove-from-cart" data-id="${product.id}">
                  <img 
                    src="../icons/close.png"
                    class="icon1" 
                    alt="close"                 
                  </button>
              </div>
              <div class="icon2container">
                  <div>
                      <img src="../icons/Quick View.svg" class="icon2" alt="Quick View" data-id="${product.id}">
                  </div>
              </div>
              
              <button onclick="showAlert()" class="add-to-cart " >Proceed to Checkout</button>
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
      const removeButtons = document.querySelectorAll('.remove-from-cart');
      removeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          const productId = parseInt(button.getAttribute('data-id'), 10);
          cart = cart.filter(id => id !== productId);
          localStorage.setItem('cart', JSON.stringify(cart));
          renderCart(); // Re-render cart
        });
      });
    }
    function showAlert() {
        alert("processing............");
    }

    // Checkout button functionality
    

    renderCart();