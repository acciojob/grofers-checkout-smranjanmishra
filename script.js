// Create the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class "price"
    const prices = document.querySelectorAll(".price");

    // Calculate the total sum of prices
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent);
    });

    // Check if a total row already exists, remove it before adding a new one
    const existingTotalRow = document.getElementById('total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row to display the total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.id = 'total-row';  // Assign an ID to the total row for future reference
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;  // Span across two columns
    totalCell.textContent = `Total Price: Rs ${totalPrice}`;
    newRow.appendChild(totalCell);

    // Append the new row to the table
    table.appendChild(newRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);