const hqBlock = 42;
const blockInFeet = 264;
const lowRate = 0.02;
const highRate = 25;
const flatRate = 400;

//Number of blocks from hq
function distanceFromHqInBlocks(homeBlock){
    if (homeBlock> 42) {
       return homeBlock- hqBlock;
     } else {
        return hqBlock-homeBlock;
     }
}

//Calculating distance from hq in feet
 function distanceFromHqInFeet(homeBlock){
    let blockNo= distanceFromHqInBlocks(homeBlock);
    return blockNo*blockInFeet;
    
 }
//Distance in Feet from any location
function distanceTravelledInFeet(start, finish){
    let distInFeet = Math.abs((start - finish));
    return distInFeet*blockInFeet
}
//Distance Fare Calculation
function calculatesFarePrice(start, destination){
 let travelledDistance = distanceTravelledInFeet(start, destination);
 if (travelledDistance<=flatRate) {
    return 0;

 } else if (travelledDistance > 400 && travelledDistance <2000) {
    return (travelledDistance - flatRate)*lowRate;

 } else if (travelledDistance > 2000 && travelledDistance < 2500){
    return (travelledDistance > 2000)*highRate

 }else if (travelledDistance>2500){
    return 'cannot travel that far'
 }
  
}
