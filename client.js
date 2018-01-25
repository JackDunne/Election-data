const sort = Require('./Sort.js');

//1st dash of readme
function atLeast(array, number){
  let states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY")];
  let totals = new Array(50);
  totals.fill(0);
  for(let x = 0;x<array.length;x++){
    if(array[x].fips == 0){//experiment with a while loop
      continue;
    }
    else if()
  }
}

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
    if(array[x].fips == 0){
      let temp = array[x].obamaPercent - array[x].romneyPercent;
      temp = Math.abs(temp);
      if(temp < percent){
        statePercents.push(array[x].state);
      }
    }
  }
  return statePercents;
}

//4th dash of readme
function totalVotes(array, stateAbbreviation){
  let givenState = [];
  for(let x = 0;x<array.length;x++){
    if(array[x].state == stateAbbreviation && array[x].fips !== 0){
      givenState.push(array[x]);
    }
    else{
      continue;
    }
  }
  givenState = givenState.sort(function(a,b){
    return a.obamaVote+a.romneyVote - (b.obamaVote+b.romneyVote);
  });
  return givenState;
}



//5th dash of readme
function statesWon(array, candidate,state){
  let won = [];
  for(let x = 0;x<array.length;x++){
    let number = array.obamaVote - array.romneyVote;
    if(candidate = "Obama" && number > 0){
      won.push([array[x].state,array[x].county,array[x].obamaPercent]);
    }
    else if(candidate = "Romney"&& number < 0){
      won.push([array[x].state,array[x].county,array[x].romneyPercent]);
    }
    else{
      null;
    }
  }
}

//6th dash of readme
function percentDifference(array){
  let temp;
  let state;
  for(let c = 0;c<array.length;c++){
    if(array[c].fips !== 0){
      temp =  Math.abs(array[c].obamaPercent - array[c].romneyPercent);
      state = array[x].state;
      break;
    }
    for(let x = 1;x<array.length;x++){
      if(array[x].fips == 0){
        continue;
      }
      else if(Math.abs(array[x].obamaPercent - array[x].romneyPercent) >= temp){
        temp = Math.abs(array[x].obamaPercent - array[x].romneyPercent);
        state = array[x].state;
      }
      else if(Math.abs(array[x].obamaPercent - array[x].romneyPercent) < temp){
        continue;
      }
    }
  }
  return state;
}

//7th dash of readme
function percentDifference(array){
  let temp;
  let state;
  for(let c = 0;c<array.length;c++){
    if(array[c].fips !== 0){
      temp =  Math.abs(array[c].obamaVote - array[c].romneyVote);
      state = array[x].state;
      break;
    }
  }
    for(let x = 1;x<array.length;x++){
      if(array[x].fips == 0){
        continue;
      }
      else if(Math.abs(array[x].obamaVote - array[x].romneyVote) >= temp){
        temp = Math.abs(array[x].obamaVote - array[x].romneyVote);
        state = array[x].state;
      }
      else if(Math.abs(array[x].obamaVote - array[x].romneyVote) < temp){
        continue;
      }
    }
    return state;
  }
