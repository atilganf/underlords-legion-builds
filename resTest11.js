let heroes = [
    ['Abaddon', 'Heartless', 'Knight', 3],
    ["Arc Warden", "Primordial", "Summoner", 1],
    ['Axe', 'Brawny', 'Brute', 5],
    ['Batrider', 'Troll', 'Knight', 1],
    ['Beastmaster', 'Brawny', 'Hunter', 2],
    ['Bloodseeker', 'Blood-Bound', 'Deadeye', 1],
    ['Bristleback', 'Brawny', 'Savage', 2],
    ['Broodmother', 'Insect', 'Warlock', 3],
    ['Chaos Knight', 'Demon', 'Knight', 2],
    ['Crystal Maiden', 'Human', 'Mage', 1],
    ['Dazzle', 'Troll', 'Healer', 2],
    ['Disruptor', 'Brawny', 'Warlock', 4],
    ['Doom', 'Demon', 'Brute', 4],
    ['Dragon Knight', 'Human', 'Dragon', 'Knight', 5],
    ['Drow Ranger', 'Heartless', "Vigilant", 'Hunter', 1],
    ['Earth Spirit', 'Spirit', 'Warrior', 3],
    ['Ember Spirit', 'Spirit', 'Assassin', 2],
    ["Enigma", "Void", "Primordial", 3],
    ['Faceless Void', 'Void', 'Assassin', 5],
    ['Io', 'Primordial', 'Druid', 3],
    ['Juggernaut', 'Brawny', 'Warrior', 3],
    ['Keeper of the Light', 'Human', 'Mage', 4],
    //['Kunkka', 'Human', 'Warrior', 4],
    ['Legion Commander', 'Human', 'Champion', 2],
    ['Lich', 'Heartless', 'Mage', 5],
    ['Lifestealer', 'Heartless', 'Brute', 3],
    ['Lone Druid', 'Savage', 'Druid', "Summoner", 4],
    ["Luna", "Vigilant", "Knight", 2],
    ['Lycan', 'Human', 'Savage', 'Summoner', 3],
    ["Magnus", "Savage", "Druid", 1],
    ['Medusa', 'Scaled', 'Hunter', 5],
    ["Mirana", "Vigilant", "Hunter", 4],
    ['Morphling', 'Primordial', 'Mage', 3],
    ["Natures Prophet", "Druid", "Summoner", 2],
    ['Necrophos', 'Heartless', "Warlock", 'Healer', 4],
    ['Nyx Assassin', 'Insect', 'Assassin', 1],
    ['Ogre Magi', 'Blood-Bound', 'Brute', 'Mage', 2],
    ['Omniknight', 'Human', 'Knight', 'Healer', 3],
    ['Pudge', 'Heartless', 'Warrior', 2],
    ['Queen of Pain', 'Demon', 'Assassin', 2],
    ['Razor', 'Primordial', 'Mage', 1],
    ['Sand King', 'Savage', 'Insect', 5],
    ['Shadow Demon', 'Heartless', 'Demon', 1],
    ['Shadow Fiend', 'Demon', 'Warlock', 3],
    ['Shadow Shaman', 'Troll', 'Summoner', 1],
    ['Slardar', 'Scaled', 'Warrior', 2],
    ['Slark', 'Scaled', 'Assassin', 4],
    ['Snapfire', 'Dragon', 'Brawny', 1],
    // ['Sniper', 'Scrappy', 'Deadeye', 'Hunter', 3],
    ['Storm Spirit', 'Spirit', 'Mage', 2],
    ['Sven', 'Human', 'Scaled', 'Knight', 4],
    ["Templar Assassin", "Vigilant", "Void", "Assassin", 4],
    ['Terrorblade', 'Demon', 'Hunter', 3],
    ["Tidehunter", "Scaled", "Warrior", 4],
    // ['Timbersaw', 'Scrappy', 'Inventor', 2],
    // ['Tinker', 'Scrappy', 'Inventor', 3],
    ['Tiny', 'Primordial', 'Warrior', 1],
    ['Treant Protector', 'Druid', 'Brute', 3],
    ['Troll Warlord', 'Troll', 'Warrior', 5],
    ['Tusk', 'Savage', 'Warrior', 1],
    ['Venomancer', 'Summoner', 'Scaled', 1],
    ['Viper', 'Dragon', 'Assassin', 3],
    ['Void Spirit', 'Spirit', 'Void', 4],
    ['Warlock', 'Blood-Bound', 'Warlock', 'Healer', 1],
    ['Weaver', 'Insect', 'Hunter', 1],
    ["Windranger", "Vigilant", "Hunter", 2],
    ['Witch Doctor', 'Troll', 'Warlock', 2]
];

let alli1 = ["Deadeye", "Demon"];
let alli2 = ["Blood-Bound", "Brawny", "Brute", "Dragon", "Druid", "Healer", "Heartless", "Human", "Insect", "Knight",
    "Primordial", "Savage", "Scaled", "Summoner", "Troll", "Vigilant", "Warlock"];
let alli3 = ["Assassin", "Hunter", "Mage", "Spirit", "Void", "Warrior"];
let allAlli = [...alli1, ...alli2, ...alli3, "Champion"];


// res = res.map(t => t.slice(1));
// res = res.map(t => { t = t.map(rh => heroes.find(h => h[0] == rh)); return t })

// let newRes = res

function tierTotalLess(arr, tierTotal) {
    return arr.filter(t => {
        let n = 0;
        t.map(h => n += h[h.length - 1]);
        if (n < tierTotal)
            return t
    })
}

function checkBuilds(arr, allience, number) {
    return arr.filter(t => {
        let n = 0;
        t.map(h => h.slice(1).map(e => {
            if (e == allience) { n++ }
        }));
        if (number == 0) {
            if (n < 2)
                return t
        } else if (n > number - 1)
            return t
    })
}

function log(arr) {
    console.log(arr.map(t => t.map(h => h[0])));
}


function bestofSix(arr) {
    return arr.map(t => {
        let filtTeam = t.filter(h => h[h.length - 1] < 4)
        let sixTeams = [];
        if (filtTeam.length > 5) {
            //TODO
        }
        return filtTeam;
    })
}
function checkHero(arr, hero) {
    hero = heroes.find(h => h[0] == hero);
    return arr.filter(t => t.includes(hero)
    )
}
function multiArrayNameSort(arr) {
    return arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });
}
function heroesToNumberArr() {
    let res = [...heroes];
    for (let i = 0; i < heroes.length; i++) {
        res[i].pop();
        for (let j = 0; j < allAlli.length; j++) {
            for (let k = 1; k < res[i].length; k++) {
                if(res[i][k] == allAlli[j]){
                    res[i][k] = j;
                }
            }
        }
    }
    return res;
}
console.log(heroesToNumberArr());

//underlords.app/build otomatik build oluşturma kodu
if (false) {
    let arr =
        ["Legion Commander", "Axe", "Shadow Demon", "Venomancer", "Beastmaster", "Chaos Knight", "Lifestealer", "Bristleback", "Sven", "Disruptor"]
    let spans = document.querySelectorAll("span")
    let fn = 0;
    for (let i = 0; i < spans.length; i++) {
        for (let j = fn; j < arr.length; j++) {
            if (spans[i].innerText == arr[j]) {
                spans[i].click()
                fn++;
            }
        }
    }
}