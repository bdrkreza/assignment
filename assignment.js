//github link: https://github.com/bdrkreza/assignmen


//megafriend program (1)

// Array call
let friendname = [
    "rkreza",
    "mofassel",
    "monirHossian",
    "kalam"
];
// function call
function megaFriend(friendname) {
    let largest = friendname[0];

    for (let i = 0; i < friendname.length; i++) {
        if (friendname[i].length > largest.length) {
            largest = friendname[i];
        }
    }
    return largest;
}
//megafriend program End

// budgetCalculator program (2)

function budgetCalculator(watch, laptop, mobail) {
    let result = watch + laptop + mobail;
    return result;
}
let total = budgetCalculator(50, 500, 100);

// budgetCalculator program End

// kilometerToMeter program  (3)
function kilometerToMeter(kilometer) {
    let meter = 1000;
    let result = kilometer * meter;
    return result;
}
let convert = kilometerToMeter(1);

// kilometerToMeter program End


// Hotel cost program (4)
function hotelCost(day) {
    let discount = 0;
    let amount = day * 100;

    if (amount < 1000) {
        discount = 0;
    }

    if ((amount >= 1100) && (amount <= 1800)) {
        discount = 20;
    }

    if ((amount >= 1900) && (amount <= 2300)) {
        discount = 50;
    }

    if (amount > 2400) {
        discount = 50;
    }

    amount = amount - ((amount * discount) / 100);
    return amount;
}
let days = hotelCost(11);

// Hotel cost program End