function showContent() {
  let photo = document.getElementById("photo");
  let text = document.getElementById("text");

  if (photo.style.display === "none") {
    photo.style.display = "block";
    text.style.display = "block";
  } else {
    photo.style.display = "none";
    text.style.display = "none";
  }
}
