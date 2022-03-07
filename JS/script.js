const date = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year"); 
const gender = document.querySelector("#gender"); 
const form = document.querySelector("#input");
const error = document.querySelector("#err");
const errorm = document.querySelector("#errm");
const errory = document.querySelector("#erry");
const errorg = document.querySelector("#errg");
const submit = document.querySelector("#submit");
const assignName = document.querySelector(".output");
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Event Listeners

form.addEventListener("submit", verifyDay);
form.addEventListener("submit", verifyMonth);
form.addEventListener("submit", verifyYear);
// form.addEventListener("submit", verifyGender);
form.addEventListener("submit", getAkanName);

var birthDay = [];

function verifyDay(e) {
    e.preventDefault();  
    let dayOfBirth = date.value.trim();

    if(dayOfBirth <= 0) {
        error.innerHTML="Date can't be 0 or less ";
        dayOfBirth="";
    } else if(dayOfBirth >31) {
        error.innerHTML="Date can't get beyond 31!"
    } else {
        error.innerHTML="";
        birthDay.push(parseInt(dayOfBirth));
    }
}

function verifyMonth(e) {
    e.preventDefault(); 
    let monthOfBirth = month.value.trim(); 
    let dOB = date.value.trim();

    if(monthOfBirth <= 0 ) {
        errorm.innerHTML = "Enter correct month";
    } else if(monthOfBirth >12 ) {
        errorm.innerHTML = "Month should be between 1 & 12";
    } else if(monthOfBirth === '2' && dOB >29 ) {
        errorm.innerHTML = "February has at most 29 days";
    } else {
        errorm.innerHTML = "";
        birthDay.push(dOB);
    }
}

function verifyYear(e) {
    e.preventDefault();
    let givenYear = year.value.trim();
    
    if(givenYear.length !== 4) {
      errory.innerHTML = "Year should be 4 digits eg 1900";
    } else {
        errory.innerHTML = "";
        birthDay.push(givenYear);
    }
}

function getAkanName() {
    let recivedDate = date.value; 
    let recivedMonth = month.value; 
    let recivedYear = year.value; 
    // let recivedGender = gender.value; 

    let namingDay = recivedYear + "-" + recivedMonth + "-" + recivedDate;
    let requiredDay = namingDay.toString();
    let dayName = new Date(requiredDay);
    const day = dayName.getDay();

     
        if (gender.value === "female") {
            assignName.innerHTML = `${akanFemaleNames[day]}`;
        }
        if (gender.value === "male") {
            assignName.innerHTML = `${akanMaleNames[day]}`;
        }
        console.log(gender.value);
    
}

// function verifyGender(e) {
//     e.preventDefault();
//     let givenGender = gender.value;

//     if(gender.value === "") {
//       errorg.innerHTML = "Select your gender";
//     }  else {
//         errorg.innerHTML = "";
//         birthDay.push(givenGender);
//         console.log(birthDay);
//     }
//   }

