let form__box = document.querySelector(".form__box"),
    close = document.querySelector(".close"),
    btn = document.querySelector(".btn"),
    form_card = document.querySelector(".form-card"),
    form__btn = document.querySelector(".form__btn");

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


// input pustoy net

let ism = document.querySelector("#ism"),
    tel = document.querySelector("#tel");



form__btn.addEventListener("click", () => {
    if(ism.value.length > 0 && tel.value.length > 0) {
        form__box.classList.remove("actve");

        form__btn.href = "pdf/Image to PDF 20230702 10.11.50.pdf";
        form__btn.target = "_blank";

    }

    ism.value = "";
    tel.value = "+998"
});

