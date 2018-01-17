//2nd dash of readme
function findStates(array){
    let states = [];
    for(let x = 0;x<array.length;x++){
        if(array[x].fips == 0){
            states.push(array[x]);
        }
        else{
            null;
        }
    }
}

//3rd dash of readme
function percentDifference(array, percent){
    let statePercents = [];
    for(let x = 0;x<array.length;x++){
        let temp = array[x].obamaPercent - array[x].romneyPercent;
        temp = Math.abs(TEMP)//that is not correct
        if(temp < percent){
            //then you do things
        }
    }
}
