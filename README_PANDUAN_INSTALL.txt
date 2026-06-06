PANDUAN INSTALL PWA MANABA BURGER & KEBAB POS
================================================

Paket ini membuat aplikasi Google Apps Script bisa di-install sebagai aplikasi PWA
di Android dan laptop menggunakan GitHub Pages sebagai server.

ISI FILE
--------
- index.html               : wrapper utama PWA
- app-config.js            : tempat mengisi URL Web App Apps Script
- manifest.webmanifest     : identitas aplikasi PWA
- sw.js                    : service worker
- offline.html             : tampilan saat offline
- icons/                   : ikon aplikasi
- .nojekyll                : agar GitHub Pages membaca file apa adanya

LANGKAH 1 - PASTIKAN APPS SCRIPT SUDAH SIAP
------------------------------------------
Di Code.gs aplikasi Manaba, pastikan doGet() memakai:

.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)

Kode yang sebelumnya dibuat sudah memakai pengaturan ini.

Deploy Apps Script:
1. Klik Deploy
2. New deployment
3. Type: Web app
4. Execute as: Me
5. Who has access: Anyone
6. Deploy
7. Copy URL Web App yang berakhiran /exec

LANGKAH 2 - EDIT app-config.js
------------------------------
Buka file app-config.js, ubah:

appsScriptUrl: 'GANTI_DENGAN_URL_WEB_APP_APPS_SCRIPT_ANDA',

menjadi contoh:

appsScriptUrl: 'https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxx/exec',

LANGKAH 3 - UPLOAD KE GITHUB
----------------------------
1. Buat repository baru, misalnya manaba-pos-pwa.
2. Upload semua file dan folder dari paket ini.
3. Buka Settings repository.
4. Pilih Pages.
5. Source: Deploy from a branch.
6. Branch: main.
7. Folder: /root.
8. Save.

GitHub akan memberi URL seperti:

https://username.github.io/manaba-pos-pwa/

LANGKAH 4 - INSTALL DI ANDROID
------------------------------
1. Buka URL GitHub Pages di Chrome Android.
2. Tekan menu titik tiga.
3. Pilih Install app atau Tambahkan ke layar utama.
4. Aplikasi akan muncul seperti aplikasi biasa.

LANGKAH 5 - INSTALL DI LAPTOP
-----------------------------
1. Buka URL GitHub Pages di Chrome atau Edge.
2. Klik ikon install di address bar.
3. Pilih Install.
4. Aplikasi akan muncul di desktop/start menu.

CATATAN
-------
- PWA ini adalah wrapper installable. Data kasir tetap dari Google Apps Script.
- Offline hanya menampilkan halaman offline, belum menyimpan transaksi offline.
- Kalau update file tidak langsung terbaca, ubah CACHE_VERSION di sw.js, misalnya:
  manaba-pos-pwa-v1.0.1
