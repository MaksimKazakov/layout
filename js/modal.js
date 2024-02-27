const modal = document.querySelector(".search-model");
const modalBtn = document.querySelector(".icon_search");
const modalClose = modal.querySelector(".search-close-switch");
const modalInput = document.querySelector(".search-model-form");
//console.log(modalSearch);
//console.log(modalClose);

modalBtn.addEventListener("click", () => {
  //console.log("click");
  modal.style.display = "block";
  console.log(modal.style.display);
});


modalInput.addEventListener("input", (event)=>{
    const value = event.target.value;
    console.log(value);
})

modalClose.addEventListener("click", () => {
  //console.log("click");
  modal.style.display = "none";
});