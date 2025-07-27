function ShowNumber() {
    const smallNumbers = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
        six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
        eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
        fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
    };

    const tens = {
        twenty: 20, thirty: 30, forty: 40, fifty: 50,
        sixty: 60, seventy: 70, eighty: 80, ninety: 90,
    };

    const multiples = {
        hundred: 100,
        thousand: 1000,
        million: 1000000,
        billion: 1000000000,
    };
    let text = document.getElementById("TxtText").value;
    let texts = text.split(' ');
    let total = 0;
    let current = 0;

    for (let i of texts) {
        if (smallNumbers.hasOwnProperty(i)) {
            current += smallNumbers[i];
        }
        else if (tens.hasOwnProperty(i)) {
            current += tens[i];
        }
        else if (i === 'hundred') {
            current *= 100;
        }
        else if (multiples.hasOwnProperty(i)) {
            current *= multiples[i];
            total += current;
            current = 0;
        }
        else if (i === 'and') {
            continue;
        }
        else {
            throw new Error(`unknown word: ${i}`);
        }
    }

    let num = (total + current) + "";
    let nums = [];
    let k = 0;
    for (let i = 0; i < num.length; i += 3) {
        let j = num.length-1;
        nums.push(num.slice(Math.max(0, j - i - 2), j - i + 1));
    }

    let result = ""
    for (let i = 0; i < nums.length; i++) {
        result = nums[i] + result;
        if (i != nums.length - 1){
            result = "," + result;
        }
    }
    alert(result);
}
