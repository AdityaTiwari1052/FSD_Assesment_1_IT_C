
function updateTotalPrice() {
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("total-price");
    const basePrice = 15;
    const quantity = parseInt(quantityInput.value, 10);
    const totalPrice = basePrice * quantity;
    totalPriceElement.textContent = totalPrice;
}


document.getElementById("quantity").addEventListener("input", updateTotalPrice);

function additem() {
    alert("Item added to cart!");
}
