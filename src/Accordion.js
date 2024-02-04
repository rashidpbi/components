import { useState } from "react"
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";
function Accordion ({items}){

    const [isExpanded,setIsExpanded] = useState(null);
    let arrow = <IoIosArrowDown/>;
    const handleClick = (newItem)=>{
        console.log(newItem.heading)
        console.log(isExpanded)
     setIsExpanded(newItem.id)
     arrow=<IoIosArrowForward/>;
     if(newItem.id===isExpanded){
        setIsExpanded(null)
     }
    }
    const renderedItems = items.map((item)=>{
        return (<div key={item.id}>
           
            <div onClick={()=> handleClick(item)}>{item.heading} {arrow}</div>
            
            {item.id===isExpanded && <div>{item.description}</div>}
        </div>)
    })
    return (<div>
       {renderedItems}
    </div>)
}

export default Accordion;


