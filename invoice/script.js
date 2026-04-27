let itemCount = 0;

function addItem() {
  itemCount++;
  const desc = document.getElementById("itemDesc").value;
  const qty = parseFloat(document.getElementById("itemQty").value) || 0;
  const price = parseFloat(document.getElementById("itemPrice").value) || 0;
  const total = qty * price;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${itemCount}</td>
    <td>${desc}</td>
    <td>${qty}</td>
    <td>${price.toFixed(2)}</td>
    <td class="row-total">${total.toFixed(2)}</td>
  `;

  const tableBody = document.getElementById("tableBody");
  tableBody.insertBefore(row, tableBody.lastElementChild);

  calculateTotals();
}

function calculateTotals() {
  let grandTotal = 0;
  document.querySelectorAll(".row-total").forEach(el => {
    grandTotal += parseFloat(el.textContent) || 0;
  });
  document.getElementById("grandTotal").textContent = grandTotal.toFixed(2);
}

// Live binding for header and customer info
document.getElementById("invoiceNo").addEventListener("input", e => {
  document.getElementById("previewInvoiceNo").textContent = e.target.value;
});

document.getElementById("invoiceDate").addEventListener("input", e => {
  const parts = e.target.value.split("-");
  if (parts.length === 3) {
    document.getElementById("previewInvoiceDate").textContent = `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
});

document.getElementById("customerName").addEventListener("input", e => {
  document.getElementById("previewCustomer").textContent = e.target.value;
});

document.getElementById("customerAddress").addEventListener("input", e => {
  document.getElementById("previewAddress").innerHTML = e.target.value.replace(/\n/g, "<br>");
});

document.getElementById("customerPhone").addEventListener("input", e => {
  document.getElementById("previewPhone").textContent = e.target.value;
});

// Auto-set today's date in dd-mm-yyyy format
window.onload = function() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const formatted = `${dd}-${mm}-${yyyy}`;
  document.getElementById("previewInvoiceDate").textContent = formatted;

  const isoFormat = today.toISOString().split("T")[0];
  document.getElementById("invoiceDate").value = isoFormat;
};
