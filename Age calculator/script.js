const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateage(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("enter birthday")
    }
    else{
        const age = getAge(birthdayValue)
        resultEl.innerText = `your age is ${age} ${age > 1 ? " years " : " year "} old`; 
    }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdatDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdatDate.getFullYear();
    const month = currentDate.getMonth() - birthdatDate.getMonth();

    if(month <0 || (month ===0 && currentDate.getDate() < birthdatDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click", calculateage);