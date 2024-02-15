import { useState } from "react";
function useSort(vehicleData,vehicleConfig){
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortColumn = (label) => {

        if (sortBy && label !== sortBy){
          setSortOrder('asc');
          setSortBy(label);
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

      return({
        sortOrder,
        sortBy,
        updatedData,
        setSortColumn
      })

}
export default useSort;
