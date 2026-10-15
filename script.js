
let products = [];

function addProduct() {
    let name = document.getElementById("name").value.trim();
    let qty = Number(document.getElementById("qty").value);
    let price = Number(document.getElementById("price").value);

    if (name === "" ||
        document.getElementById("qty").value === "" ||
        document.getElementById("price").value === "" ||
        !Number.isInteger(qty) || qty <= 0 ||
        !Number.isFinite(price) || price < 0) {
        alert("Please enter valid product details!");
        return;
    }

    products.push({
        name: name,
        qty: qty,
        price: price
    });

    displayProducts();

    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
}

function displayProducts() {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    let total = 0;

    products.forEach(function(product) {
        let amount = product.qty * product.price;
        total += amount;

        let row = document.createElement("tr");

        [product.name, product.qty,
         "₹" + product.price.toFixed(2),
         "₹" + amount.toFixed(2)].forEach(function(value) {
            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        list.appendChild(row);
    });

    document.getElementById("grandTotal").textContent =
        "Grand Total: ₹" + total.toFixed(2);
}
