const fileInput = document.getElementById('fileInput');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const canvasEncrypted = document.getElementById('canvasEncrypted');
const canvasDecrypted = document.getElementById('canvasDecrypted');
const ctxEncrypted = canvasEncrypted.getContext('2d');
const ctxDecrypted = canvasDecrypted.getContext('2d');

let originalImage = new Image();

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    originalImage.onload = () => {
      canvasEncrypted.width = originalImage.width;
      canvasEncrypted.height = originalImage.height;
      canvasDecrypted.width = originalImage.width;
      canvasDecrypted.height = originalImage.height;
      // Chưa hiển thị gì khi load file, chờ user ấn nút
      ctxEncrypted.clearRect(0, 0, canvasEncrypted.width, canvasEncrypted.height);
      ctxDecrypted.clearRect(0, 0, canvasDecrypted.width, canvasDecrypted.height);
    };
    originalImage.src = url;
  }
});

encryptBtn.addEventListener('click', () => {
  if (!originalImage.src) {
    alert("Vui lòng chọn ảnh trước!");
    return;
  }
  ctxEncrypted.drawImage(originalImage, 0, 0);
  ctxEncrypted.font = "40px Arial";
  ctxEncrypted.fillStyle = "rgba(255,0,0,0.4)";
  ctxEncrypted.fillText("WATERMARK", 30, 50);
});

decryptBtn.addEventListener('click', () => {
  if (!originalImage.src) {
    alert("Vui lòng chọn ảnh trước!");
    return;
  }
  // Giải mã = hiển thị lại ảnh gốc (giả lập giải mã)
  ctxDecrypted.drawImage(originalImage, 0, 0);
});
