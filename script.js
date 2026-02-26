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
const container = document.getElementById("quran-container");




