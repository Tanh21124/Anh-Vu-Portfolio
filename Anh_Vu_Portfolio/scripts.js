function myFunction() {
  var x = document.getElementById("nav2Links");
  if (x.style.display === "none") {
    x.style.display = "block"; x.style.backgroundColor = "#FFDD00"; x.style.padding = "3px";
  } else {
    x.style.display = "none";
  }
}