import Link from './Link';
function SideBar(){
    const links = [
        {
            label: "accordion",
            path: "/accordion",
        },
        {
            label: "button",
            path: "/button",
        },
        {
            label: "dropdown",
            path: "/dropdown",
        },
        {
            label: "modal",
            path: "/modal",
        },
    ];
    
        
   
    const renderedLinks = links.map((link)=>{
        return <Link key={link.label} to={link.path}>{link.label}</Link> 
    })
return(<div>
   {renderedLinks}
  
</div>)
}
export default SideBar;