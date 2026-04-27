// Live bindings
document.getElementById("receiptNo").addEventListener("input", e => {
  document.getElementById("previewReceiptNo").textContent = e.target.value;
});
document.getElementById("receiptDate").addEventListener("input", e => {
  const parts = e.target.value.split("-");
  if (parts.length === 3) {
    document.getElementById("previewReceiptDate").textContent = `${parts[2]}-${parts[1]}-${parts[0]}`;
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
document.getElementById("receiptDetails").addEventListener("input", e => {
  document.getElementById("previewDetails").innerHTML = e.target.value.replace(/\n/g, "<br>");
});
document.getElementById("totalAmount").addEventListener("input", e => {
  document.getElementById("previewTotal").textContent = parseFloat(e.target.value || 0).toFixed(2);
});

// Auto-set today's date
window.onload = function() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const formatted = `${dd}-${mm}-${yyyy}`;
  document.getElementById("previewReceiptDate").textContent = formatted;

  // Input field requires YYYY-MM-DD
  const isoFormat = today.toISOString().split("T")[0];
  document.getElementById("receiptDate").value = isoFormat;
};
