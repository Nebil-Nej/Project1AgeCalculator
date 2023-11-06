const btnEl = document.getElementById("btn");
const inputBirthdate = document.getElementById("birthday-date");
const resultDisplay = document.getElementById("result");

function calculateAge() {
    const birthdayValue = inputBirthdate.value;
    if(birthdayValue === "") {
        alert("input your birthday")
    }else {
        const age = getAge(birthdayValue);
        // console.log(age);
        resultDisplay.innerText = age;
    }
}

function getAge (birthdayValue) {
    const currentDate = new Date(); 
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--; 
    }
    return age;
}

btnEl.addEventListener('click', calculateAge);