




import ButtonPage from './pages/ButtonPage';
import Route from './components/Route';
import DropDownPage from './pages/DropDownPage';

import AccordionPage from './pages/AccordionPage'
import SideBar from './components/SideBar'
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

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
       <SideBar/>
                       
                    
                        <div>
                           <Route path="/">
                            <AccordionPage items={items}/>
                            </Route>
                            <Route path="/accordion">
                            <AccordionPage items={items}/>
                            </Route>
                            <Route path="/button">
                                <ButtonPage/>
                            </Route>
                            <Route path="/dropdown">
                            <DropDownPage colors={colors}/>
                            </Route>
                            <Route path="/modal">
                            <ModalPage />
                            </Route>
                            <Route path="/table">
                            <TablePage />
                            </Route>
                        </div>
                          
                    
                    
                        </div>)
}

export default App;