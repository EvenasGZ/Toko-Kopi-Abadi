let order = {
  liberica: 0,
  robusta: 0,
  arabica: 0,
  ambachino: 0,
  cold_brew: 0,
  affogato: 0,
  espresso: 0,
  americano: 0,
  latte: 0,
  cappuccino: 0,
  mocha: 0,
  macchiato: 0,
  flat_white: 0,
  ristretto: 0,
  lungo: 0,
};

function updatePreview() {
  let preview = document.getElementById("preview");
  let listOrder = "";

  for (let item in order) {
    if (order[item] > 0) {
      listOrder += `• ${item}: ${order[item]}<br>`;
    }
  }
  preview.innerHTML = listOrder || "Belum ada pesanan";
}

function add(menu) {
  order[menu]++;
  document.getElementById(menu).innerText = order[menu];
  updatePreview();
}

function remove(menu) {
  if (order[menu] > 0) {
    order[menu]--;
    document.getElementById(menu).innerText = order[menu];
  }
  updatePreview();
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
