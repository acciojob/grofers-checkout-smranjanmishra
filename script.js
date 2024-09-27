//your code here
let tableEl = document.getElementById('myTable');
let priceArr = Array.from(document.querySelectorAll("td[data-ns-test]"));
// console.log(priceArr);
let totalPrice = 0;
for (const priceOfEachItem of priceArr) {
  totalPrice += Number(priceOfEachItem.textContent);
}

let totalRow = document.createElement('tr');
let newcell = totalRow.insertCell(0);
newcell.textContent = totalPrice
totalRow.setAttribute('data-ns-test', 'grandTotal')

tableEl.insertAdjacentElement('beforeend', totalRow);