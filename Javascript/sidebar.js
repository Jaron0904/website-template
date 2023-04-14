

const sidebar = document.getElementById("sidebar");
document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const width = window.innerWidth;

  if (x < (width * 0.1)) {
    sidebar.style.width = "200px";
  } else {
    sidebar.style.width = "0";
  }
});
