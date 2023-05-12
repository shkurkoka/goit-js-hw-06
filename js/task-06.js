const input = document.querySelector('#validation-input');
const valid = document.querySelector('.valid');
const invalid = document.querySelector('.invalid');


input.addEventListener("blur", () => {
    if (input.value.length === 6) {
        if (input.classList.contains("invalid")) {
            input.classList.remove("invalid");
        }

        input.classList.add("valid");
    } else {
        if (input.classList.contains("valid")) {
            input.classList.remove("valid");
        }
        
        input.classList.add("invalid");
    }
});

