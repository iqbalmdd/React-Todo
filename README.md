# Todo-Project

## Deskripsi
Todo-Project adalah aplikasi manajemen tugas yang dibuat menggunakan React. Aplikasi ini memungkinkan pengguna untuk menambahkan, mengedit, dan menghapus tugas. Tugas-tugas dikelompokkan berdasarkan statusnya, seperti "To Do", "Doing", dan "Done".

## Fitur
- Menambahkan tugas baru
- Mengedit tugas yang ada
- Menghapus tugas
- Mengelompokkan tugas berdasarkan status
- Menyimpan data tugas di LocalStorage agar tetap ada setelah halaman di-refresh

## Struktur Proyek
Berikut adalah struktur folder dan file dari proyek ini:

## Penjelasan Kode

### `App.jsx`
File ini adalah komponen utama dari aplikasi yang mengelola state utama dan menyusun layout aplikasi. Ini mencakup fungsi-fungsi untuk menambah, mengedit, dan menghapus tugas, serta menyimpan data tugas di LocalStorage.

### `TaskForm.jsx`
Komponen ini menangani form untuk menambahkan tugas baru. Menggunakan state untuk menyimpan input dari pengguna dan mengirim data ke komponen `App`.

### `TaskColumn.jsx`
Komponen ini mengelompokkan tugas berdasarkan statusnya (To Do, Doing, Done). Menerima props seperti `tasks`, `status`, `handleDelete`, dan `columnName` untuk menampilkan tugas-tugas yang sesuai.

### `TaskCard.jsx`
Komponen ini menampilkan informasi dari tugas individual. Menerima props `title`, `tags`, dan `handleDelete`. Ini juga menggunakan komponen `Tag` untuk menampilkan tag-tag yang terkait dengan tugas.

### `Tag.jsx`
Komponen ini digunakan untuk menampilkan tag dari setiap tugas. Menerima prop `tagName`.

## Keunggulan
- **Antarmuka Pengguna yang Bersih:** Aplikasi ini memiliki antarmuka pengguna yang sederhana dan mudah digunakan, yang memudahkan pengguna untuk mengelola tugas mereka.
- **Pengelolaan State yang Efisien:** Menggunakan `useState` dan `useEffect` dari React untuk mengelola state dan efek samping, sehingga aplikasi berjalan lancar dan responsif.
- **Modularitas:** Kode dibagi menjadi beberapa komponen yang dapat digunakan kembali, membuatnya lebih mudah untuk dikelola dan diubah.
- **Penyimpanan Lokal:** Data tugas disimpan di LocalStorage, sehingga data tetap ada meskipun halaman di-refresh.

## Kerumitan
- **Manajemen State:** Mengelola state dari beberapa komponen bisa menjadi kompleks, terutama ketika data harus disinkronkan di seluruh aplikasi.
- **Handling Events:** Menangani berbagai event seperti penambahan, penghapusan, dan pengeditan tugas memerlukan penulisan banyak fungsi dan logika.
- **Props Drilling:** Mengoper props dari komponen induk ke komponen anak yang lebih dalam bisa membuat kode sulit diikuti jika tidak dikelola dengan baik.

## Cara Menjalankan Proyek

1. Clone repositori ini:
    ```
    git clone https://github.com/username/todo-project.git
    ```

2. Masuk ke direktori proyek:
    ```
    cd todo-project
    ```

3. Install dependencies:
    ```
    pnpm install
    ```

4. Jalankan aplikasi:
    ```
    pnpm start
    ```

## Kontribusi
Kontribusi sangat diterima! Jika Anda ingin berkontribusi, silakan fork repositori ini dan buat pull request dengan perubahan Anda.
