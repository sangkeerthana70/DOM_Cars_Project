var  cars = {
    
    busname: "Anu's rent a car",
    types: ['economy', 'midsize'],
    econcount:500,
    midcount:300
     
        };
        
window.onload = function() {
    
    document.getElementById("bizName").innerHTML = cars.busname;
    
    
        };
function clicked_on() {
    
    document.getElementById("econCars").innerHTML = cars.types[0];
    document.getElementById("econCarsAvail").innerHTML = cars.econcount;
    document.getElementById("midsizeCars").innerHTML = cars.types[1];
    document.getElementById("midsizeCarAvail").innerHTML = cars.midcount;
    
 };
 
 function midclick() {
     
     cars.midcount--;
     document.getElementById("midsizeCarAvail").innerHTML = cars.midcount;
 };
 
 function econclick() {
    
     cars.econcount--;
     document.getElementById("econCarsAvail").innerHTML = cars.econcount;
     
 };