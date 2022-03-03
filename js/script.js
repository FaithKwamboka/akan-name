let akanform = document.getElementById("akanform");

akanform.addEventListener("submit", function(event) {
    event.preventDefault();
})

function akanGen () {

    function validator(){
        if ((Number(day) < 1 || Number(day) > 31) || (Number(month) < 1 || Number(month) > 12)) {
            alert("Enter a valid day or month")
        }

        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let day = document.getElementById("day").value;
        let male,female

        if (document.getElementById("male-input").checked == true) {
            male = "male"
        };
        if (document.getElementById("female-input").checked == true) {
            female = "female"
        };
    }
    
    
}