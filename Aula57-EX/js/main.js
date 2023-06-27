const paragrafo = document.querySelector(".paragrafo");
const ps = document.querySelectorAll('p')
const styleBody = getComputedStyle(document.body);
const bkColor = styleBody.backgroundColor;

for(let i of ps){
    i.style.backgroundColor = bkColor;
    i.style.color="#FFFF";
}