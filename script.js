const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// PROIZVODI
const products = [
    {name: "Kravata", price: 2000, img: "slike/Kravata.jpg"},
    {name: "Prsluk", price: 5000, img: "slike/Prsluk.jpg"},
    {name: "Haljina", price: 3000, img: "slike/haljina.jpg"},
    {name: "Pantalone", price: 4000, img: "slike/Pantalone1.jpg"},
    {name: "Odelo", price: 12000, img: "slike/Odelo1.jpg"},
    {name: "Kosulja", price: 3500, img: "slike/Kosulja.jpg"},
    {name: "Kaput", price: 9500, img: "slike/Kaput.jpg"},
    {name: "Cipele", price: 7000, img: "slike/Cipele.jpg"}
];

const productList = document.getElementById("product-list");

function displayProducts(list) {
    productList.innerHTML = "";
    list.forEach((p, index) => {
        productList.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price} RSD</p>
            <button onclick="addToCart(${index})">Dodaj u korpu</button>
        </div>`;
    });
}

displayProducts(products);

// PRETRAGA
document.getElementById("search").addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(val));
    displayProducts(filtered);
});

// KORPA
let cart = [];

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    const count = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - ${item.price} RSD</p>`;
    });

    totalEl.textContent = "Ukupno: " + total + " RSD";
    count.textContent = cart.length;
}

// FORMA
document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;
    const out = document.getElementById("formMsg");

    if (!name || !email || !msg) {
        out.textContent = "Popuni sva polja!";
        out.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        out.textContent = "Neispravan email!";
        out.style.color = "red";
        return;
    }

    out.textContent = "Uspešno poslato!";
    out.style.color = "green";
});
