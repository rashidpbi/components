
import { useState,useEffect,useContext } from 'react';

import DropDown from './components/DropDown';
import Link from './components/Link';
import Accordion from './components/Accordion';
import ButtonPage from './pages/ButtonPage';
import Route from './components/Route';
import DropDownPage from './pages/DropDownPage';
import Button from './components/Button';
import AccordionPage from './pages/AccordionPage'
import NavigationContext from './context/navigation';
function App(){

    const check = useContext(NavigationContext);
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
       
    <Link to="/accordion">go to accordion</Link>
    <Link to="/button">go to button</Link>
    <Link to="/dropdown">go to dropdown</Link>

    <div>
        <Route path="/accordion">
        <AccordionPage items={items}/>
        </Route>
        <Route path="/button">
            <ButtonPage/>
        </Route>
        <Route path="/dropdown">
        <DropDownPage colors={colors}/>
        </Route>
    </div>
      


    </div>)
}

export default App;