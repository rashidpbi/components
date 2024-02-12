import Table from '../components/Table'

function TablePage(){
    const data = [
        {
            fruit: "Orange",
            color: "bg-orange-500",
            score: 5,
        },
        {
            fruit: "Apple",
            color: "bg-red-500",
            score: 3,
        },
        {
            fruit: "Banana",
            color: "bg-yellow-500",
            score: 1,
        },
        {
            fruit: "Lime",
            color: "bg-green-500",
            score: 4,
        }
];
const config = [
    { label: "fruit", render: (fruit) => fruit.fruit },
    { label: "color", render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> },
    { label: "score", render: (fruit) => fruit.score },
];

const keyFn = (fruit)=>{
    return fruit.fruit
}

 return(<div>
    <Table data={data} config={config} keyFn={keyFn}/>
 </div>)
}

export default TablePage;