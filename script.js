const submit = document.getElementById("submit");
const ok = document.getElementById("ok");
const pop = document.getElementById("pop");

const clickButton = () => {
    submit.classList.toggle("hide");
    ok.classList.toggle("show");
    pop.classList.toggle("open_popup");
};
