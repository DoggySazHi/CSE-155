onLoad();

function onLoad() {
    document.querySelector("#month").addEventListener("input", calculateAge);
    document.querySelector("#day").addEventListener("input", calculateAge);
    document.querySelector("#year").addEventListener("input", calculateAge);
}

function calculateAge() {
    const monthInput = document.querySelector("#month");
    const dayInput = document.querySelector("#day");
    const yearInput = document.querySelector("#year");
    
    const age = document.querySelector("#ageResult");

    if (monthInput.value === "" || dayInput.value === "" || yearInput.value === "") {
        age.innerHTML = "Please enter your birthdate.";
        return;
    }

    if (monthInput.value < 1 || monthInput.value > 12) {
        age.innerHTML = "Please enter a valid month.";
        return;
    }

    if (dayInput.value < 1 || dayInput.value > 31) {
        age.innerHTML = "Please enter a valid day.";
        return;
    }

    if (yearInput.value < 1900 || yearInput.value > 2050) {
        age.innerHTML = "Please enter a valid year.";
        return;
    }

    const birthdateValue = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
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