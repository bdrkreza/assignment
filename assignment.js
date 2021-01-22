//github link: https://github.com/bdrkreza/assignmen


//megafriend program (1)

// Array call
let Friendname = [
    "rkreza",
    "mofassel",
    "monirHossian",
    "kalam"
];
// function call
function megaFriend(Friendname) {
    let longest = Friendname[0];

    for (let i = 0; i < Friendname.length; i++) {
        if (Friendname[i].length > longest.length) {
            longest = Friendname[i];
        }
    }
    return longest;
}
console.log(megaFriend(Friendname));
//megafriend program End

// budgetCalculator program (2)

function budgetCalculator(watch, laptop, mobail) {
    let result = watch + laptop + mobail;
    return result;
}
let total = budgetCalculator(50, 500, 100);
console.log(total);
// budgetCalculator program End

// kilometerToMeter program  (3)
function kilometerToMeter(kilometer) {
    let meter = 1000;
    let result = kilometer * meter;
    return result;
}
let convert = kilometerToMeter(1);
console.log(convert);
// kilometerToMeter program End