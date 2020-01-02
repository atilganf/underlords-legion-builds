//get heroes with addding id table
td = document.querySelector("tbody")
t1 = td.querySelectorAll("tr")
heroes = [];
for (let i = 0; i < 63; i++) { heroes.push([]) }
for (let i = 0; i < 63; i++) {
  let name = t1[i].childNodes[2].innerText
  heroes[i].push(name)
  let syn = t1[i].childNodes[3].querySelectorAll("img")
  for (let j = 0; j < syn.length; j++) {
    heroes[i].push(syn[j].alt)
  }
  let tier = t1[i].lastElementChild.innerText
  tier = tier == "ACE" ? 5 : parseInt(tier.slice(-1), 10);
  heroes[i].push(tier)
  console.log(heroes[i])
}
txt = "";
heroes.forEach(h => txt += h.toString() + "|")

//get synergies with adding id table
synName = document.getElementsByClassName("heading");
synNum = h = document.getElementsByClassName("content");
s2 = ""
s3 = ""
for (let i = 0; i < name.length; i++) {
  if (synNum[i + 1].querySelector("span").innerText == "2") {
    s2 += synName[i].querySelector("img").alt + ","
  } else {
    s3 += synName[i].querySelector("img").alt + ","
  }
}