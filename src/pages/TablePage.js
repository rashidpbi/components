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
    { label: "fruits" },
    { label: "color" },
    { label: "score" },
];

 return(<div>
    <Table data={data} config={config}/>
 </div>)
}

export default TablePage;