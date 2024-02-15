import { GoArrowUp,GoArrowDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../context/use-sort";
function SortableTable(props) {
 
  const { vehicleConfig ,vehicleData } = props;
  const {sortOrder,
    sortBy,
    updatedData,
    setSortColumn} = useSort(vehicleData,vehicleConfig);
  
  
  

  
  
  const updatedVehicleConfig = vehicleConfig.map((column) => {
    
    
    
    if (!column.sortValue) {
      return column;
    }
   
    return {
      ...column,
      header: () => (
        
        <th onClick={() => setSortColumn(column.label)} className="cursor-pointer hover:bg-gray-100"><div className="flex items-center">{getIcons(column.label,sortOrder,sortBy)}{column.label}</div></th>
      ),
    };
  });
  

  
  
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




