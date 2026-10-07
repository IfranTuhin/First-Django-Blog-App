// Compatibility redirect / inclusion for scripts.js
function showAlert() {
  if (typeof showToast === 'function') {
    showToast('Welcome to the Blog! Interactive action triggered successfully. 🚀', 'success');
  } else {
    alert("Welcome to the Blog! Interactive action triggered successfully. 🚀");
  }
}