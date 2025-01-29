const mainTable=[
    {
        sno:"1",
        name:"Hari",
        age:'22',
        mark:'70',
        total:'350'
    },
    {
        sno:"2",
        name:"Ravi",
        age:'12',
        mark:'90',
        total:'450'
    },
    {
        sno:"3",
        name:"Suresh",
        age:'25',
        mark:'80',
        total:'400'
    },
    {
        sno:"4",
        name:"Ganesh",
        age:'15',
        mark:'60',
        total:'300'
    },
    {
        sno:"5",
        name:"Ganesh",
        age:'25',
        mark:'70',
        total:'300'
    },
    {
        sno:"6",
        name:"Ramesh",
        age:'45',
        mark:'80',
        total:'300'
    },
    {
        sno:"7",
        name:"Rajesh",
        age:'25',
        mark:'90',
        total:'400'
    },
    {
        sno:"8",
        name:"Dineshkumar",
        age:'12',
        mark:'30',
        total:'10'
    }
]


const tableKeys=Object.keys(mainTable[0]);//heading
const myInput=document.querySelector(".myInput");//input
myInput.addEventListener('input',inputFilter);//filiter in event show and filter
window.addEventListener('load', loadTable);//load in tables

function inputFilter(e){
    // console.log(e.target.value);
    let result=mainTable.filter(
        a=> 
         a.name.toUpperCase().includes(e.target.value.toUpperCase())||
         a.age.toUpperCase().includes(e.target.value.toUpperCase())||
         a.total.toUpperCase().includes(e.target.value.toUpperCase())||
         a.mark.toUpperCase().includes(e.target.value.toUpperCase())

    );
    let tableResult="<table><tr>";
    tableKeys.forEach(
            a=>tableResult+=`<th>${a.toUpperCase()}</th>`
        );
    let sno=1;
    if(result.length>0){
        result.forEach(a=>
            tableResult+=`
            <tr>
                <td>${sno++}</td>
                <td>${a.name}</td>
                <td>${a.age}</td>
                <td>${a.mark}</td>
                <td>${a.total}</td>
            </tr>
            `
        )
    }
    else{
        tableResult=`<div class='no-result'>No Result</div>`
    }
    tableResult+=`</tr></table>`
    document.querySelector(".myDiv").innerHTML=tableResult;
}




function loadTable(){
let table="<table><tr>";
let th="";
tableKeys.forEach(a=>
    table+=`<th>${a.toUpperCase()}</th>`
);
table+="</tr>";

mainTable.forEach(a=>
    table+=`
        <tr>
            <td>${a.sno}</td>
            <td>${a.name}</td>
            <td>${a.age}</td>
            <td>${a.mark}</td>
            <td>${a.total}</td>
        </tr>
    `  
);
    document.querySelector(".myDiv").innerHTML=table;
}



