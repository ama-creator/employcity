// Custom Input File
export function getFileName() {
  const inputFile = document.querySelector(".upload-file__input");
  const fileName = document.querySelector(".upload-file__name");

  inputFile.addEventListener("change", (e) => {
    fileName.value = e.target.value.replace(/.*\\/, "");
    fileName.classList.add("upload-file__name--show");
  });
}
