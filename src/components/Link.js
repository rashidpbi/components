import classNames from "classnames";
import useNavigation from "../context/use-navigation";
function Link({to,children}){

    const classes = classNames('text-blue-500');
    const {navigate} = useNavigation()
    const handleClick = (e)=>{
        
         if(e.ctrlKey||e.metakey) {
          
          return
            
        };

        e.preventDefault();
        navigate(to); 
    }
    return(<a href={to} className={classes} onClick={handleClick} >{children}</a>)
}

export default Link;