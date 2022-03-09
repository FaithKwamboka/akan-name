let akanMaleName = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "yaw",
  "Kofi",
  "Kwame",
];
let akanFemaleName = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];
let daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function submit() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let gender = document.getElementById("gender").value;
  let year = document.getElementById("year").value;

  let DD = parseInt(day);
  let MM = parseInt(month);
  let YY = parseInt(year.slice(2, 4));
  let CC = parseInt(year.slice(0, 2));

  let dayOfWeek = Math.floor(
    parseInt(
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
    )
  );

  let index;
  if (dayOfWeek == 0) {
    index = 6;
  } else {
    index = dayOfWeek;
  }

  function monthValidator() {
    if (month < 1 || month > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator() {
    if (month === 2 && Number(year) % 4 === 0) {
      if (day > 28 || day < 1) {
        return false;
      } else if (month === 2 && day > 29) {
        return false;
      } else if (month === 2 && day < 1) {
        return false;
      } else {
        return true;
      }
    } else if (day < 1 || day > 31) {
      return false;
    } else {
      return true;
    }
  }

  let validMonth = monthValidator();
  let validDay = dayValidator();

  if (gender === "male" && validDay && validMonth) {
    document.getElementById("result").innerHTML =
      "Your Akan name is " + akanMaleName[index];
  } else if (gender === "female" && validDay && validMonth) {
    document.getElementById("result").innerHTML =
      "Your Akan name is " + akanFemaleName[index];
  } else {
    alert("Enter a valid day or month");
  }
}
