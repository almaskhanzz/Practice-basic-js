function negativeElement(numbers) {
    let positiveValueArr = [];
    for (const elements of numbers) {
        if (elements >= 0) {
            positiveValueArr.push(elements);
        }
        else {
            break;
        }
    }
    return positiveValueArr;
}
const finalArray = negativeElement([10, 5, 20, 40, -49, 60, 8, -78, 89, 74, 51, -90]);
console.log(finalArray);

//to show value of array;
/* function negativeElement(numbers) {
    let positiveValueArr = [];
    for (const elements of numbers) {
        if (elements >= 0) {
            positiveValueArr.push(elements);
        }
        else {
            break;
        }
    }
    for (const newElements of positiveValueArr) {
        console.log(newElements);
    }
    return positiveValueArr;
}
const finalArray = negativeElement([10, 5, 20, 40, -49, 60, 8, -78, 89, 74, 51, -90]); */