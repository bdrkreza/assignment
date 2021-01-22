//github link:


//megafriend program 
let Friendname = [
    "rkreza",
    "mofassel",
    "monirHossian",
    "kalam"
];

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