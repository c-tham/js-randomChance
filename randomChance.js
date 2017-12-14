var win=0;

function chance(quarters) {
    console.log("You are playing "+quarters+" quarters")
    var slot1=0;
    var slot2=0;
    var slot3=0;

    for (x=1; x<=quarters; x++) {

        slot1=Math.floor(Math.random()*10);
        slot2=Math.floor(Math.random()*10);
        slot3=Math.floor(Math.random()*10);
        
        if (slot1 == slot2 && slot2 == slot3) {
            console.log(x+" Slot = "+slot1+"-"+slot2+"-"+slot3+" is a winner!")
            return quarters - x + 1;
        } else {
            console.log(x+" Slot = "+slot1+"-"+slot2+"-"+slot3)
        }
    }
    return 0;
}

console.log("You still have "+chance(Math.floor(Math.random()*100))+" quarters");