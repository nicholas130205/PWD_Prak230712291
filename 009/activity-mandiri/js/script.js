function fn_ValForm() {
  var sMsg = "";
  var emailValue = document.getElementById("email").value;
  var emailRegex = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;

  // Validasi nama
  if (document.getElementById("name").value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  // Validasi email
  if (emailValue == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailRegex.test(emailValue)) {
    sMsg += "\n* Format email tidak valid (contoh: nama@email.com)";
  }

  // Validasi pesan
  if (document.getElementById("message").value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  // Menampilkan pesan peringatan
  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    alert("Form berhasil dikirim!");
    return true;
  }
}
    