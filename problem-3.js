function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPaper = firstBookCopy * 100;
    const secondBookPaper = secondBookCopy * 200;
    const thirdBookpaper = thirdBookCopy * 300;

    const totalBookPaper = firstBookPaper + secondBookPaper + thirdBookpaper;
    return totalBookPaper;
}
const neededBookPaper = paperRequirements(5, 8, 10);
console.log("Total", neededBookPaper, "papers needed");