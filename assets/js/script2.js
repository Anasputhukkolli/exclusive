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

const productse = [
    { name: "Breed Dry Dog Food", price: "$100", rating: 4.5, reviews: 35, image: "product1.jpg" },
    { name: "CANON EOS DSLR Camera", price: "$360", rating: 4.9, reviews: 95, image: "product02.png" },
    { name: "ASUS FHD Gaming Laptop", price: "$700", rating: 4.8, reviews: 325, image: "product03.png" },
    { name: "Curology Product Set", price: "$500", rating: 4.2, reviews: 145, image: "product04.png" },
  ];
 
  // Render Products
  const productsContainer = document.querySelector(".products-grid");
  productsContainer.innerHTML = productse
    .map(
      (product) => `
        <div class="product-card">
            <div class="image">
                <img class="productimage" src="../images/${product.image}" alt="${product.name}">
                <div class="icon1container">
                    <a href="">
                        <img src="../icons/wishlist.svg" class="icon1" alt="wishlist">
                    </a>
                </div>
                <div class="icon2container">
                    <a href="">
                        <img src="../icons/Quick View.svg" class="icon1" alt="wishlist">
                    </a>
                </div>
                <button class="add-to-cart">Add To Cart</button>

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

    document.getElementById("viewMoreButton").addEventListener("click", function () {
        // Redirect to another page
        window.location.href = "../pages/spotlight.html"; // Replace with your target URL
      });

      

    document.querySelectorAll('.color').forEach(color => {
        color.addEventListener('click', () => {
          alert(`You selected ${color.classList.contains('red') ? 'Red' : 'Blue'} color!`);
        });
      });



    // Data for products
    const products = [
      { id: 1, name: "Breed Dry Dog Food", price: "$100", rating: "⭐⭐⭐⭐⭐", reviews: 35, image: "product1.jpg", description: "High-quality dog food with essential nutrients." },
      { id: 2, name: "CANON EOS DSLR Camera", price: "$360", rating: 4.9, reviews: 95, image: "product02.png", description: "Professional camera for high-quality photography." },
      { id: 3, name: "ASUS FHD Gaming Laptop", price: "$700", rating: 4.8, reviews: 325, image: "product03.png", description: "Powerful gaming laptop with a 15.6-inch screen." },
      { id: 4, name: "Curology Product Set", price: "$500", rating: 4.2, reviews: 145, image: "product04.png", description: "Skincare products to improve your complexion." },
      { id: 5, name: "Kids Electric Car", price: "$960", rating: 4.6, reviews: 65, image: "product05.png", description: "Electric car for kids with a realistic design." },
      { id: 6, name: "Jr. Zoom Soccer Cleats", price: "$1160", rating: 4.9, reviews: 225, image: "product06.png", description: "Soccer cleats for young athletes with a perfect fit." },
      { id: 7, name: "GP11 Shooter USB Gamepad", price: "$660", rating: 4.7, reviews: 55, image: "product07.png", description: "USB gamepad for an immersive gaming experience." },
      { id: 8, name: "Quilted Satin Jacket", price: "$660", rating: 4.8, reviews: 145, image: "product08.png", description: "Stylish satin jacket perfect for cold weather." },
    ];

    // Get the product id from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // Find the product by id
    const product = products.find((p) => p.id === productId);

    // Render the product details
    const productDetailContainer = document.getElementById("product-detail");

    if (product) {
      productDetailContainer.innerHTML = `
        <div class="product-container">
            <div class="product-image">
                <img src="../images/${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <h1>${product.name}</h1>
                <p class="rating">
                     ${product.rating} <span>(${product.reviews} Reviews)</span> | <span class="stock-status">In Stock</span>
                </p>
                <p class="price">${product.price}</p>
                <p class="description">
                    ${product.description}
                </p>
                <div class="color-options">
                    <span>Colours:</span>
                    <div class="colors">
                        <label class="color red">
                        <input type="radio" name="color" value="red">
                            <span class="dot"></span>
                        </label>
                        <label class="color blue">
                            <input type="radio" name="color" value="blue">
                            <span class="dot"></span>
                        </label>
                    </div>
                </div>
                      
                <div class="delivery-info">
                    <div class="delivery-option">
                        <div class="deliimg">
                            <img src="../icons/icon-delivery.svg" alt="">
                        </div>
                        <div class="delicontent">
                            <span>Free Delivery</span>
                            <p>Enter your postal code for Delivery Availability</p>    
                        </div>
                    </div>
                    <hr class="del">
                    <div class="return-option">
                        <div class="deliimg">
                            <img src="../icons/Icon-return.svg" alt="">
                        </div>
                        <div class="delicontent">
                            <span>Return Delivery</span>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    } else {
      productDetailContainer.innerHTML = "<h2>Product not found!</h2>";
    }
    
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