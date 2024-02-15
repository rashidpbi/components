import { GoArrowUp,GoArrowDown } from "react-icons/go";
import { useState } from "react";
import Table from "./Table";
function SortableTable(props) {
  
  
  const { vehicleConfig ,vehicleData } = props;
  
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  

  
  
  const updatedVehicleConfig = vehicleConfig.map((column) => {
    
    
    const onClick = (label) => {

      if (sortBy && column.label !== sortBy){
        setSortOrder('asc');
        setSortBy(column.label);
        return;
      }

      if (sortOrder === null) {
        setSortOrder("asc");
        setSortBy(label);
      } else if (sortOrder === "asc") {
        setSortOrder("desc");
        setSortBy(label);
      } else if (sortOrder === "desc") {
        setSortOrder(null);
        setSortBy(null);
      }
    };
    if (!column.sortValue) {
      return column;
    }
   
    return {
      ...column,
      header: () => (
        
        <th onClick={() => onClick(column.label)} className="cursor-pointer hover:bg-gray-100"><div className="flex items-center">{getIcons(column.label,sortOrder,sortBy)}{column.label}</div></th>
      ),
    };
  });
  

  let updatedData = vehicleData;
  if(sortBy=== null && sortOrder === null){
    updatedData = [...vehicleData];
  }else{
    const {sortValue} = vehicleConfig.find((column) => column.label === sortBy);
    
    updatedData = [...vehicleData].sort((a,b)=>{
      let reverseOrder = sortOrder==='asc'?1:-1;
      let valueA = sortValue(a);
      let valueB = sortValue(b);
       if(typeof valueA === 'number'){
        return (valueA - valueB)*reverseOrder
       }else if (typeof valueA === 'string'){
        return (valueA.localeCompare(valueB)*reverseOrder)
       }
     })
  }
  return (
      <Table {...props} vehicleData = {updatedData} vehicleConfig={updatedVehicleConfig} />
  
  );
}

function getIcons(label,sortOrder,sortBy){
  if(label !== sortBy){
    return (<div><GoArrowUp/><GoArrowDown/></div>)
  }else if (sortOrder === 'asc'){
    return <GoArrowUp/>
  }else if (sortOrder === 'desc')
  return <GoArrowDown/>

}
export default SortableTable;




