// =================================================================
// PUSAT KONTROL KONTEN (data.js)
// =================================================================
// Untuk menambah artikel/buletin baru, cukup tambahkan objek 
// baru di paling atas array ini. Pastikan ID-nya unik.
// =================================================================

const bmkgData = [
  // --- MULAI TAMBAHKAN KONTEN BARU DI SINI ---
  
  // Contoh:
  /*
  {
    id: 1500, // ID unik baru
    type: 'artikel', // 'artikel' atau 'buletin'
    date: "2025-08-01T10:00:00",
    title: {
        rendered: "Judul Artikel Paling Baru"
    },
    content: {
        rendered: `
            <p>Ini adalah isi dari artikel paling baru yang saya tulis.</p>
            <img src="https://i.postimg.cc/link-gambar-baru.jpg" alt="Gambar Baru">
            <p>Anda bisa menambahkan paragraf dan gambar sebanyak yang Anda mau di sini menggunakan tag HTML.</p>
        `
    },
    yoast_head_json: {
        description: "Deskripsi singkat dari artikel paling baru.",
        og_image: [{ url: "https://i.postimg.cc/link-gambar-baru.jpg" }]
    }
  },
  */
  
  // --- DATA KONTEN ANDA YANG SUDAH ADA ---
  
  {"id":1438, "type": "buletin", "date":"2025-06-11T11:02:34", "title":{"rendered":"Buletin Meteorologi Edisi 082"}, "content": {"rendered": "<img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2025/06/BULETIN-JUNI-2025_opt_001.jpg'>"},"yoast_head_json":{"description":"Analisis unsur meteorologi bulan Juni 2025...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2025/06/BULETIN-JUNI-2025_opt_001.jpg"}]}},
  {"id":1128, "type": "buletin", "date":"2025-05-07T15:32:43", "title":{"rendered":"Buletin Meteorologi Edisi 081"}, "content": {"rendered": "<img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2025/05/BULETIN-MEI-2025_11zon_001.jpg'>"},"yoast_head_json":{"description":"Analisis unsur meteorologi bulan Mei 2025...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2025/05/BULETIN-MEI-2025_11zon_001.jpg"}]}},
  {"id":1107, "type": "buletin", "date":"2024-11-15T11:23:02", "title":{"rendered":"Buletin Meteorologi Edisi 075"}, "content": {"rendered": "<img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/11/Screenshot-2024-11-15-111530.jpg'>"},"yoast_head_json":{"description":"Analisis unsur meteorologi bulan Oktober 2024...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/11/Screenshot-2024-11-15-111530.jpg"}]}},
  {"id":1050, "type": "artikel", "date":"2024-09-07T14:23:00", "title":{"rendered":"BMKG Karimun Goes To Tulang Island"}, "content": {"rendered": "<p>Sabtu (07/09), BMKG Stasiun Meteorologi Raja Haji Abdullah Kabupaten Karimun, telah menggelar sosialisasi informasi cuaca dengan mengambil tema \" PRATA ( Pembahasan Ringan Seputar Cuaca ) Perhatikan Cuaca Sebelum Melaut\" di Balai Pertemuan Nelayan Pulau Tulang. Bersama BASARNAS, para nelayan juga dibekali ilmu penyelamatan diri saat dan sebelum melaut.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/09/1-1024x1024.jpg'><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/09/2-1024x1024.jpg'>"}, "yoast_head_json":{"description":"Sabtu (07/09), BMKG menggelar sosialisasi informasi cuaca di Pulau Tulang...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/09/3-Copy-e1725866624490.jpg"}]}},
  {"id":1036, "type": "artikel", "date":"2024-08-21T15:34:25", "title":{"rendered":"\"PRATA\" Bincang – bincang Dengan Komunitas Petani"}, "content": {"rendered": "<p>Rabu (21/08), Kantor Stasiun Meteorologi Kelas IV Raja Haji Abdullah – Tanjung Balai Karimun sukses melaksanakan Diseminasi Informasi Cuaca yang bertajuk \"Informasi Cuaca di Bidang Pertanian\". Acara ini diselenggarakan dengan tujuan agar masyarakat lebih teredukasi mengenai jenis tanaman yang tepat sesuai dengan cuaca yang sedang terjadi.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/08/8-1-1024x1024.jpg'>"}, "yoast_head_json":{"description":"Rabu (21/08), Kantor Stasiun Meteorologi sukses melaksanakan Diseminasi Informasi Cuaca di Bidang Pertanian...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/08/8-Copy-e1724229656543.jpg"}]}},
  {"id":1014, "type": "artikel", "date":"2024-08-17T10:28:00", "title":{"rendered":"Upacara HUT RI ke – 79, BMKG Karimun dan UPBU"}, "content": {"rendered": "<p>Sabtu (17/08), Dalam rangka memperingati HUT RI ke – 79, BMKG Karimun dan UPBU Raja Haji Abdullah mengadakan upacara yang di gelar di halaman parkir Bandara Raja Haji Abdullah.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/08/1-768x768.jpg'><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/08/2-768x768.jpg'>"}, "yoast_head_json":{"description":"Sabtu (17/08), Dalam rangka memperingati HUT RI ke – 79, BMKG Karimun dan UPBU mengadakan upacara...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/08/17-e1724035075329.jpg"}]}},
  {"id":955, "type": "artikel", "date":"2024-07-23T14:02:18", "title":{"rendered":"\"PRATA\" Cara BMKG Untuk Lebih Dekat Dengan Masyarakat"},"content":{"rendered":"<p>Rabu (14/07), Kantor Stasiun Meteorologi Kelas IV Raja Haji Abdullah – Tanjung Balai Karimun sukses melaksanakan Diseminasi Informasi Cuaca yang bertajuk \"Fenomena Angin Kencang, Puting Beliung dan Waterspout\" pada Rabu 14 Juli 2024.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-09.48.36-2.jpeg'>"}, "yoast_head_json":{"description":"Rabu (14/07), Kantor Stasiun Meteorologi sukses melaksanakan Diseminasi tentang Fenomena Angin Kencang...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-09.48.36-2.jpeg"}]}},
  {"id":735, "type": "artikel", "date":"2023-03-16T14:40:00", "title":{"rendered":"Bermain Sambil Belajar Bersama SDS 012 Maitreyawira"},"content":{"rendered":"<p>Karimun, 16 Maret 2023. Tepat pukul 08.30, Stasiun Meteorologi Raja Haji Abdullah (Stamet RHA) kedatangan 40 tamu – tamu lucu dan 4 orang guru pendamping dari SDS 012 Maitreyawira.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/03/DSF6310EDIT.jpg'>"}, "yoast_head_json":{"description":"Karimun, 16 Maret 2023. Stamet RHA kedatangan 40 tamu lucu dari SDS 012 Maitreyawira...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/03/DSF6684edit.jpg"}]}},
  {"id":636, "type": "artikel", "date":"2023-02-14T10:07:22", "title":{"rendered":"Stamet RHA Gelar Pelatihan Komunikasi Publik"},"content":{"rendered":"<p>Karimun, 13 Februari 2023. Untuk meningkatkan kualitas SDM dalam menyampaikan informasi yang mudah dipahami oleh masyarakat, STAMET RHA mengadakan \"Pelatihan Komunikasi Publik dan Media Sosial\".</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/02/edit-11.jpg'>"}, "yoast_head_json":{"description":"Karimun, 13 Februari 2023. STAMET RHA mengadakan Pelatihan Komunikasi Publik dan Media Sosial...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/02/EDIT-1.jpg"}]}},
  {"id":584, "type": "artikel", "date":"2023-02-08T13:35:02", "title":{"rendered":"Stamet RHA Terima Kunjungan Universitas Karimun"},"content":{"rendered":"<p>Karimun, 07 Februari 2023. Stasiun Meteorologi Raja Haji Abdullah menerima kunjungan mahasiswa dari jurusan Manajemen Kepelabuhan dan Pelayaran Universitas Karimun.</p><img src='https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/02/DSF4682.jpg'>"}, "yoast_head_json":{"description":"Karimun, 07 Februari 2023. Stasiun Meteorologi Raja Haji Abdullah menerima kunjungan mahasiswa...","og_image":[{"url":"https://stamet-karimun.bmkg.go.id/wp-content/uploads/2023/02/DSF4993.jpg"}]}}
];