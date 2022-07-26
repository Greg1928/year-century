
let year;
let middle;
let first;

do{
    year = Number(prompt("Anno:"));
}while(year > 9999 || !parseInt(year));

if(year >= 1 && year <= 100){
    alert("1° secolo")
}else if(year >= 101 && year <= 1000){
    let syear = year.toString();
    if(syear.slice(1, syear.length) === "01" || syear.slice(1, syear.length) !== "00"){
        first = syear.slice(0,1);
        alert(parseInt(first) + 1 + "° secolo");
        window.location.reload();
    }else {
        alert(syear.slice(0,1)+ "° secolo");
        window.location.reload();
    }
}else if(year >= 1001 && year <= 10000){
    let syear = year.toString();
    if(syear.slice(2, syear.length) === "01" || syear.slice(2, syear.length) !== "00"){
        first = syear.slice(0,2);
        alert(parseInt(first) + 1 + "° secolo");
        window.location.reload();
    }else {
        alert(syear.slice(0,2)+ "° secolo");
        window.location.reload();
    }
}else{
    window.location.reload();
}
