// Code your solution in this file!

function distanceFromHqInBlocks(blockNo){
    let blockDiff;
    blockDiff = blockNo - 42;
    if (blockDiff <0) {
        blockDiff = blockDiff * -1;
    }
return blockDiff
}

function distanceFromHqInFeet(blockNo){
    let blockDiff = distanceFromHqInBlocks(blockNo);
    let distanceInFeet = blockDiff * 264;

    return distanceInFeet;
}

function distanceTravelledInFeet(block1, block2){
    let blockDiff = block1 - block2;
    if (blockDiff < 0) {
        blockDiff = blockDiff * -1;
    };  
    let distTravelled = blockDiff * 264;
    return distTravelled;
}

function calculatesFarePrice(startBlock, endBlock){
    let totalFeetTravelled = distanceTravelledInFeet(startBlock, endBlock);
    let price;
    if (totalFeetTravelled<400) {
        price = 0;
        return price;
        };
    if ((totalFeetTravelled >= 400) && (totalFeetTravelled < 2000)) {
            price = (totalFeetTravelled-400) * 0.02;
            return price;
      };
    if ((totalFeetTravelled >= 2000) && (totalFeetTravelled < 2500)) {
    price =25;
    return price;
    };

    if (totalFeetTravelled > 2500) {
        price = 'cannot travel that far';
        return price;
    };

};

// console.log (`Distance travelled in feet is :  ` + (distanceTravelledInFeet(43,48)))
