let etudiant=[{
    name:'ayoub',moy:17.6
},
{name:'Ahmed',moy:9},{
    name:"Baraa",moy:14.68
},
{
    name:'sana',moy:17.6
}
]


let resultat=etudiant.map(e=>e.moy)
let maxresultat=Math.max(...resultat)
let ind=etudiant.filter(e=>e.moy==maxresultat)
console.log(ind)
