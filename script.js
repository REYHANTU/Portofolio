function filterProjects() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const projects = document.querySelectorAll('.project');
    const message = document.getElementById('searchMessage'); // Elemen pesan bantuan
    let hasMatch = false;

    if (input === '') {
        // Jika input kosong, tampilkan semua proyek dan sembunyikan pesan
        projects.forEach(project => {
            project.style.display = ''; // Tampilkan semua proyek
        });
        message.style.display = 'none'; // Sembunyikan pesan bantuan
        return; // Hentikan eksekusi
    }

    projects.forEach(project => {
        const title = project.querySelector('.project-title').textContent.toLowerCase();
        const titleWords = title.split(' ');

        if (titleWords.includes(input)) {
            project.style.display = ''; // Tampilkan proyek jika kata cocok
            hasMatch = true;
        } else {
            project.style.display = 'none'; // Sembunyikan proyek jika tidak cocok
        }
    });

    // Tampilkan pesan jika tidak ada hasil pencarian
    if (!hasMatch) {
        message.textContent = `Tidak ada proyek yang cocok dengan kata "${input}". Coba kata lain.`;
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}

