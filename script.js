// Daftar kamar yang tersedia
const rooms = [
    { id: 1, name: "Kamar 1", description: "Kamar luas dengan fasilitas lengkap." },
    { id: 2, name: "Kamar 2", description: "Kamar nyaman dengan akses wifi." },
    { id: 3, name: "Kamar 3", description: "Kamar dengan pemandangan indah." },
    { id: 4, name: "Kamar 4", description: "Kamar minimalis dengan harga terjangkau." },
    { id: 5, name: "Kamar 5", description: "Kamar ideal untuk pelajar." },
    { id: 6, name: "Kamar 6", description: "Kamar dengan fasilitas AC dan kamar mandi dalam." },
    { id: 7, name: "Kamar 7", description: "Kamar eksklusif dengan privasi tinggi." },
  ];
  
  // Elemen HTML
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");
  const resultsDiv = document.getElementById("results");
  
  // Fungsi untuk mencari kamar
  function searchRoom() {
    const query = searchInput.value.toLowerCase();
    const result = rooms.find(room => room.name.toLowerCase() === query);
  
    // Menampilkan hasil pencarian
    resultsDiv.innerHTML = "";
    if (result) {
      resultsDiv.innerHTML = `
        <div class="card mx-auto" style="max-width: 400px;">
          <div class="card-body">
            <h5 class="card-title">${result.name}</h5>
            <p class="card-text">${result.description}</p>
          </div>
        </div>
      `;
    } else {
      resultsDiv.innerHTML = <p class="text-danger">Kamar tidak ditemukan. Silakan coba lagi!</p>;
    }
  }
  
  // Event listener untuk tombol cari
  searchButton.addEventListener("click", searchRoom);