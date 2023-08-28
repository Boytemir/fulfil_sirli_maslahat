let form__box = document.querySelector(".form__box"),
    close = document.querySelector(".close"),
    btn = document.querySelector(".btn"),
    form_card = document.querySelector(".form-card"),
    form__btn = document.querySelector(".form__btn"),
    loading__btn = document.querySelector(".loading__btn"),
    loading = document.querySelector(".loading");

// add qo'llanma
btn.addEventListener("click", () => {
    form__box.classList.add("actve");
});

form__box.addEventListener("click", () => {
    form__box.classList.remove("actve");
    loading.classList.remove("active");
    form_card.classList.remove("actve");
});

form_card.addEventListener("click", (e) => {
    e.stopPropagation();
});

close.addEventListener("click", () => {
    form__box.classList.remove("actve");
});


// input pustoy net

let ism = document.querySelector("#ism"),
    tel = document.querySelector("#tel");



form__btn.addEventListener("click", (e) => {
        e.preventDefault();
        form_card.classList.add("actve");
        ism.value = "";
        tel.value = "+998";
        loading.classList.add("active");
});

loading__btn.addEventListener("click", (e) => {
    e.preventDefault();
    form__box.classList.remove("actve");
    loading.classList.remove("active");
    form_card.classList.remove("actve");
    
})