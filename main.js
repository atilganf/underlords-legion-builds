let heroes = [
    ['Abaddon', 17, 13],
    ['Alchemist', 9, 4, 19],
    ['Anti-Mage', 4, 18],
    // ['Axe', 3, 9],
    ['Batrider', 14, 13],
    ['Beastmaster', 3, 18, 7],
    ['Bounty Hunter', 4, 16],
    ['Bristleback', 3, 5],
    ['Chaos Knight', 13, 1],
    ['Crystal Maiden', 12, 25],
    ['Dazzle', 14, 24],
    ['Doom', 1, 9],
    // ['Dragon Knight', 12, 10, 13],
    ['Drow Ranger', 11, 15, 18],
    ['Earth Spirit', 20, 23],
    ['Ember Spirit', 20, 16, 21],
    // ['Faceless Void', 22, 16],
    ['Juggernaut', 3, 21],
    // ['Keeper of the Light', 12, 25],
    ['Kunkka', 12, 23, 21],
    ['Legion Commander', 12, 0],
    ['Lich', 17, 25],
    ['Lifestealer', 11, 9],
    ['Lina', 12, 25],
    ['Lone Druid', 5, 7, 8],
    ['Luna', 15, 13],
    ['Lycan', 12, 5, 8],
    ['Magnus', 5, 7],
    // ['Medusa', 6, 18],
    ['Meepo', 4, 18],
    ['Mirana', 15, 18],
    ['Natures Prophet', 7, 8],
    ['Omniknight', 12, 13, 24],
    ['Pangolier', 5, 21],
    ['Phantom Assassin', 16, 21],
    ['Puck', 10, 25],
    ['Pudge', 11, 23],
    ['Queen of Pain', 1, 16, 19],
    ['Rubic', 25, 2],
    ['Shadow Demon', 11, 1],
    ['Shadow Shaman', 14, 8],
    ['Slardar', 6, 23],
    ['Slark', 6, 16],
    ['Snapfire', 10, 3],
    ['Spectre', 22, 1],
    ['Spirit Breaker', 5, 9],
    ['Storm Spirit', 20, 25],
    ['Sven', 12, 21, 13],
    ['Templar Assassin', 15, 22, 16],
    ['Terrorblade', 1, 18, 17],
    ['Tidehunter', 6, 23],
    ['Treant Protector', 7, 9],
    // ['Troll Warlord', 14, 23],
    ['Tusk', 5, 23],
    ['Vengeful Spirit', 17, 11],
    ['Venomancer', 8, 6, 19],
    ['Viper', 10, 19],
    ['Void Spirit', 20, 22],
    ['Windranger', 15, 18],
    // ['Wraith King', 17, 21]
]
let alli1 = ['Champion', 'Demon', 'Magus']
let alli2 = [
    'Brawny', 'Rogue', 'Savage', 'Scaled', 'Shaman', 'Summoner', 'Brute',
    'Dragon', 'Heartless', 'Human', 'Knight', 'Troll', 'Vigilant'
]
let alli3 = [
    'Assassin', 'Fallen', 'Hunter', 'Poisoner', 'Spirit', 
    'Swordsman', 'Void', 'Warrior', 'Healer', 'Mage'
]

function calcComb(n, r) {
    let top = 1;
    for (let i = 0; i < r; i++) {
        top *= n - i;
    }
    let bot = 1;
    for (let i = 1; i < r + 1; i++) {
        bot *= i;
    }
    let result = top / bot;
    return result
}

function checkAllies(arr) {
    let alliCount = 0;
    let ally = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // length = 26
    let arrlen = arr.length;
    for (let i = 0; i < arrlen; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            ally[arr[i][j]]++;
        }
    }
    // if (ally[0] > 0) { alliCount++ }
    if (ally[1] > 0) { alliCount++ }
    if (ally[2] > 0) { alliCount++ }
    for (let i = 3; i < 16; i++) {
        if (ally[i] > 1) { alliCount++; }
    }
    for (let i = 16; i < 26; i++) {
        if (ally[i] > 2) { alliCount++; }
    }
    return alliCount;

}

let absHeroNames = ["Legion Commander"];
let absHeroes = heroes.filter(h => absHeroNames.includes(h[0]));
heroes = heroes.filter(h => !absHeroNames.includes(h[0]))
let heroNames = heroes.map(h => h[0]);
heroes = heroes.map(h => h.slice(1))
absHeroes = absHeroes.map(h => h.slice(1))

let teams10 = [];
let teams11 = [];
let teams12 = [];
let teams13 = [];
let teams14 = [];
let teams15 = [];
let teams16 = [];

// let allComb = calcComb(59, 9);
// let perc = 0;

let n = heroes.length;
// for (let a = 0; a < n - 8; a++) {
    for (let b = 0; b < n - 7; b++) {
        for (let c = b + 1; c < n - 6; c++) {
            for (let i = c + 1; i < n - 5; i++) {
                for (let i0 = i + 1; i0 < n - 4; i0++) {
                    for (let i1 = i0 + 1; i1 < n - 3; i1++) {
                        for (let i2 = i1 + 1; i2 < n - 2; i2++) {
                            for (let i3 = i2 + 1; i3 < n - 1; i3++) {
                                for (let i4 = i3 + 1; i4 < n; i4++) {
                                    let tempTeam = [absHeroes[0],
                                    // heroes[a],
                                    heroes[b], heroes[c], heroes[i],
                                    heroes[i0], heroes[i1], heroes[i2], heroes[i3], heroes[i4]];
                                    let alliNum = checkAllies(tempTeam);
                                    if (alliNum == 10) {
                                        teams10.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    if (alliNum == 11) {
                                        teams11.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    if (alliNum == 12) {
                                        teams12.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    if (alliNum == 13) {
                                        teams13.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    else if (alliNum == 14) {
                                        teams14.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    else if (alliNum == 15) {
                                        teams15.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    else if (alliNum == 16) {
                                        teams16.push([alliNum, absHeroNames[0],
                                            // heroNames[a],
                                            heroNames[b], heroNames[c], heroNames[i],
                                            heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
// }
teams10 = "let teams = " + JSON.stringify(teams10)
teams11 = "let teams = " + JSON.stringify(teams11)
teams12 = "let teams = " + JSON.stringify(teams12)
teams13 = "let teams = " + JSON.stringify(teams13)
teams14 = "let teams = " + JSON.stringify(teams14)
teams15 = "let teams = " + JSON.stringify(teams15)
teams16 = "let teams = " + JSON.stringify(teams16)
const fs = require("fs");
fs.writeFile("teams10.txt", teams10, (err) => { if (err) throw err; });
fs.writeFile("teams11.txt", teams11, (err) => { if (err) throw err; });
fs.writeFile("teams12.txt", teams12, (err) => { if (err) throw err; });
fs.writeFile("teams13.txt", teams13, (err) => { if (err) throw err; });
fs.writeFile("teams14.txt", teams14, (err) => { if (err) throw err; });
fs.writeFile("teams15.txt", teams15, (err) => { if (err) throw err; });
fs.writeFile("teams16.txt", teams16, (err) => { if (err) throw err; });
