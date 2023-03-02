function hasCssClass(name) {
    return 'contains(concat(" ", normalize-space(@class), " "), " ' + name + ' ")';
};

export default {
    hasCssClass 
};

const numbers = [2, 7, 19, 22, 38, 9];

let i = 0;

while (i <= numbers.length){
    console.log(numbers[i]);

    if (numbers[i] %2 >0){
        numbers[i]*2;
        i++
    }
    
}

console.log(numbers);