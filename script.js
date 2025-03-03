let order = {
  Liberica: 0,
  Robusta: 0,
  Arabica: 0,
  Ambachino: 0,
  "Cold Brew": 0,
  Affogato: 0,
  Espresso: 0,
  Americano: 0,
  Latte: 0,
  Cappuccino: 0,
  Mocha: 0,
  Macchiato: 0,
  "Flat White": 0,
  Ristretto: 0,
  Lungo: 0,
};

function updateBadge() {
  let badgeElement = document.getElementById("badgeIcon");
  let badgeCount = Object.values(order).filter((value) => value > 0).length;
  if (badgeCount > 0) {
    badgeElement.textContent = badgeCount;
    badgeElement.style.display = "block";
  } else {
    badgeElement.style.display = "none";
  }
}

function updatePreview() {
  let previews = document.querySelectorAll(".preview");
  let listOrder = "";

  for (let item in order) {
    if (order[item] > 0) {
      listOrder += `• ${item}: ${order[item]}<br>`;
    }
  }

  previews.forEach((preview) => {
    preview.innerHTML = listOrder || "Belum ada pesanan";
  });
}

function add(menu) {
  order[menu]++;
  document.getElementById(menu).innerText = order[menu];
  updatePreview();
  updateBadge();
}

function remove(menu) {
  if (order[menu] > 0) {
    order[menu]--;
    document.getElementById(menu).innerText = order[menu];
  }
  updatePreview();
  updateBadge();
}

function pay() {
  let name = document.getElementById("nama").value.trim();
  let address = document.getElementById("alamat").value.trim();

  if (name === "" || address === "") {
    alert("Harap isi nama dan alamat!");
    return;
  }

  let msg = `[Sand Box/Testing Mode]\nPesanan atas nama: ${name}\nAlamat: ${address}\nPembayaran dilakukan secara COD\n\nDaftar pesanan:\n`;
  let haveOrder = false;

  for (let item in order) {
    if (order[item] > 0) {
      msg += `- ${item}: ${order[item]}\n`;
      haveOrder = true;
    }
  }

  if (!haveOrder) {
    alert("Anda belum memesan apa pun!");
    return;
  }

  let nomor = "628123456789"; // Ganti dengan nomor tujuan
  let whatsappURL = `https://wa.me/${nomor}?text=${encodeURIComponent(msg)}`;

  window.open(whatsappURL, "_blank");
}

function showPopup() {
  document.getElementById("payment").classList.add("show");
  console.log("Popup ditampilkan"); // Debugging
}

function closePopup() {
  document.getElementById("payment").classList.remove("show");
  console.log("Popup ditutup"); // Debugging
}
updateBadge();
