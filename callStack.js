function takeShower(){
    return "showering";
}
function eatBreakfast(){
    let meal=prepareMeal();
    return meal;
}
function prepareMeal(){
    let itemsForMeal=["egg","chicken","paneer"];
    return itemsForMeal[Math.random()*(itemsForMeal.length-1)]
}
function wakeUp(){
    takeShower();
    eatBreakfast();
    
}

wakeUp();
console.log("everything done");