import Accordion from './Accordion';
import Button from './components/Button'
import { BsAndroid2 } from "react-icons/bs";
import DropDown from './components/DropDown';
import Table from './components/Table'
function App(){
    const items = [
        {
            id:"asflds",
            heading:'react is a good thing.',
            description:'react is a good thing.react is a good thing.react is a good thing.'
        },
        {
            id:"jhb",
            heading:'javA is a good thing.',
            description:'react is a good thing.react is a good thing.react is a good thing.'
        },
        {
            id:"i",
            heading:'JS is a good thing.',
            description:'react is a good thing.react is a good thing.react is a good thing.'
        }
        
    ]

    const colors = [{id:'asd',
                      name:'red'},
                      {id:'asdas',
                      name:'green'},
                      {id:'wert',
                      name:'blue'}]

    return(<div>
       
       {/* <Accordion items={items}/> */}

       {/* <DropDown colors={colors}/> */}

       <Table/>
      
    </div>)
}

export default App;