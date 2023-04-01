// code your solution here
function superbowlWin(record){
    let winningYear = record.find(array => array.result === "W")
    if(winningYear) {
        return winningYear.year
    };
    return undefined;
}