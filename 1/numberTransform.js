function mapNumber (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

console.log(mapNumber(15, 0, 60, 25, 75));
console.log(mapNumber(23, 0, 60, 25, 75));
console.log(mapNumber(48, 0, 60, 25, 75));
console.log(mapNumber(0, 0, 60, 25, 75));
console.log(mapNumber(61, 0, 60, 25, 75));
