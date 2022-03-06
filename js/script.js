let akanMaleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"]
let akanFemaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let date_error = document.getElementById("date_error");
let month_error = document.getElementById("month_error");


function submit() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let gender = document.getElementById("gender").value;
    let year = document.getElementById("year").value;

    let DD = parseInt(day);
    let MM = parseInt(month);
    let YY = parseInt(year.slice(2,4));
    let CC = parseInt(year.slice(0,2));

    let dayOfWeek = Math.round(parseInt((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)%7));
    
    if(DD <= 0 || DD > 31){
        alert("enter a valid date");
        date_error.style.display = "block";
    }
    else if(MM <= 0 || MM > 12){
        alert("enter a valid month");
        month_error.style.display = "block";
    }
    else if(MM <= 0 || MM > 12){
        alert("enter a valid month");
        month_error.style.display = "block";
    }  
    if(gender === "male"){
        document.getElementById("result").innerHTML = "Your Akan name is " + akanMaleName[dayOfWeek]
    }
    else if(gender === "female"){
        document.getElementById("result").innerHTML = "Your Akan name is " + akanFemaleName[dayOfWeek]
    }
}