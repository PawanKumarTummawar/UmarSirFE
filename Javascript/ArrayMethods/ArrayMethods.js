
const smallNumbers = [1, 2, 3, 4 ,5];

const oddNumbers = smallNumbers.filter(
    (num) => {
        return num % 2 == 1;
    }
);

console.log(oddNumbers);

const oddDoubledNumbers = oddNumbers.map( (num) => {
    return num*2;
});

console.log(oddDoubledNumbers);