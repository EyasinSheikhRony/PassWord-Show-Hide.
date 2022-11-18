let pass = document.querySelector("input");
let show = document.querySelector("span i");
show.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    show.classList.add("hide_btn");
  } else {
    pass.type = "password";
    show.classList.remove("hide_btn");
  }
});
