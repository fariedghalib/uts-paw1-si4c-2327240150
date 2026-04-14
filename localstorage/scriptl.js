let namaBarang = document.getElementById("namabarang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

function simpan() {
    console.log(namaBarang.value);
    console.log(jumlah.value);
    console.log(keterangan.value);

    // Validasi input tidak kosong
    if (!namaBarang.value || !jumlah.value || !keterangan.value) {
        alert("Semua field harus diisi!");
        return;
    }

    // Cek localStorage sudah ada isi atau belum
    if (localStorage.getItem("barang") === null) {
        localStorage.setItem("barang", "[]");
    }

    // Panggil localStorage (konversi string => object)
    let data = JSON.parse(localStorage.getItem("barang"));
    console.log(data);

    // Simpan value ke dalam object data
    data.push({
        namaBarang: namaBarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
    });
    console.log(data);

    // Simpan data terbaru ke dalam localStorage
    localStorage.setItem("barang", JSON.stringify(data));

    // Bersihkan input form
    namaBarang.value = "";
    jumlah.value = "";
    keterangan.value = "";

    // Panggil tampil()
    tampil();
}

function tampil() {
    let hasil = JSON.parse(localStorage.getItem("barang"));

    // Clear element
    document.getElementById("list-mhs").innerHTML = "";
    
    // Lakukan perulangan
    hasil.forEach(element => {
        document.getElementById("list-mhs").innerHTML += 
        `<div class="col-lg-4 col-md-6 col-sm-12">
            <h4 class="text-primary text-center">${element.namaBarang}</h4>
            <h6 class="text-success text-center">Jumlah: ${element.jumlah}</h6>
            <p class="text-center">${element.keterangan}</p>
        </div>`;
    });
}

// Jalankan fungsi tampil()
tampil();