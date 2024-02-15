import SortableTable from '../components/SortableTable';

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
const vehicleData = [
    {
        vehicle: "Car",
        color: "bg-blue-500",
        speed: 10,
    },
    {
        vehicle: "Motorcycle",
        color: "bg-gray-500",
        speed: 80,
    },
    {
        vehicle: "Truck",
        color: "bg-yellow-700",
        speed: 6,
    },
    {
        vehicle: "Bicycle",
        color: "bg-green-300",
        speed: 20,
    }
];

const vehicleConfig = [
    { label: "vehicle", render: (vehicle) => vehicle.vehicle ,sortValue:(vehicle)=>vehicle.vehicle},
    { label: "color", render: (vehicle) => <div className={`p-3 m-2 ${vehicle.color}`}></div> },
    { label: "speed", render: (vehicle) => vehicle.speed, sortValue:(vehicle)=>vehicle.speed},
    { label: "speed doubled", render: (vehicle) => 2* vehicle.speed, sortValue:(vehicle)=> 2 * vehicle.speed}
];

const keyFn = (fruit)=>{
    return fruit.fruit
}
const keyFnVeh = (vehicle)=>{
    return vehicle.vehicle
}

 return(<div>
    <SortableTable  keyFnVeh={keyFnVeh} vehicleData={vehicleData} vehicleConfig={vehicleConfig}/>
  
   
 </div>)
}

export default TablePage;