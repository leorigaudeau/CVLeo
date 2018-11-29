var hardskill = [
    {name:"HTML5",pourcent:85},
    {name:"JavaScript",pourcent:55},
    {name:"Sass",pourcent:80},
    {name:"Git",pourcent:50},
    {name:"Php",pourcent:30},
    {name:"Java",pourcent:50},
    {name:"SQL",pourcent:65}
]


var knowledge=document.getElementById("kn-listing");

// for (let i = 0; i < hardskill.length; i++) {
//     knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+hardskill[i]+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar animated fadeInLeft"style="width:'+pourcent[i]+'%;"></div></div><p class="pourcent">'+pourcent[i]+'%</p></div>'
// }

hardskill.forEach(element => {
    knowledge.innerHTML+='<div class="kn-ligne"><p class="element">'+element.name+'</p><div class="kn-contentprogressbar"><div class="kn-progressbar animated fadeInLeft"style="width:'+element.pourcent+'%;"></div><p class="pourcent">'+element.pourcent+'%</p></div></div>'
    
});