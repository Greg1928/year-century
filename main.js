// FUNCTION
function yearToCentury(){
    if(syear.slice(index, syear.length) === "01" || syear.slice(index, syear.length) !== "00"){
        firstHalf = syear.slice(0,index);
        alert(parseInt(firstHalf) + 1 + "° secolo");
        // window.location.reload();
}else {
    alert(syear.slice(0,index)+ "° secolo");
    // window.location.reload();
    }
}

function reload(){
    window.location.reload();
}

// VARIABLES
let year;
let firstHalf;
let index;
let syear

// USER INPUT VALIDATE
do{
    year = Number(prompt("Anno:"));
}while(year > 9999);

syear = year.toString();

// SET INDEX
if(syear.length === 3){
    index = 1;
}else if (syear.length === 4){
    index = 2;
}

// MAIN
if(year >= 1 && year <= 100){
    alert("1° secolo");
    // window.location.reload();
}else yearToCentury();
