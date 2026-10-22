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

max=0
a5erwahed=[]
for(let i=0;i<etudiant.length;i++){
    if(max<etudiant[i].moy){
        a5erwahed=etudiant[i]
        max=etudiant[i].moy
    }
}
console.log(a5erwahed)
console.log(max)