const form = document.querySelector('.login-form');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const login = {};

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("Заповніть всі поля!");
    } else {
        const formObj = form.elements;
        for (const element in formObj) {
            if (formObj[element].tagName === "INPUT") {
                login[`${formObj[element].name}`] = formObj[element].value;
            }
        }
    
        console.log(login);
    
        event.currentTarget.reset();
    }
    
});
