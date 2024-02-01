onLoad();

function onLoad() {
    document.querySelector("#birthdate").addEventListener("change", calculateAge);
}

function calculateAge() {
    const birthdate = document.querySelector("#birthdate");
    const age = document.querySelector("#ageResult");

    if (birthdate.value === "") {
        age.innerHTML = "Please enter your birthdate.";
        return;
    }

    const birthdateValue = new Date(birthdate.value);
    const today = new Date();
    // Need to calculate the age, also compare months to be accurate
    let ageValue = today.getFullYear() - birthdateValue.getFullYear();
    const month = today.getMonth() - birthdateValue.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdateValue.getDate())) {
        ageValue--;
    }
    age.innerHTML = "You are " + ageValue + " years old.";

    if (ageValue < 0) {
        age.innerHTML +=  " But how?";
    }
}