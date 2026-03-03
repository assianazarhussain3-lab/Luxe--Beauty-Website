<script>

document.querySelectorAll(".drop-btn").forEach(btn = {

  btn.addEventListener("click", function(e){

    e.stopPropagation();

    // Close all first
    document.querySelectorAll(".dropdown").forEach(menu=>{
      menu.classList.remove("show");
    });

    // Open current
    this.nextElementSibling.classList.toggle("show");




// Close when click outside
document.addEventListener("click", ()=>{

  document.querySelectorAll(".dropdown").forEach(menu=>{
    menu.classList.remove("show");
  });

});
function addToCart(name, price, image){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added to Cart 🛒");
}

function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("active");
}

function addToCart(name, price, image) {
    const product = { name, price, image, qty: 1 };

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    toggleCart(); // open cart automatically
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h4>${item.name}</h4>
                    <p>Rs.${item.price}</p>
                    <small>Qty: ${item.qty}</small>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = total;
}
window.onload = renderCart;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function () {

        let name = this.getAttribute("data-name");
        let price = this.getAttribute("data-price");

        let product = {
            name: name,
            price: price
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart 🛒");
    });
let cart = [];

function openCart() {
  document.getElementById("cartPopup").classList.add("active");
  renderCart();
}

function closeCart() {
  document.getElementById("cartPopup").classList.remove("active");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    cartItems.innerHTML = "";
  } else {
    emptyCart.style.display = "none";
    cartItems.innerHTML = cart.map(item => `
      <div style="background:white;padding:12px;border-radius:10px;margin-bottom:15px;">
        <img src="${item.img}" width="60" style="border-radius:8px;">
        <h4>${item.name}</h4>
        <p>Rs. ${item.price}</p>
      </div>
    `).join("");
  }
}

/* AUTO ADD TO CART (for all Buy Now buttons) */
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    const product = {
      name: this.dataset.name,
      price: this.dataset.price,
      img: this.dataset.img
    };
    cart.push(product);
    openCart();
  });
});
</script>

