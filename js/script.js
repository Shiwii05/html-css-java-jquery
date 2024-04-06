const navbarNav = document.querySelector(".navbar-nav");

document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active')
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

$(document).ready(function() {
  $('#MessageForm').submit(function(event) {
      // Menghentikan pengiriman formulir
      event.preventDefault();
      
      // Validasi nama
      var name = $('#name').val();
      if (!isValidName(name)) {
          showAlert('Nama tidak boleh mengandung angka', 'error');
          return;
      }
      
      // Validasi email
      var email = $('#email').val();
      if (!isValidEmail(email)) {
          showAlert('Masukkan alamat email dengan benar.', 'error');
          return;
      }
      
      // Validasi nomor telepon
      var number = $('#number').val();
      if (!isValidPhoneNumber(number)) {
          showAlert('Nomor telepon harus diantara 10 sampai 13 karakter.', 'error');
          return;
      }

      // Jika formulir lolos semua validasi, tampilkan pesan keberhasilan
      showAlert('Formulir berhasil dikirim!', 'success');
      
      // Reset formulir
      this.reset();
  });
});

// Fungsi untuk menampilkan alert dengan pesan dan jenis yang ditentukan
function showAlert(message, type) {
  // Hapus kelas CSS sebelumnya
  $('#alertMessage').removeClass('alert-success alert-error');
  
  // Tentukan kelas CSS berdasarkan jenis alert
  var alertClass = (type === 'success') ? 'alert-success' : 'alert-error';
  
  // Set pesan alert, tambahkan kelas CSS, dan tampilkan alert
  $('#alertMessage').text(message).addClass(alertClass).fadeIn('slow');
  
  // Sembunyikan alert setelah beberapa waktu
  setTimeout(function() {
      $('#alertMessage').fadeOut('slow');
  }, 3000); // Menampilkan alert selama 3 detik
}

// Fungsi untuk memeriksa apakah nama valid (tidak mengandung angka)
function isValidName(name) {
  var nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(name);
}

// Fungsi untuk memeriksa apakah alamat email valid
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Fungsi untuk memeriksa apakah nomor telepon valid (antara 10 dan 13 digit)
function isValidPhoneNumber(number) {
  var numberRegex = /^\d{10,13}$/;
  return numberRegex.test(number);
}

