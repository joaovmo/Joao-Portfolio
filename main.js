AOS.init();

document.getElementById("btn-link").addEventListener("click", function() {
  var link = document.getElementById("link");
  if (link.style.display === "none") {
    link.style.display = "block";
  } else {
    link.style.display = "none";
  }
  });