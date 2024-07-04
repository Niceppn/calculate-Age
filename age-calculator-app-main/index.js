

function myFunction(){


    const DATE = new Date();
    var Year = document.getElementById("YEAR").value;
    currentYear = DATE.getFullYear();


    const YearB = currentYear - Year;
    document.getElementById("YEAR1").innerHTML = YearB;

    var Month = document.getElementById("Month").value;
    const MonTh = DATE.getMonth()+1;
    const mB = MonTh - Month;
    const day = DATE.getDate();
  

    if(mB < day){
        document.getElementById("MONTH").innerHTML =mB - 1 ;
    }else {
        document.getElementById("MONTH").innerHTML =mB ;
    }

    var Day = document.getElementById("Day").value;
    const Dayb = day-Day;
    let fday = Math.abs(Dayb)
    document.getElementById("DAY").innerHTML = fday;


    
    
}

