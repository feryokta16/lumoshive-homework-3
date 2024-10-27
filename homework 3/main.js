//SRP
// Setiap kelas hanya memiliki satu tanggung jawab.
class User {
  constructor(nama) {
    this.nama = nama;
  }
  welcome() {
    console.log(`welcome ${this.nama}`);
  }
}
const user = new User("fery");
user.welcome();

class Guru extends User {
  static dataGuru = {};
  constructor(id, nama, kelas, tahun) {
    super(nama);
    //ocs
    //Aplikasi mudah dikembangkan tanpa mengubah kode yang sudah ada.
    this.id = id;
    this.kelas = kelas;
    this.tahun = tahun;
    Guru.dataGuru[id] = this;
  }
  updateData(nama, kelas, tahun) {
    if (nama) this.nama = nama;
    if (kelas) this.kelas = kelas;
    if (tahun) this.tahun = tahun;
    console.log("Data berhasil di Update");
  }
  displayData() {
    console.log("Data guru :");
    console.log(`ID:${this.id}`);
    console.log(`Nama : ${this.nama}`);
    console.log(`kelas : ${this.kelas}`);
    console.log(`Tahun : ${this.tahun}\n`);
  }
  static tampilData() {
    console.log("Semua Data Guru:");
    for (let id in Guru.dataGuru) {
      Guru.dataGuru[id].displayData();
    }
  }
  // Interface Segregation
  // Objek turunan harus bisa menggantikan objek induk tanpa masalah.
  welcome() {
    console.log(`welcome Guru : ${this.nama}`);
  }
}

const guru1 = new Guru("G001", "john", "fisika", "2021");
const guru2 = new Guru("G002", "cena", "biologi", "2021");

Guru.tampilData();
guru2.updateData("roman", "kimia", "2023");
Guru.tampilData();
// Objek turunan harus bisa menggantikan objek induk tanpa masalah.
guru1.welcome();

class MataPelajaran {
  static dataMataPelajaran = {};
  constructor(kodePelajaran, namaMataPelajaran, namaGuru) {
    this.kodePelajaran = kodePelajaran;
    this.namaMataPelajaran = namaMataPelajaran;
    this.namaGuru = namaGuru;
    MataPelajaran.dataMataPelajaran[kodePelajaran] = this;
  }
  updateData(namaMataPelajaran, namaGuru) {
    if (namaMataPelajaran) this.namaMataPelajaran = namaMataPelajaran;
    if (namaGuru) this.namaGuru = namaGuru;
    console.log("\nData berhasil di Update\n");
  }
  displayData() {
    console.log("data mata pelajaran");
    console.log(`nama kode pelajaran : ${this.kodePelajaran}`);
    console.log(`nama mata pelajaran : ${this.namaMataPelajaran}`);
    console.log(`nama guru pelajaran : ${this.namaGuru}\n`);
  }
  static tampilData() {
    console.log("semua data matkul\n");
    for (let kodePelajaran in MataPelajaran.dataMataPelajaran) {
      MataPelajaran.dataMataPelajaran[kodePelajaran].displayData();
    }
  }
}

const pelajaran = new MataPelajaran("M001", "fisika", "john");
const pelajaran2 = new MataPelajaran("M002", "kimia", "roman");
MataPelajaran.tampilData();
pelajaran.updateData("mtk", "seth");
MataPelajaran.tampilData();

class Siswa {
  static dataSiswa = {};
  constructor(nis, nama, kelas) {
    this.nis = nis;
    this.nama = nama;
    this.kelas = kelas;
    Siswa.dataSiswa[nis] = this;
  }
  updateData(nama, kelas) {
    if (nama) this.nama = nama;
    if (kelas) this.kelas = kelas;
    console.log("Data berhasil di Update");
  }
  displayData() {
    console.log("Data Siswa:");
    console.log(`ID:${this.nis}`);
    console.log(`Nama : ${this.nama}`);
    console.log(`kelas : ${this.kelas}`);
  }
  static tampilData() {
    console.log("semua data Siswa\n");
    for (let nis in Siswa.dataSiswa) {
      Siswa.dataSiswa[nis].displayData();
    }
  }
}

const siswa1 = new Siswa("S002", "Roma", "Biologi");
const siswa2 = new Siswa("S003", "Roma", "Bahasa");
const siswa3 = new Siswa("S004", "Roma", "Bahasa");

Siswa.tampilData();

siswa1.updateData("jacob", "geologi");
Siswa.tampilData();

//DIP
class Print {
  // Hindari ketergantungan langsung antar kelas.
  constructor(data) {
    this.data = data;
  }
  printData() {
    this.data.tampilData();
  }
}

const print = new Print(Guru);
print.printData();
