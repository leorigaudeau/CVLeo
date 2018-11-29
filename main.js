var hardskill = [
    {name:"HTML5",pourcent:75},
    {name:"JavaScript",pourcent:65},
    {name:"Sass",pourcent:45},
    {name:"Git",pourcent:30},
    {name:"Php",pourcent:10},
    {name:"Java",pourcent:95},
    {name:"SQL",pourcent:11}
]


var knowledge=document.getElementById("kn-listing");

// for (let i = 0; i < hardskill.length; i++) {
//     knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+hardskill[i]+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar animated fadeInLeft"style="width:'+pourcent[i]+'%;"></div></div><p class="pourcent">'+pourcent[i]+'%</p></div>'
// }

hardskill.forEach(element => {
    knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+element.name+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar animated fadeInLeft"style="width:'+element.pourcent+'%;"></div></div><p class="pourcent">'+element.pourcent+'%</p></div>'
    console.log(element.pourcent);
});