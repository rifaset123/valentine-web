function acacept() {
  window.location.href = "/yes.html";
}

let imageList = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Mza2tmMzFzOHV1YzlqaXNpZHptM2x3Znp2Z2UxZnNrMTlmaDQxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMNaA4yiYDNPq/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW00OXBzY2VreXZrcjVhY3dmZmgwYXdnbGc1bjB3cTJ2c3Bia3F3YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z9815AUUl6JvObCBSD/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWhlYzZlajcxMjZsZ3JrdWJ2ZjdqbnVvam5qbXJ0dHFmMXljbDdoNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H5Ad3kUEUSiYhbCrNH/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVsZDBzdTVlaDB4cDJtNGxoMWowaWZ2MmowY3prYmtwOWZnOHJ6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZdHsPsHUdWr882Uu85/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdzM25sNmp1bWZzNXBqZTFtZjdzeDYyYmdmMTRnMjlmdGFtcmJwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6xNz1sIh6FmOxHuboJ/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjhzOW84MXR5cHA2MWVweGUyYTlsYjFiamZmZTBoMnUxMzhmdzRhZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gKBrO4a0GeBC0OXM1n/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTcxbXViMTY0M2F6c3V3NGtkenduY3ZubWx6Mjh2c3d5ZHAwejFxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loXWSt4nDfcYAhnmdB/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTcxbXViMTY0M2F6c3V3NGtkenduY3ZubWx6Mjh2c3d5ZHAwejFxNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/loXWSt4nDfcYAhnmdB/giphy.gif",
];

let currentIndex = 0;

let clickCount = 0;
let scaleFactor = 1;
let fontSize = 20;

function reject() {
  var btn = document.getElementById("yesButton");
  var currwidth = btn.clientWidth;
  var currheight = btn.clientHeight;

  btn.style.transition =
    "width 0.3s ease, height 0.3s ease, transform 0.3s ease";

  if (clickCount < 4) {
    btn.style.width = currwidth + 100 + "px";
    btn.style.height = currheight + 50 + "px";

    fontSize += 4;
    btn.style.fontSize = fontSize + "px";
  } else if (clickCount < 6) {
    scaleFactor += 0.2;
    btn.style.transform = `scale(${scaleFactor})`;

    fontSize += 2;
    btn.style.fontSize = fontSize + "px";
  } else {
    scaleFactor += 6;
    btn.style.transform = `scale(${scaleFactor})`;
    btn.style.paddingBottom = "80px";
  }

  clickCount++;
  currentIndex = (currentIndex + 1) % imageList.length;
  document.getElementById("animatedImage").src = imageList[currentIndex];
}
