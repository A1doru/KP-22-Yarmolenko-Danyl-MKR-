function task1() {
    let word = prompt("Введіть слово:");

    if (word === null) {
        alert("Скасовано.");
        return;
    }

    word = word.trim();
    if (word === "") {
        alert("Invalid value");
        return;
    }

    let middleIndex = Math.floor(word.length / 2);

    if (word.length % 2 === 0) {
        alert(word[middleIndex - 1] + word[middleIndex]);
    } else {
        alert(word[middleIndex]);
    }
}