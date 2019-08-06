// Class siswa
class Siswa {
  constructor(nis, namaSiswa, alamat, namaAyah, pekerjaanAyah, namaIbu, pekerjaanIbu) {
    this.nis = nis;
    this.namaSiswa = namaSiswa;
    this.alamat = alamat;
    this.namaAyah = namaAyah;
    this.pekerjaanAyah = pekerjaanAyah;
    this.namaIbu = namaIbu;
    this.pekerjaanIbu = pekerjaanIbu;
  }
}

// User Interface
class UI {
  static tampilDaftarSiswa() {
    const SimpanDataSiswa = [
      {
        nis: '000001',
        namaSiswa: 'Alita',
        alamat: 'Jakarta',
        namaAyah: 'Beni',
        pekerjaanAyah: 'Karyawan',
        namaIbu: 'Bunga',
        pekerjaanIbu: 'Ibu Rumah Tangga'
      },
      {
        nis: '000002',
        namaSiswa: 'Jehan',
        alamat: 'Jakarta',
        namaAyah: 'Dimas',
        pekerjaanAyah: 'Wiraswasta',
        namaIbu: 'Milla',
        pekerjaanIbu: 'PNS'
      }
    ];
    
    const daftarSiswa = SimpanDataSiswa;
    daftarSiswa.forEach( data => UI.tambahSiswaKeDaftar(data));
  }
  static tambahSiswaKeDaftar(data) {
    const dataSiswa = document.querySelector('#data-siswa');
    const row = document.createElement('tr');
    row.innerHTML = `<th>${data.nis}</th>
                    <th>${data.namaSiswa}</th>
                    <th>${data.alamat}</th>
                    <th>${data.namaAyah}</th>
                    <th>${data.pekerjaanAyah}</th>
                    <th>${data.namaIbu}</th>
                    <th>${data.pekerjaanIbu}</th>
                    <th><a href="#" class="btn btn-success btn-sm edit">Edit</th>
                    <th><a href="#" class="btn btn-danger btn-sm hapus">Hapus</th>`
    dataSiswa.appendChild(row);
  }
}

// Class Penyimpanan


// Event : untuk memunculkan data siswa
document.addEventListener('DOMContentLoaded', UI.tampilDaftarSiswa);

// Event : tambah data siswa
document.querySelector('data-siswa').addEventListener('submit', (e) => {
  e.preventDefault();
  // ambil data dari value
  const nis = document.querySelector('#nis').value;
  const nama = document.querySelector('#namaSiswa').value;
  const alamat = document.querySelector('#alamat').value;
  const namaAyah = document.querySelector('#namaAyah').value;
  const pekerjaanAyah = document.querySelector('#pekerjaanAyah').value;
  const namaIbu = document.querySelector('#namaIbu').value;
  const pekerjaanIbu = document.querySelector('#pekerjaanIbu').value;

  const siswa = new Siswa(nis, nama, alamat, namaAyah, pekerjaanAyah, namaIbu, pekerjaanIbu);

  console.log(siswa);
});

// Event : edit data siswa


// Event : hapus data siswa