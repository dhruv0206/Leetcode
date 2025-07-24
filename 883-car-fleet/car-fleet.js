/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const numberOfCars = position.length;
    let pair = [];
    position.forEach((ele, i) => { pair.push([position[i], speed[i]]) }); // combine both array into one i.e position and speed
    pair.sort((a, b) => b[0] - a[0]); // sort the array by position

    let stack = [];
    pair.forEach((car, index) => {
        stack.push((target - car[0]) / car[1]); // formula to calcuate time for each car to reach destination (target - position/speed)
        const stackLength = stack.length;
        if (stack.length >= 2 && stack[stackLength - 1] <= stack[stackLength - 2]) {
            stack.pop(); //if cars collide remove the car whose starting position is less. (i.e last pushed car)   
        }
    });
    return stack.length;

};  