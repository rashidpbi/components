

import DropDown from './components/DropDown';
import Link from './components/Link';
import Accordion from './components/Accordion';
import ButtonPage from './pages/ButtonPage';
import Route from './components/Route';
import DropDownPage from './pages/DropDownPage';
import Button from './components/Button';
import AccordionPage from './pages/AccordionPage'
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
       Hi

       <AccordionPage items={items}/>
     {/*  <DropDownPage colors={colors}/> */}
    
   {/* <ButtonPage/> */}


    </div>)
}

export default App;