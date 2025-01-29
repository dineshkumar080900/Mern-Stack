const details=[
    {
        name:"dinesh",
        age:"23",
        state:"tamilnadu"
    },
    {
        name:"Karthi",
        age:"24",
        state:"tamilnadu"
    },
    {
        name:"mani",
        age:"23",
        state:"tamilnadu"
    },
]


console.log(details)



const position=Object.keys(details[0]);
const table="";
positions.forEach(position => {
    table += `<th>${position}</th>`;
});

