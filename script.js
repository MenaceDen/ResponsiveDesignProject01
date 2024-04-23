const input = document.querySelector("input");
const container = document.querySelector(".gallery-grid-container");
input.style.opacity = 0;
input.addEventListener("change", addImage);
function addImage() {
  const selectedFiles = input.files;
  if (selectedFiles.length != 0) {
    for (const file of selectedFiles) {
      const photo = document.createElement("img");
      photo.src = URL.createObjectURL(file);
      const node = document.createElement("div");
      node.classList.add("gallery-pic");
      node.style.backgroundImage = `url(${photo.src})`;
      container.appendChild(node);
    }
  }
}
