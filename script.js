let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

//to make it change for every second we do use set interval with 1000 milliseconds(1sec)
function datetime(){
    //to display the local date and time
    let currentTime = new Date();

    console.log(currentTime.getMonth())
    //to get only hrs => getHours(a function)
    //to get only mins => getMinutes(a function)
    //to get only sec => getSeconds(a function)

    //specifying a condition in order to display 2 digit number as 01,02 instead of 1,2

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

}
setInterval(datetime,1000)

