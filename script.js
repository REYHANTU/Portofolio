function filterProjects() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let projects = document.querySelectorAll(".project, .project1, .project2");
    let found = false;

    projects.forEach(project => {
        let title = project.querySelector(".project-title").innerText.toLowerCase();
        let description = project.innerText.toLowerCase(); // Ambil semua teks dalam elemen
        if (title.includes(input) || description.includes(input)) {
            project.style.display = "block";
            found = true;
        } else {
            project.style.display = "none";
        }
    });

    let message = document.getElementById("searchMessage");
    if (!found) {
        message.innerText = "Tidak ada proyek yang cocok dengan pencarian.";
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

function searchCertificate() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let sertifikasiKategori = document.getElementsByClassName("sertifikasi-kategori");
    let foundAny = false;

    for (let i = 0; i < sertifikasiKategori.length; i++) {
        let kategori = sertifikasiKategori[i];
        let sertifikasi = kategori.getElementsByClassName("sertifikasi");
        let foundInCategory = false;

        for (let j = 0; j < sertifikasi.length; j++) {
            let title = sertifikasi[j].getElementsByTagName("h3")[0].innerText.toLowerCase();
            if (title.includes(input)) {
                sertifikasi[j].style.display = "block";
                foundInCategory = true;
            } else {
                sertifikasi[j].style.display = "none";
            }
        }

        // Tampilkan atau sembunyikan kategori berdasarkan hasil pencarian
        if (foundInCategory) {
            kategori.style.display = "block";
            foundAny = true;
        } else {
            kategori.style.display = "none";
        }
    }

    let message = document.getElementById("searchMessage");
    message.style.display = foundAny ? "none" : "block";
    message.innerText = foundAny ? "" : "Tidak ada sertifikat yang cocok dengan pencarian.";
}

const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleMode.textContent = 'Mode Terang';
    } else {
        toggleMode.textContent = 'Mode Gelap';
    }
});