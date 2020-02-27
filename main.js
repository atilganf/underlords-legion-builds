let heroes = [
    ['Abaddon', 8, 11],
    ['Arc Warden', 12, 15],
    ['Axe', 3, 4],
    ['Batrider', 16, 11],
    ['Beastmaster', 3, 20],
    ['Bloodseeker', 2, 0],
    ['Bristleback', 3, 13],
    ['Broodmother', 10, 18],
    ['Chaos Knight', 1, 11],
    ['Crystal Maiden', 9, 21],
    ['Dazzle', 16, 7],
    ['Disruptor', 3, 18],
    ['Doom', 1, 4],
    ['Dragon Knight', 9, 5, 11],
    ['Drow Ranger', 8, 17, 20],
    ['Earth Spirit', 22, 24],
    ['Ember Spirit', 22, 19],
    ['Enigma', 23, 12],
    ['Faceless Void', 23, 19],
    ['Io', 12, 6],
    ['Juggernaut', 3, 24],
    ['Keeper of the Light', 9, 21],
    ['Legion Commander', 9, 25],
    ['Lich', 8, 21],
    ['Lifestealer', 8, 4],
    ['Lone Druid', 13, 6, 15],
    ['Luna', 17, 11],
    ['Lycan', 9, 13, 15],
    ['Magnus', 13, 6],
    ['Medusa', 14, 20],
    ['Mirana', 17, 20],
    ['Morphling', 12, 21],
    ['Natures Prophet', 6, 15],
    ['Necrophos', 8, 18, 7],
    ['Nyx Assassin', 10, 19],
    ['Ogre Magi', 2, 4, 21],
    ['Omniknight', 9, 11, 7],
    ['Pudge', 8, 24],
    ['Queen of Pain', 1, 19],
    ['Razor', 12, 21],
    ['Sand King', 13, 10],
    ['Shadow Demon', 8, 1],
    ['Shadow Fiend', 1, 18],
    ['Shadow Shaman', 16, 15],
    ['Slardar', 14, 24],
    ['Slark', 14, 19],
    ['Snapfire', 5, 3],
    ['Storm Spirit', 22, 21],
    ['Sven', 9, 14, 11],
    ['Templar Assassin', 17, 23, 19],
    ['Terrorblade', 1, 20],
    ['Tidehunter', 14, 24],
    ['Tiny', 12, 24],
    ['Treant Protector', 6, 4],
    ['Troll Warlord', 16, 24],
    ['Tusk', 13, 24],
    ['Venomancer', 15, 14],
    ['Viper', 5, 19],
    ['Void Spirit', 22, 23],
    ['Warlock', 2, 18, 7],
    ['Weaver', 10, 20],
    ['Windranger', 17, 20],
    ['Witch Doctor', 16, 18]
]
// 0-1     =>  alli1 
// 2-18    =>  alli2 
// 19-24   =>  alli3
// 25: champion

let absHeroNames = ["Legion Commander"];
let absHeroes = heroes.filter(h => absHeroNames.includes(h[0]));
heroes = heroes.filter(h => !absHeroNames.includes(h[0]))
let heroNames = heroes.map(h => h[0]);
heroes = heroes.map(h => h.slice(1))
absHeroes = absHeroes.map(h => h.slice(1))
floatHeroes = [...heroes];
for(let i = 0; i < heroes.length; i++){
    floatHeroes[i] = 0.0000000000000000000000001;
    for(let j = 0; j < heroes[i].length; j++){
        floatHeroes[i] += 1 * Math.pow(10, -1 * heroes[i][j]); 
    }
}
console.log(floatHeroes);


// function checkAllies(arr) {
//     let alliCount = 0;
//     let ally = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // length = 25
//     let arrlen = arr.length;
//     for (let i = 0; i < arrlen; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             ally[arr[i][j]]++;
//         }
//     }
//     if (ally[0] > 0) { alliCount++ }
//     if (ally[1] > 0) { alliCount++ }
//     for (let i = 2; i < 19; i++) {
//         if (ally[i] > 1) { alliCount++; }
//     }
//     for (let i = 19; i < 25; i++) {
//         if (ally[i] > 2) { alliCount++; }
//     }
//     return alliCount;

// }


// let n = heroes.length;
// for (let a = 0; a < n - 8; a++) {
//     console.log(a);
//     for (let b = a + 1; b < n - 7; b++) {
//         for (let c = b + 1; c < n - 6; c++) {
//             for (let i = c + 1; i < n - 5; i++) {
//                 for (let i0 = i + 1; i0 < n - 4; i0++) {
//                     for (let i1 = i0 + 1; i1 < n - 3; i1++) {
//                         for (let i2 = i1 + 1; i2 < n - 2; i2++) {
//                             for (let i3 = i2 + 1; i3 < n - 1; i3++) {
//                                 for (let i4 = i3 + 1; i4 < n; i4++) {
//                                     let tempTeam = [absHeroes[0], heroes[a], heroes[b], heroes[c], heroes[i],
//                                     heroes[i0], heroes[i1], heroes[i2], heroes[i3], heroes[i4]];
//                                     let alliNum = checkAllies(tempTeam);
//                                     if (alliNum = 12) {
//                                         teams.push([alliNum, absHeroNames[0], heroNames[a], heroNames[b], heroNames[c], heroNames[i],
//                                             heroNames[i0], heroNames[i1], heroNames[i2], heroNames[i3], heroNames[i4]]);
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// teams = JSON.stringify(teams)
// const fs = require("fs");
// fs.writeFile("biggerThan9.txt", teams, (err) => { if (err) throw err; });
