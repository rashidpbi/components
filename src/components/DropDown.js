import { useState } from "react";
function DropDown({colors}){
    const [showList,setShowList] = useState(false);
    const [selectedColor,setSelectedColor ]= useState('select a color');

    const onDropdownSelect = ()=>{
        setShowList(!showList);
        console.log(showList);
    }

    const onColorSelect = (color)=>{
        setSelectedColor(color);
        setShowList(!showList);
        
    }
   
    const renderedItems = colors.map((color,index)=>{
        return (<div key={index} onClick={()=>{onColorSelect(color.name)}}>{color.name}</div>)
    })
    return(<div>
        <h2 onClick={onDropdownSelect}>{selectedColor}</h2>
        {showList && renderedItems}
        </div>)
}

export default DropDown;