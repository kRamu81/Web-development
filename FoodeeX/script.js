function logout(event) {
  event.preventDefault();
  localStorage.removeItem("loggedInUser");
  showToast("👋 Logged out successfully!", "info");
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  let menu = [];

  const defaultMenu = [
    { name: "Margherita Pizza", price: 199, image: "https://kidoneo.com/wp-content/uploads/2023/07/Pizza_1688814259.jpg" },
    { name: "Burger", price: 99, image: "https://static.vecteezy.com/system/resources/previews/023/558/535/large_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg" },
    { name: "Donut", price: 40, image: "https://img2.10bestmedia.com/Images/Photos/413839/GettyImages-465529983_55_660x440.jpg" },
    { name: "Samosa", price: 20, image: "https://i.pinimg.com/originals/e0/1d/72/e01d722c6c1919499376c27e687ffdd4.jpg" },
    { name: "Pav Bhaji", price: 110, image: "https://www.thestatesman.com/wp-content/uploads/2019/07/pav-bhaji.jpg" },
    { name: "French Fries", price: 89, image: "https://www.thestatesman.com/wp-content/uploads/2019/05/french-fries.jpg" },
    { name: "Oreo Shake", price: 120, image: "https://savoredsips.com/wp-content/uploads/2021/06/oreo-milkshake-featured.jpg" },
    { name: "Steamed Momos", price: 99, image: "http://recipedose.com/wp-content/uploads/2013/03/Chicken-momos.jpg" },
    { name: "Gulab Jamun", price: 40, image: "https://images.slurrp.com/prod/articles/1m5e86yy5vl.webp" },
    { name: "Milk Cake", price: 45, image: "https://e1.pxfuel.com/desktop-wallpaper/780/499/desktop-wallpaper-milk-cake-recipe-indian-sweets.jpg" }
  ];

  const storedMenu = JSON.parse(localStorage.getItem("menuItems"));
  menu = Array.isArray(storedMenu) && storedMenu.length > 0 ? storedMenu : defaultMenu;

  if (!storedMenu || storedMenu.length === 0) {
    localStorage.setItem("menuItems", JSON.stringify(defaultMenu));
  }

  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  let userKey = loggedInUser ? `cart_${loggedInUser.email}` : "cart_guest";
  let cart = JSON.parse(localStorage.getItem(userKey)) || [];
  const isAdmin = loggedInUser && loggedInUser.email === "akritimaddhesiya27@gmail.com";

  const cartIcon = document.querySelector(".cart-icon");
  const cartCountEl = document.querySelector(".cart-count");
  const cartPopup = document.getElementById("cartPopup");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const clearCartBtn = document.getElementById("clearCart");
  const menuContainer = document.getElementById("menuContainer");
  let appliedCoupon = null;

  function updateCartUI() {
    cartItemsEl.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.quantity * item.price;
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.name}</span>
        <span>₹${item.price} x ${item.quantity}</span>
        <span>
          <button onclick="increaseItem(${index})">+</button>
          <button onclick="decreaseItem(${index})">-</button>
          <button onclick="removeItem(${index})">🗑</button>
        </span>
      `;
      cartItemsEl.appendChild(li);
    });

    if (appliedCoupon) {
      const discount = total * appliedCoupon;
      total -= discount;
      cartTotalEl.textContent = `Total after discount: ₹${total.toFixed(2)}`;
    } else {
      cartTotalEl.textContent = `Total: ₹${total}`;
    }

    cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem(userKey, JSON.stringify(cart));
  }

  function renderMenu() {
    menuContainer.innerHTML = "";
    menu.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "food-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        ${isAdmin ? `<button onclick="deleteDish(${index})" style="margin: 5px; background:#f44336">🗑 Delete</button>` : ""}
      `;
      const addButton = card.querySelector(".add-to-cart");
      addButton.addEventListener("click", () => addToCart(item));
      menuContainer.appendChild(card);
    });
  }

  function addToCart(item) {
    const existingItem = cart.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: item.name, price: item.price, quantity: 1 });
    }
    updateCartUI();
    showToast(`${item.name} added to cart!`, "success");
  }

  window.increaseItem = function (index) {
    cart[index].quantity += 1;
    updateCartUI();
  }

  window.decreaseItem = function (index) {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    updateCartUI();
  }

  window.removeItem = function (index) {
    cart.splice(index, 1);
    updateCartUI();
  }

  clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
    cartPopup.style.display = "none";
    showToast("🧹 Cart cleared!", "info");
  });

  document.getElementById("applyCoupon").addEventListener("click", () => {
    const enteredCode = document.getElementById("couponCode").value.trim();
    if (enteredCode === "FOODIE10") {
      appliedCoupon = 0.10;
      alert("🎉 Coupon Applied! 10% off.");
    } else {
      appliedCoupon = null;
      alert("❌ Invalid Coupon Code");
    }
    updateCartUI();
  });

  cartIcon.addEventListener("click", () => {
    cartPopup.style.display = cartPopup.style.display === "block" ? "none" : "block";
  });

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("✅ Message sent!", "success");
      contactForm.reset();
    });
  }

  const userInfo = document.getElementById("userInfo");
  if (loggedInUser && userInfo) {
    userInfo.innerHTML = `👤 Hello, ${loggedInUser.name} | <a href="#" onclick="logout(event)" style="color: #faae2b;">Logout</a>`;
  } else if (userInfo) {
    userInfo.innerHTML = `<a href="login.html" style="color:#faae2b; font-weight:bold;">Login / Sign Up</a>`;
  }

  if (isAdmin) {
    const adminForm = document.getElementById("adminForm");
    if (adminForm) adminForm.style.display = "block";

    document.getElementById("addNewItem").addEventListener("click", function () {
      const name = document.getElementById("newDishName").value.trim();
      const price = parseFloat(document.getElementById("newDishPrice").value);
      const image = document.getElementById("newDishImage").value.trim();

      if (name && price && image) {
        menu.push({ name, price, image });
        localStorage.setItem("menuItems", JSON.stringify(menu));
        renderMenu();
        document.getElementById("newDishName").value = "";
        document.getElementById("newDishPrice").value = "";
        document.getElementById("newDishImage").value = "";
        showToast("✅ Dish added!", "success");
      } else {
        showToast("⚠ Please fill all fields.", "error");
      }
    });
  }

  window.deleteDish = function (index) {
    if (!isAdmin) return;
    if (confirm("Are you sure you want to delete this dish?")) {
      menu.splice(index, 1);
      localStorage.setItem("menuItems", JSON.stringify(menu));
      renderMenu();
      showToast("🗑 Dish deleted!", "info");
    }
  }

  renderMenu();
  updateCartUI();
});

function showToast(message, type = "info") {
  const snackbar = document.getElementById("snackbar");
  snackbar.textContent = message;
  snackbar.className = `show ${type}`;
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "").trim();
  }, 3000);
}