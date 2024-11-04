// script.js

// Get references to all elements
const boxes = document.querySelectorAll('.box');
const totalCommande = document.getElementById('tyu');

// Initialize total price
let total = 0;

// Function to update the total displayed price
function updateTotal() {
    totalCommande.textContent = total;
}

// Function to handle the plus and minus buttons
function updateQuantity(box, increment) {
    const numElement = box.querySelector('.num');
    const priceElement = box.querySelector('.price');
    const unitPrice = parseInt(box.querySelector('div:nth-child(2) span:nth-child(2)').textContent);
    
    let quantity = parseInt(numElement.textContent);
    quantity += increment;
    
    // Ensure quantity does not go below 0
    if (quantity < 0) quantity = 0;
    
    numElement.textContent = quantity;
    const totalUnitPrice = quantity * unitPrice;
    priceElement.textContent = totalUnitPrice;
    
    // Update the total price
    total += (increment > 0 ? unitPrice : -unitPrice);
    updateTotal();
}

// Function to toggle the like button
function toggleLike(button) {
    button.classList.toggle('liked');
}

// Function to remove the item from the cart
function removeItem(box) {
    const priceElement = box.querySelector('.price');
    const itemTotalPrice = parseInt(priceElement.textContent);
    total -= itemTotalPrice;
    updateTotal();
    box.remove();
}

// Attach event listeners to each box
boxes.forEach(box => {
    // Get buttons
    const plusButton = box.querySelector('.plus');
    const minusButton = box.querySelector('.moins');
    const likeButton = box.querySelector('.btn');
    const deleteButton = box.querySelector('.faSolid');

    // Add event listeners
    plusButton.addEventListener('click', () => updateQuantity(box, 1));
    minusButton.addEventListener('click', () => updateQuantity(box, -1));
    likeButton.addEventListener('click', () => toggleLike(likeButton));
    deleteButton.addEventListener('click', () => removeItem(box));
});
