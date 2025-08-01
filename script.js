const textarea = document.getElementById("textarea");
const counter = document.getElementById("count");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = length;

  if (length > 100) {
    counter.parentElement.classList.add("exceeded");
  } else {
    counter.parentElement.classList.remove("exceeded");
  }
});
