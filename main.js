var hardskill = [
    {name:"HTML5",pourcent=75},
    {name:"JavaScript",pourcent=75},
    {name:"Sass",pourcent=75},
    {name:"Git",pourcent=75},
    {name:"Php",pourcent=75},
    {name:"Java",pourcent=75},
    {name:"SQL",pourcent=75},
]
var knowledge=document.getElementById("kn-listing");

for (let i = 0; i < hardskil.length; i++) {
    var name = hardskil[i].name;
    var pourcent = hardskil[i].pourcent;
    knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+name+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar"style="width:'+pourcent+'%;"></div></div><p class="pourcent">'+pourcent+'%</p></div>'
}

