// script.js
function generateQRCode() {
  var inputValue = document.getElementById('text-input').value;

  if (inputValue.trim() === '') {
    alert('Please enter some text or a URL');
    return;
  }

  // Clear previous QR code if any
  document.getElementById('qrcode').innerHTML = '';

  // Generate QR code
  var qrcode = new QRCode(document.getElementById('qrcode'), {
    text: inputValue,
    width: 128,
    height: 128
  });
}
