function showSection(id) {

  const sections = document.querySelectorAll(".content");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

showSection("hadiths");
function showSection(sectionId) {

    // اخفاء كل الاقسام
    let sections = document.querySelectorAll(".content");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // اظهار القسم المختار فقط
    document.getElementById(sectionId).style.display = "block";
}
let count = localStorage.getItem("tasbeehCount") || 0;

document.getElementById("counter").innerText = count;

function tasbeeh() {
    count++;
    document.getElementById("counter").innerText = count;
    localStorage.setItem("tasbeehCount", count);
}

function resetTasbeeh() {
    count = 0;
    document.getElementById("counter").innerText = count;
    localStorage.setItem("tasbeehCount", count);
}
document.addEventListener("DOMContentLoaded", function () {

fetch("https://api.alquran.cloud/v1/surah")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("quran-container");
    container.innerHTML = "";

    data.data.forEach(surah => {
        container.innerHTML += `
            <div class="card">
                <h3>${surah.number}. ${surah.name}</h3>
                <p>عدد الآيات: ${surah.numberOfAyahs}</p>
                <button onclick="loadSurah(${surah.number})">عرض السورة</button>
            </div>
        `;
    });

});

});
