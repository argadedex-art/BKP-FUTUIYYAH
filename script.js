function showPage(pageId) {
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".card-container").style.display = "none";

  document.querySelectorAll(".page").forEach((p) => {
    p.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function back() {
  document.querySelector(".hero").style.display = "block";
  document.querySelector(".card-container").style.display = "flex";

  document.querySelectorAll(".page").forEach((p) => {
    p.style.display = "none";
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollKontak() {
  window.open("https://wa.me/6282220696123", "_blank");
}
