function age() {
    var dob1 = document.getElementById("date").value;
    console.log(dob);
    var dob = new Date(dob1);
    var year1 = dob.getFullYear();
    console.log(year1);
    var month1 = dob.getMonth();
    console.log(month1);
    var day1 = dob.getDate();
    console.log(day1);
    var d1;
    var db1;
    // var y2 = dob.getFullYear();
    // console.log(y2);
    var date = new Date();//current date
    console.log(date);
    var year = date.getFullYear();
    console.log(year);
    var month = date.getMonth();
    console.log(month);
    var day = date.getDate();
    console.log(day);

    if (dob1 == "") {
        document.getElementById("Age").innerHTML = "enter date of birth";
    }
    else if ((year1 > year)) {
        document.getElementById("Age").innerHTML = "enter valide date"

    }
    else if ((year1 == year) && (month1 > month)) {
        document.getElementById("Age").innerHTML = "enter valide date"

    }
    else if ((year1 == year) && (month1 == month) && (day1 > day)) {
        document.getElementById("Age").innerHTML = "enter valide date"

    }
    if (day < day1) {
        var d3 = day - day1 + 30;
        month = month - 1;
    }
    else { var d3 = day - day1 }

    if (month < month1) {
        var d2 = month - month1 + 12;
        year1 = year - 1;
    }
    else {
        var d2 = month - month1;
    }

if(year<year1){
    year1=d1;
    year=db1;

     d1 =db1 -d1;
    // day1=day1-1;
}
else
   {var d1=year-year1; }
    document.getElementById("Age").innerHTML = d1 + "year" + d2 + "month" + d3 + "days";
}