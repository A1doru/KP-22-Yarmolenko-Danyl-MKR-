function manipulateArray(arr1, arr2, ...rest) {
    const combinedArr = [...arr1, ...arr2]; // Використання Spread для об'єднання масивів
    alert("Combined Array:" + combinedArr.join(', ') + "\nRest Arguments:"+ rest.join(', ')); // Використання Rest для збору залишкових аргументів
}


function task3(){
    manipulateArray([1, 2, 3], [4, 5, 6], 7, 8, 9);
}


// Пояснення відмінностей rest та spread: 

// Оператор rest використовується для того, щоб взяти із масива елементи, які ще не були використані.
// Оператор spread використовується для того, щоб діставати із масива дані, та у подальшому оперувати ними
