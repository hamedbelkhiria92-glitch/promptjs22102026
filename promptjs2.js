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
etudiant.forEach(d=>{
    max=Math.max(d.moy,max)
})
arr1=[]
etudiant.forEach(d=>{
    if(d.moy==max){
        arr1.push(d);
         
    }
})
console.log(arr1)
console.log(max)