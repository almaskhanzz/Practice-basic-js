function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const totalMeter = centimeterToMeter(1000);
console.log("Total :", totalMeter, "meter");