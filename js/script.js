//Defining Variables
// let maleAkanName = [
//     "Kwasi",
//     "Kwadwo",
//     "Kwabena",
//     "Kwaku",
//     "Yaw",
//     "Kofi",
//     "Kwame"
// ];

// let femaleAkanName = [
//     "Akosua",
//     "Adwoa",
//     "Abenaa",
//     "Akua",
//     "Yaa",
//     "Afua",
//     "Ama"
// ];

// let weekDay = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];

let akanFemale = [
    { day: "Sunday", akan: "Akosua" },
    { day: "Monday", akan: "Adwoa" },
    { day: "Tuesday", akan: "Abenaa" },
    { day: "Wednesday", akan: "Akua" },
    { day: "Thursday", akan: "Yaa" },
    { day: "Friday", akan: "Afua" },
    { day: "Saturday", akan: "Ama" },
  ];
  
  let akanMale = [
    { day: "Sunday", akan: "Kwasi" },
    { day: "Monday", akan: "Kwadwo" },
    { day: "Tuesday", akan: "Kwabena" },
    { day: "Wednesday", akan: "Kwaku" },
    { day: "Thursday", akan: "Yaw" },
    { day: "Friday", akan: "Kofi" },
    { day: "Saturday", akan: "Kwame" },
  ];

document.getElementById("").style.display = "none";

function onSubmit(){
    let day = daysOfTheWeek[calculateDay()];
    let name = getAkanName();
    document.getElementById("day").innerHTML = day;
    document.getElementById("name").innerHTML = name;
    document.getElementById("").style.display = "block";
}

function getYear() {
    let year = document.getElementById("year").value;
    return year;
    if (input == null){
        alert("Enter year")
    }
}

function getMonth() {
    let month = document.getElementById("month").value;
    return month;
    if (input == null){
        alert("Enter month")
    }
}

function getDate() {
    let date = document.getElementById("day_").value;
    return date;
    if (input == null){
        alert("Enter Date")
    }
}

function getGender() {
    if (document.getElementById("male").checked == true) {
        male = "male"
    };
    if (document.getElementById("female").checked == true) {
        female = "female"
    };
}

//CC is the century digits e.g for 1980 - 19, YY is the year digits i.e 80, MM is the month and DD is the day of the month
function calculateDay() {
    let year = parseInt(getYear());
    let MM = parseInt(getMonth());
    let DD = parseInt(getDate());

    let CC = year.slice(0, 2);
    let YY = year.slice(2, 4);

//calculating day
    let dayOfWeek = Math.floor((((Number(CC) / 4) - 2 * Number(CC) - 1) + ((5 * Number(YY) / 4)) + ((26 * (Number(MM) + 1) / 10)) + Number(DD)) % 7);
    console.log(dayOfWeek);
}

//Name generation
function getAkanName(){
    if (male.checked) {
        akanMale.find((item, index, arr) => {
          if (index == day) {
            console.log(item.akan, item.day);
            title.innerHTML = item.akan;
            document.getElementById(
              "text"
            ).innerHTML = `Means an African male born on ${item.day}`;
          }
        });
    } else if (female.checked) {
        akanMale.find((item, index, arr) => {
          if (index == day) {
            console.log(item.akan, item.day);
            document.getElementById("title").innerHTML = item.akan;
            document.getElementById(
              "text"
            ).innerHTML = `Means an African female born on ${item.day}`;
          }
        });
    }
}

const validate = () => {
    if (((male.checked)  == false) && ((female.checked) == false)) {
      return alert("Choose your gender");
    }
    else if ( CC == null ) {
        return alert("Fill in your date");
    }else if ( ((((male.checked)  == false) && ((female.checked) == false))) || (CC == null) ) {
        return alert("Fill your date and Gender");
    }else{
      document.querySelector(".form").style.display = "none";
      document.querySelector(".display").style.display = "block";
      dayOfTheWeek();
    }
  
    let isValidDate = Date.parse("03/06/2022");
  
    if (isNaN(isValidDate)) {
        console.log("This is not a valid date format.")
    } 
  };

  getDate();

document.getElementById("submit").addEventListener("click", () => {
  validate();

});


