let heroes = [
  ["Axe", 1, 2],
  ["Batrider", 15, 10],
  ["Bloodseeker", 0, 3],
  ["Bounty Hunter", 14, 17],
  ["Drow Ranger", 6, 19],
  ["Enchantress", 12, 5, 18],
  ["Nyx Assassin", 8, 17],
  ["Razor", 11, 20],
  ["Shadow Demon", 6, 23],
  ["Shadow Shaman", 15, 5],
  ["Snapfire", 4, 9],
  ["Tiny", 11, 22],
  ["Tusk", 12, 22],
  ["Venomancer", 12, 16, 13],
  ["Warlock", 0, 16, 18],
  ["Beastmaster", 1, 19],
  ["Chaos Knight", 23, 10],
  ["Clockwerk", 14, 9],
  ["Crystal Maiden", 7, 20],
  ["Dazzle", 15, 18],
  ["Ember Spirit", 21, 17],
  ["Legion Commander", 7, 24],
  ["Ogre Magi", 0, 2, 20],
  ["Pudge", 6, 22],
  ["Queen of Pain", 23, 17],
  ["Slardar", 13, 22],
  ["Storm Spirit", 21, 20],
  ["Timbersaw", 14, 9],
  ["Weaver", 14, 8, 19],
  ["Witch Doctor", 15, 16],
  ["Abaddon", 6, 10],
  ["Broodmother", 8, 16],
  ["Earth Spirit", 21, 22],
  ["Io", 11, 5],
  ["Juggernaut", 1, 22],
  ["Lifestealer", 6, 2],
  ["Lycan", 7, 12, 19],
  ["Morphling", 11, 20],
  ["Omniknight", 7, 10, 18],
  ["Shadow Fiend", 23, 16],
  ["Sniper", 14, 3, 19],
  ["Terrorblade", 23, 19],
  ["Tinker", 14, 9],
  ["Treant Protector", 5, 2],
  ["Viper", 4, 17],
  ["Alchemist", 14, 16],
  ["Bristleback", 1, 12],
  ["Doom", 23, 2],
  ["Dragon Knight", 7, 4, 10],
  ["Keeper of the Light", 7, 20],
  ["Kunkka", 7, 22],
  ["Lone Druid", 12, 5],
  ["Necrophos", 6, 18],
  ["Sand King", 12, 8],
  ["Slark", 13, 17],
  ["Sven", 7, 13, 10],
  ["Disruptor", 1, 16],
  ["Faceless Void", 11, 17],
  ["Gyrocopter", 3, 9],
  ["Lich", 6, 20],
  ["Medusa", 13, 19],
  ["Troll Warlord", 15, 22],
  ["Void Spirit", 21, 16]
  /*
  */
];

let alli2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let alli3 = [17, 18, 19, 20, 21, 22];
let allyExample = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // length = 25

let absHeroNames = ["Legion Commander"];
let absHeroes = heroes.filter(h => absHeroNames.includes(h[0]));
heroes = heroes.filter(h => !absHeroNames.includes(h[0]))
let heroNames = heroes.map(h => h[0]);
heroes = heroes.map(h => h.slice(1))
absHeroes = absHeroes.map(h => h.slice(1))

function checkAllies(arr) {
  let alliCount = 0;
  let ally = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // length = 25
  let arrlen = arr.length;
  for (let i = 0; i < arrlen; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      ally[arr[i][j]]++;
    }
  }
  for (let i = 0; i < 17; i++) {
    if (ally[i] > 1) { alliCount++; }
  }
  for (let i = 17; i < 23; i++) {
    if (ally[i] > 2) { alliCount++; }
  }
  if (ally[23] > 0) { alliCount++ }
  return alliCount;
}


let teams = [];
let n = heroes.length;
for (let a = 0; a < n - 8; a++) {
  console.log(a)
  for (let b = a + 1; b < n - 7; b++) {
    for (let c = b + 1; c < n - 6; c++) {
      for (let i = c + 1; i < n - 5; i++) {
        for (let i0 = i + 1; i0 < n - 4; i0++) {
          for (let i1 = i0 + 1; i1 < n - 3; i1++) {
            for (let i2 = i1 + 1; i2 < n - 2; i2++) {
              for (let i3 = i2 + 1; i3 < n - 1; i3++) {
                for (let i4 = i3 + 1; i4 < n; i4++) {
                  let tempTeam = [absHeroes[0], heroes[a], heroes[b], heroes[c], heroes[i],
                  heroes[i0], heroes[i1], heroes[i2], heroes[i3], heroes[i4]];
                  let alliNum = checkAllies(tempTeam);
                  if (alliNum == 9) {
                    teams.push([alliNum, absHeroNames[0], heroNames[a], heroNames[b], heroNames[c], heroNames[i],
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
}
teams = JSON.stringify(teams)
const fs = require("fs");
fs.writeFile("test-9.txt", teams, (err) => { if (err) throw err; });
