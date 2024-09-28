const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
	   const allprices = document.querySelectorAll('.price');
	let totalPrice= 0;
	   // Loop through each price and add it to the total
    for( let price of allPrices) {
        totalPrice += Number(price.textContent);
    };
	
	  const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
	
	    // Set the text content to show the total price
    totalCell.textContent = `${totalPrice}`;
    totalRow.appendChild(totalCell);
	
 let table = document.querySelector('table');
	table.appendChild(totalRow);
 
};

getSumBtn.addEventListener("click", getSum);