// simpan ke local storage
localStorage.setItem("namabarang", 123);

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("namabarang"))

// tampilkan di paragraf id=npm
document.getElementById("namabarang").innerHTML = localStorage.getItem("namabarang")