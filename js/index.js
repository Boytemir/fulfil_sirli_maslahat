let form__box = document.querySelector(".form__box"),
    close = document.querySelector(".close"),
    btn = document.querySelector(".btn"),
    form_card = document.querySelector(".form-card");


// add qo'llanma
btn.addEventListener("click", () => {
    form__box.classList.add("actve");
});

form__box.addEventListener("click", () => {
    form__box.classList.remove("actve");
});

form_card.addEventListener("click", (e) => {
    e.stopPropagation();
});

close.addEventListener("click", () => {
    form__box.classList.remove("actve");
});


