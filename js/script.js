//Defining Variables
let maleAkanName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

let femaleAkanName = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.getElementById("output").style.display = "none";

function onSubmit(){
    let day = daysOfTheWeek[calculateDay()];
    let name = getAkanName();
    document.getElementById("day").innerHTML = day;
    document.getElementById("name").innerHTML = name;
    document.getElementById("output").style.display = "block";
}

function getYear() {
    let year = document.getElementById("year").value;
    return year;
}

function getMonth() {
    let month = document.getElementById("month").value;
    return month;
}

function getDate() {
    let date = document.getElementById("day_").value;
    return date;
}

function getGender() {
    if (document.getElementById("male").checked == true) {
        male = "male"
    };
    if (document.getElementById("female").checked == true) {
        female = "female"
    };
}

function calculateDay() {
    let year = parseInt(getYear());
    let MM = parseInt(getMonth());
    let DD = parseInt(getDate());

    let CC = year.slice(0, 2);
    let YY = year.slice(2, 4);

    let dayOfWeek = Math.floor((((Number(CC) / 4) - 2 * Number(CC) - 1) + ((5 * Number(YY) / 4)) + ((26 * (Number(MM) + 1) / 10)) + Number(DD)) % 7);
    console.log dayOfWeek;
}

