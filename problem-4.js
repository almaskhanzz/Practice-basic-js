//other way...
function bestFriend(names) {
    let largeName;
    let topLength = names[0].length;
    for (const elements of names) {
        let length = elements.length;
        if (length >= topLength) {
            topLength = length;
            largeName = elements;
        }
    }
    return largeName;
}
const largeString = bestFriend(['This is large', 'This is second large', 'This is the largest........']);
console.log(largeString);
//Other way.....
/* function bestFriend(names) {
    let largeName;
    let topLength = 0;
    for (let i = 0; i < names.length; i++) {
        const length = names[i].length;
        if (length > topLength) {
            topLength = length;
            largeName = names[i];
        }
    }
    return largeName;
}
const largeString = bestFriend(['This is large*', 'This is second large', 'This is the largest........']);
console.log(largeString); */